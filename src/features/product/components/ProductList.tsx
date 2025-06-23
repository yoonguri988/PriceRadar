import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import SortFilterControls from '@/components/ui/SortFilterControls';
import {
  useProductList,
  ProductCard,
  ProductCardSkeleton,
  useProductSortStore,
  applySortAndFilter,
} from '@/features/product';

export function ProductList() {
  // 정렬 및 필터 조건
  const { sort, setSort, filter, setFilter } = useProductSortStore();
  useProductSortStore;
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductList({ sort, filter });

  return <div></div>;

  // const observerRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (!observerRef.current || !hasNextPage) return;
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) fetchNextPage();
  //   });

  //   observer.observe(observerRef.current);
  //   return () => observer.disconnect();
  // }, [fetchNextPage, hasNextPage]);

  // const products = data?.pages.flatMap((page) => page?.items ?? []) ?? [];
  // const visibleProducts = applySortAndFilter(products, sort, filter);

  // if (error) return <p>에러가 발생했습니다 😥</p>;
  // if (!isLoading && visibleProducts.length === 0) {
  //   return (
  //     <EmptyState
  //       icon={<span style={{ fontSize: '2rem' }}>🔍</span>}
  //       title="검색 결과 없음"
  //       description="조건을 변경해보세요!"
  //       action={
  //         <Button onClick={() => setFilter('all')}>전체 상품 보기</Button>
  //       }
  //     />
  //   );
  // }
  // if (products.length === 0) {
  //   // 상품 목록이 비어있는 경우
  //   return (
  //     <EmptyState
  //       title="상품이 없습니다."
  //       description="선택한 조건에 맞는 상품을 찾지 못했어요."
  //       action={
  //         <Button onClick={() => setSort('latest')}>전체 상품 보기</Button>
  //       }
  //     />
  //   );
  // }

  // return (
  //   <div>
  //     <SortFilterControls
  //       sort={sort}
  //       setSort={setSort}
  //       filter={filter}
  //       setFilter={setFilter}
  //     />
  //     <div className={``}>
  //       {visibleProducts.map((item) => (
  //         <ProductCard
  //           key={item.id}
  //           name={item.name}
  //           price={item.price}
  //           imageUrl={item.imageUrl}
  //           seller={item.seller}
  //           reviewCount={item.reviewCount}
  //           shippingInfo={item.shippingInfo}
  //           isSoldOut={item.isSoldOut}
  //           originalPrice={item.originalPrice}
  //           badges={item.badges}
  //           isFavorite={item.isFavorite}
  //           onFavoriteToggle={() => alert(`${item.name} 관심 토글`)}
  //         />
  //       ))}
  //     </div>
  //     {isLoading && (
  //       <div className={``}>
  //         {Array.from({ length: 6 }).map((_, i) => (
  //           <ProductCardSkeleton key={i} />
  //         ))}
  //       </div>
  //     )}
  //     {hasNextPage && (
  //       <div ref={observerRef} className={``}>
  //         {isFetchingNextPage ? '불러오는 중...' : '스크롤하여 더 보기'}
  //       </div>
  //     )}
  //   </div>
  // );
}
