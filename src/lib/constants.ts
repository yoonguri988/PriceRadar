import { FilterOption, SortOption } from "@/features/product";
// 예: 정렬 기준 enum 또는 상수
export const ORDER_OPTIONS = [
  { label: "최신순", value: "latest" },
  { label: "낮은 가격순", value: "priceAsc" },
  { label: "높은 가격순", value: "priceDesc" },
];

export const CATEGORY_OPTIONS = [
  { value: "", label: "전체 카테고리" },
  { value: "electronics", label: "전자제품" },
  { value: "fashion", label: "패션" },
  { value: "beauty", label: "뷰티" },
  { value: "sports", label: "스포츠" },
  { value: "books", label: "도서" },
];

export const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "가격순", value: "price" },
  { label: "이름순", value: "name" },
  { label: "할인율순", value: "discount" },
];

export const FILTER_OPTIONS: { label: string; value: FilterOption }[] = [
  { label: "전체 보기", value: "all" },
  { label: "즐겨찾기만", value: "favorites" },
  { label: "재고 있는 상품만", value: "inStock" },
];

// 한 페이지당 기준
export const PAGE_STANDARD = 10;
