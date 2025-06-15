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
  order?: string;
  category?: string;
  page?: number;
};

//서버 응답
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  seller?: string;
  reviewCount?: number;
  shippingInfo?: string;
  isSoldOut?: boolean;
  badges?: { text: string; color?: string }[];
  isFavorite?: boolean;
}

export interface GetProductListResponse {
  items: Product[];
  hasMore: boolean;
}

// UI 컴포넌트
export interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  seller?: string;
  reviewCount?: number;
  shippingInfo?: string;
  isSoldOut?: boolean; // 품절 상태
  originalPrice?: number; // 할인 가격 표시
  badges?: { text: string; color?: string }[]; // ex) "최저가", "베스트"
  isFavorite?: boolean;
  onClick?: () => void;
  onFavoriteToggle?: () => void;
}
