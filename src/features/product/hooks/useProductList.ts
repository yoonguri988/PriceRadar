import { SearchParams, getProductList } from "@/features/product";
import { useInfiniteQuery } from "@tanstack/react-query";

/**
 *
 * @param params order, category
 * @returns getList()
 * @description
 * queryKey: 고유한 key
 * queryFn: 데이터를 가져오는 함수
 */
export const useProductList = (params: SearchParams) => {
  return useInfiniteQuery({
    queryKey: ["productList", params],
    queryFn: ({ pageParam = 1 }) =>
      getProductList({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });
};
