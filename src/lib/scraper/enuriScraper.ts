import { ScrapedProduct } from '@/types/dataImport.types';
import axios from 'axios';
import * as cheerio from 'cheerio';

/**
 * src\lib\scraper\enuriScraper.ts
 *
 * @param keyword 상품 키워드 (예: "노트북")
 * @returns Cheerio 기반 크롤링 모듈 제작
 * 에누리 검색 결과 크롤링
 */

export async function scrapeEnuriProducts(
  keyword: string,
): Promise<ScrapedProduct[]> {
  const url = `https://search.enuri.com/Search.jsp?searchKey=${encodeURIComponent(
    keyword,
  )}`;

  const { data: html } = await axios.get(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    },
  });

  const $ = cheerio.load(html);
  const result: ScrapedProduct[] = [];

  $('ul.list > li').each((_, el) => {
    const $el = $(el);
    const title = $el.find('.info_title > a').text().trim();
    const priceText = $el
      .find('.price > strong')
      .first()
      .text()
      .replace(/[,원\s]/g, '');
    const image = $el.find('img.thumb_img').attr('src') || '';
    const link = $el.find('.info_title > a').attr('href') || '';

    if (title && priceText && image && link) {
      result.push({
        title,
        price: parseInt(priceText, 10),
        image,
        link: link.startsWith('http') ? link : `https:${link}`,
      });
    }
  });

  return result;
}
