import { ScrapedAProduct } from '@/types/dataImport.types';
import puppeteer from 'puppeteer';

/**
 * src\lib\scraper\enuriScraper.ts
 *
 * @param keyword 상품 키워드 (예: "노트북")
 * @returns Cheerio 기반 크롤링 모듈 제작
 * 에누리 검색 결과 크롤링
 */
export const scrapeEnuriProducts = async (
  keyword: string,
): Promise<ScrapedAProduct[]> => {
  const browser = await puppeteer.launch({
    headless: true, // 최신 버전 기준 headless 모드 안정화
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // 일반 브라우저처럼 보이게 설정
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  );

  const searchUrl = `https://www.enuri.com/search.jsp?keyword=${encodeURIComponent(
    keyword,
  )}`;

  await page.goto(searchUrl, {
    waitUntil: 'domcontentloaded', // 모든 리소스 로딩이 완료될 때까지 대기
    timeout: 30000,
  });

  // 상품 리스트 로딩 대기
  await page.waitForSelector("li.prodItem[data-type='model']", {
    timeout: 15000,
  });

  const products: ScrapedAProduct[] = await page.$$eval(
    "li.prodItem[data-type='model']",
    (items) => {
      return items.map((item) => {
        // console.log(
        //   'item->',
        //   item.querySelector(`[data-type='modelname']`)?.textContent,
        // );
        // const title =
        //   item.querySelector('.prod_name')?.textContent?.trim() || 'No title?';
        const title =
          item.querySelector(`[data-type='modelname']`)?.textContent?.trim() ||
          'No title?';
        const price =
          item.querySelector('.tx--price')?.textContent?.trim() || 'No price';
        const image =
          (item.querySelector('.item__thumb a img') as HTMLImageElement)?.src ||
          '';
        const link = (item.querySelector('a') as HTMLAnchorElement)?.href || '';
        return { title, price, image, link };
      });
    },
  );

  await browser.close();
  return products;
};
