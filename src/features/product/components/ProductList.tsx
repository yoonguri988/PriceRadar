import styles from "@/features/product/styles/ProductList.module.scss";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import SortFilterControls from "@/components/ui/SortFilterControls";
import { ORDER_OPTIONS, CATEGORY_OPTIONS } from "@/lib/constants";
import {
  useProductList,
  ProductCard,
  ProductCardSkeleton,
  useProductSortStore,
  applySortAndFilter,
} from "@/features/product";

export function ProductList() {
  // 정렬 및 필터 조건
  // server 호출
  const [order, setOrder] = useState("latest");
  const [category, setCategory] = useState("");
  // client
  const { sort, setSort, filter, setFilter } = useProductSortStore();
  useProductSortStore;
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductList({ order, category });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) fetchNextPage();
    });

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const products = data?.pages.flatMap((page) => page?.items ?? []) ?? [];
  const visibleProducts = applySortAndFilter(products, sort, filter);

  if (error) return <p>에러가 발생했습니다 😥</p>;
  if (!isLoading && visibleProducts.length === 0) {
    return (
      <EmptyState
        icon={<span style={{ fontSize: "2rem" }}>🔍</span>}
        title="검색 결과 없음"
        description="조건을 변경해보세요!"
        action={
          <Button onClick={() => setFilter("all")}>전체 상품 보기</Button>
        }
      />
    );
  }
  if (products.length === 0) {
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
      <div className={styles["control-bar"]}>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          {ORDER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select value={category} onChange={(e) => setOrder(e.target.value)}>
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <SortFilterControls
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />
      <div className={styles["grid-container"]}>
        {visibleProducts.map((item) => (
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
      {isLoading && (
        <div className={styles["grid-container"]}>
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}
      {hasNextPage && (
        <div ref={observerRef} className={styles.loader}>
          {isFetchingNextPage ? "불러오는 중..." : "스크롤하여 더 보기"}
        </div>
      )}
    </div>
  );
}
