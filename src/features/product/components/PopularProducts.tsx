/**
 * features/product/components/PopularProducts.tsx
 * @description 등록된 상품 중 인기 상품 5개 요약
 * - 사용자에게 인기 상품 또는 추천 상품를 ProductCard 형태로 보여줌
 * - 실제 API가 없는 경우, 가상 데이터로 우선 구현
 */
import { ProductCard } from '@/components/ui/ProductCard';
import * as styles from '@/features/product/styles/PopularProducts.styles';
import mockData from '@/mock/mockProducts.json';
import { ArrowRightCircle, InfoIcon } from 'lucide-react';

export const PopularProducts = () => {
  const data = mockData.filter(
    (v, i) =>
      v.isSoldOut === false && v.badges?.some((badge) => badge.text == '인기'),
  );
  const handleClick = () => {
    alert('Click!');
  };

  const handleToggle = () => {
    alert('FavoriteToggle!');
  };

  return (
    <section className={styles.container}>
      <div className={styles.titleContent}>
        <div className={styles.title}>
          <div className="flex gap-1">
            <span>인기 있는 상품</span>
            <span className="py-1">
              <InfoIcon className="w-5 h-5 text-gray-500" />
            </span>
          </div>
        </div>
        <div className="flex gap-1 py-1">
          <span className="text-sm font-semibold text-gray-500">더보기</span>
          <ArrowRightCircle className="w-5 h-5 text-gray-500" />
        </div>
      </div>
      <div className={styles.cardList}>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            sect={`popular`}
            product={product}
            onClick={handleClick}
            onFavoriteToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
};
