import { useQuery } from '@tanstack/react-query';
import { scrapeDanawaProducts } from '@/lib/scraper/danawaScraper';
import { scrapeEnuriProducts } from '@/lib/scraper/enuriScraper';
import {
  ScrapedProduct,
  UseScrapedProductsProps,
} from '@/types/dataImport.types';

/**
 * src\features\product\api\useScrapedProducts.ts
 *
 * @param {keyword: string, source: Source}
 * @returns
 * 상품 검색 키워드에 따라 크롤링된 상품 정보를 불러오는 훅
 */
export function useScrapedProducts({
  keyword,
  source,
}: UseScrapedProductsProps) {
  return useQuery<ScrapedProduct[]>({
    queryKey: ['scrapedProducts', keyword, source],
    queryFn: async () => {
      if (source === 'danawa') return await scrapeDanawaProducts(keyword);
      if (source === 'enuri') return await scrapeEnuriProducts(keyword);
      return [];
    },
    enabled: !!keyword, // 키워드가 있을 때만 요청
  });
}
