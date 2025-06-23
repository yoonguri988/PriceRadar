import { useQuery } from "@tanstack/react-query";
import { getPriceHistory, PriceData, SearchParams } from "@/features/chart";
/**
 *
 * @param params
 * @returns
 * => args.productId가 동적으로 변경되거나 undefined에서 시작되면
 * 초기 렌더 시 훅 호출 타이밍이 다르다고 인식되어 오류 발생 가능성 매우 높음
 */
export const usePriceHistory = (params: SearchParams) => {
  return useQuery<PriceData[]>({
    queryKey: ["priceHistory", params.productId],
    queryFn: () => getPriceHistory(params),
    enabled: Boolean(params.productId),
    staleTime: 1000 * 60, // 1분 캐싱
  });
};
