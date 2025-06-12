import { QueryFunctionContext } from "@tanstack/react-query";
import { Product, SearchParams } from "@/features/product";

export const getList = async ({
  queryKey,
}: QueryFunctionContext<[string, SearchParams]>): Promise<Product[]> => {
  const [_key, { order, category }] = queryKey;

  const searchParams = `order=${order}&category=${category}`;

  const res = await fetch(`/api/products?${searchParams}`);
  if (!res.ok) throw new Error("상품 목록을 불러오지 못했습니다.");
  return res.json();
};
