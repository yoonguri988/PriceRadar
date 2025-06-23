import { PriceData, SearchParams } from "@/features/chart";

export const getPriceHistory = async ({
  productId,
  sort = "all",
  filter = "all",
}: SearchParams): Promise<PriceData[]> => {
  const params = new URLSearchParams();
  if (productId) params.append("productId", productId);

  const res = await fetch(`/api/chart?${params.toString()}`);
  if (!res.ok) throw new Error("가격 데이터를 불러오지 못했습니다.");

  const data: PriceData[] = await res.json();
  return data;
};
