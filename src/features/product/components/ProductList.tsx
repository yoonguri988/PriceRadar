/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { ListStyles, useProductList, ProductCard } from "@/features/product";

// 예: 정렬 기준 enum 또는 상수
export const SORT_OPTIONS = [
  { label: "최신순", value: "latest" },
  { label: "낮은 가격순", value: "priceAsc" },
  { label: "높은 가격순", value: "priceDesc" },
];

export function ProductList() {
  // 정렬 및 필터 조건
  const [order, setOrder] = useState("latest");
  const [category, setCategory] = useState("");

  const { data, isLoading, error } = useProductList({ order, category });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다 😥</p>;

  if (data && data.length === 0) {
    // 상품 목록이 비어있는 경우
    return (
      <EmptyState
        title="상품이 없습니다."
        description="선택한 조건에 맞는 상품을 찾지 못했어요."
        action={
          <Button onClick={() => setOrder("latest")}>전체 상품 보기</Button>
        }
      />
    );
  }

  return (
    <div>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div css={ListStyles.gridContainer}>
        {data?.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            seller={item.seller}
            reviewCount={item.reviewCount}
            shippingInfo={item.shippingInfo}
            isSoldOut={item.isSoldOut}
            originalPrice={item.originalPrice}
            badges={item.badges}
            isFavorite={item.isFavorite}
            onFavoriteToggle={() => alert(`${item.name} 관심 토글`)}
          />
        ))}
      </div>
    </div>
  );
}
