import {
  SearchParams,
  Product,
  GetProductListResponse,
} from "@/features/product";
import { PAGE_STANDARD } from "@/lib/constants";

export const getProductList = async ({
  order = "latest",
  category,
  page = 1,
}: SearchParams): Promise<GetProductListResponse> => {
  const params = new URLSearchParams();
  if (order) params.append("order", order);
  if (category) params.append("category", category);
  if (page) params.append("page", String(page));

  const res = await fetch(`/api/products?${params.toString()}`);
  if (!res.ok) throw new Error("상품 목록을 불러오지 못했습니다.");

  const data: GetProductListResponse = await res.json();
  return data;
};
