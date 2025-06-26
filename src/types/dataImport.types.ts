export type Source = 'danawa' | 'enuri';

export interface ScrapedProduct {
  title: string;
  price: number;
  image: string;
  link: string;
}

export interface UseScrapedProductsProps {
  keyword: string;
  source: Source;
}
