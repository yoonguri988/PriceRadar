export type Source = 'danawa' | 'enuri';

export interface ScrapedProduct {
  title: string;
  price: number;
  image?: string;
  link: string;
}

export interface ScrapedAProduct {
  title: string;
  price: string;
  image?: string;
  link: string;
}

export interface ScrapedProductProps {
  keyword: string;
  source: Source;
}
