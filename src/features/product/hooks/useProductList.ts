import { useQuery } from "@tanstack/react-query";
import { SearchParams, getList } from "@/features/product";

export const useProductList = ({
  order = "latest",
  category = "",
}: SearchParams) => {
  return useQuery({
    queryKey: ["productList", { order, category }], // 고유한 key
    queryFn: getList, // 데이터를 가져오는 함수
  });
};
