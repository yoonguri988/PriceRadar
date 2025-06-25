// Product 모델을 수정할 때 한 파일만 보면 되므로 DX(개발자 경험) Good
/**
 * 만약 기능별로 분할 해야할 때,
 * - product.type       -> 데이터 모델
 * - product.query.type -> React Query 용
 * - product.form.type  -> React Hook Form 용
 *
 * 자동 생성 타입 / 수동 생성 타입
 * - openapi-types -> 코드 자동 생선된 api 응답
 * - local-types   -> 프론트에서만 쓰는 조합 타입
 */

// api 파라미터
export type SearchParams = {
  sort?: string;
  filter?: string;
  page?: number;
};

//서버 응답
export interface ProductBadge {
  text: string;
  color: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  seller: string;
  reviewCount: number;
  shippingInfo: string;
  isSoldOut: boolean;
  rating: number;
  createdAt: string;
  updatedAt: string;
  badges: ProductBadge[];
  liked: boolean;
}

export interface GetProductListResponse {
  items: Product[];
  hasMore: boolean;
}

// UI 컴포넌트
export interface ProductCardProps {
  sect: String;
  product: Product;

  onClick?: () => void;
  onFavoriteToggle?: () => void;
}

/** @desc 정렬 기준 및 필터 기준
 * 최신순 | 낮은 가격순 | 높은 가격순 | 리뷰 많은순 | 신상품순
 * 전체 | 품절 상품 제외 | 즐겨찾기만 보기
 *
 */
export type SortOption =
  | 'all'
  | 'priceAsc'
  | 'priceDesc'
  | 'reviewDesc'
  | 'latest';
export type FilterOption =
  | 'all'
  | 'electronics'
  | 'fashion'
  | 'beauty'
  | 'sports'
  | 'books';

export type ProductSortStoreProps = {
  sort: SortOption;
  setSort: (sort: SortOption) => void;
  filter: FilterOption;
  setFilter: (filter: FilterOption) => void;
};

export interface ProductDetailProps {
  id: String;
}

export interface NotificationProps {
  productId: string;
}
