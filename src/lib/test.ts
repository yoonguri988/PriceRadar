/**
 * src\lib\test.ts
 *
 * @description Cheerio 기반 크롤링
 */
import { scrapeDanawaProducts } from '@/lib/scraper/danawaScraper';

scrapeDanawaProducts('게이밍 노트북').then(console.log);
