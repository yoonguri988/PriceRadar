// src/features/product/hooks/useProductDetail.ts

import { useQuery } from "@tanstack/react-query";
import { Product, getProductDetail } from "@/features/product";

export const useProductDetail = (productId: string) => {
  return useQuery<Product>({
    queryKey: ["productDetail", productId],
    queryFn: () => getProductDetail(productId),
    enabled: !!productId,
  });
};
