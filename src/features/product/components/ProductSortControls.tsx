/**
 * 정렬 및 필터 Component
 */

import { useProductSortStore } from '@/features/product';

export const ProductSortControls = () => {
  const { sort, setSort, filter, setFilter } = useProductSortStore();

  return (
    <div className={``}>
      <select value={sort} onChange={(e) => setSort(e.target.value as any)}>
        <option value="price">가격순</option>
        <option value="name">이름순</option>
        <option value="discount">할인율순</option>
      </select>
      <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
        <option value="all">전체 보기</option>
        <option value="favorites">즐겨찾기만</option>
        <option value="inStock">재고 있는 상품만</option>
      </select>
    </div>
  );
};
