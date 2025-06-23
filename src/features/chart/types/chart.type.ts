/* src\features\chart\types\chart.type.ts */
// api 파라미터
export type SearchParams = {
  productId: string;
  sort?: string;
  filter?: string;
};

export interface PriceData {
  productId: string;
  date: string; // ISO format
  price: number;
}
