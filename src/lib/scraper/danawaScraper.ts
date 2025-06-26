import { ScrapedProduct } from '@/types/dataImport.types';
import axios from 'axios';
import * as cheerio from 'cheerio';

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
  const searchUrl = `https://search.danawa.com/dsearch.php?query=${encodeURIComponent(
    keyword,
  )}&tab=main`;

  const { data: html } = await axios.get(searchUrl, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    },
  });

  const $ = cheerio.load(html);
  const result: ScrapedProduct[] = [];

  $('div.main_prodlist > ul > li.prod_item').each((_, el) => {
    const $el = $(el);

    const title = $el.find('p.prod_name > a').text().trim();
    const priceText = $el
      .find('p.price_sect > a > strong')
      .first()
      .text()
      .replace(/[,원\s]/g, '');
    const image = $el.find('div.thumb_image img').attr('data-original') || '';
    const link = $el.find('p.prod_name > a').attr('href') || '';

    if (title && priceText && image && link) {
      result.push({
        title,
        price: parseInt(priceText, 10),
        image,
        link,
      });
    }
  });

  return result;
}
