import { ProductCard } from '@/components/ui/ProductCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { SearchResultsProps } from '../types/search.types';

/**
 * src\features\search\components\SearchResults.tsx
 * @returns 검색 결과 리스트
 * - 결과가 있으면 카드 리스트
 * @description
 * 검색된 상품 리스트를 화면에 렌더링
 * ProductCard 공통 컴포넌트를 활용
 * 검색어와 매칭되는 mock 데이터를 기준으로 동작
 * 결과가 없을 경우 EmptyState (공통 컴포넌트) 표시
 * @todo
 * [] 전역 상태 or query param 기반 필터링 예정
 * [] mock 데이터 or 실제 연동
 * [] Zustand: 검색어 상태로 결과 필터링
 * [] URL 파라미터: `/search?query=키워드`
 * [] 실제 API: 추후 상품 검색 API 연동 시 사용 가능
 */
export default function SearchResults({ items = [] }: SearchResultsProps) {
  if (items.length === 0) {
    return (
      <div className="bg-white">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} sect="search" />
      ))}
    </div>
  );
}
