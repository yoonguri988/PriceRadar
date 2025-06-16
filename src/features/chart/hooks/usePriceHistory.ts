// src/features/chart/hooks/usePriceHistory.ts

import { useQuery } from "@tanstack/react-query";
import { getPriceHistory } from "@/features/chart";

export const usePriceHistory = (productId: string) => {
  return useQuery({
    queryKey: ["priceHistory", productId],
    queryFn: () => getPriceHistory(productId),
  });
};
