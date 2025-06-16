// src/features/chart/api/chartAPI.ts

type PricePoint = {
  date: string; // ISO format
  price: number;
};

export const getPriceHistory = async (
  productId: string
): Promise<PricePoint[]> => {
  // 임시 가상 데이터
  return [
    { date: "2024-06-01", price: 10000 },
    { date: "2024-06-02", price: 9800 },
    { date: "2024-06-03", price: 9700 },
    { date: "2024-06-04", price: 9900 },
    { date: "2024-06-05", price: 9500 },
  ];
};
