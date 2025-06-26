import { ScrapedProduct } from '@/types/dataImport.types';
import puppeteer from 'puppeteer';

/**
 * src\lib\danawaScraper.ts
 *
 * @param keyword 검색할 상품 키워드 (예: '노트북')
 * @returns Cheerio 기반 크롤링 모듈 제작
 * 다나와에서 키워드로 상품 검색 후 결과를 추출합니다.
 */

export async function scrapeDanawaProducts(
  keyword: string,
): Promise<ScrapedProduct[]> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = `https://search.danawa.com/dsearch.php?query=${encodeURIComponent(
    keyword,
  )}`;

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

  const products = await page.evaluate(() => {
    const result: ScrapedProduct[] = [];
    const items = document.querySelectorAll('ul.product_list li.prod_item');

    items.forEach((el) => {
      const title = el.querySelector('p.prod_name a')?.textContent?.trim();
      const price = el
        .querySelector('p.price_sect a strong')
        ?.textContent?.replace(/[^\d]/g, '');
      const image = (el.querySelector('.thumb_image img') as HTMLImageElement)
        ?.src;
      const link = (el.querySelector('p.prod_name a') as HTMLAnchorElement)
        ?.href;

      if (title && price && image && link) {
        result.push({
          title,
          price: parseInt(price, 10),
          image,
          link,
        });
      }
    });

    return result;
  });

  await browser.close();
  return products;
}
