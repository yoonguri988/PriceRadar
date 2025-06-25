import * as styles from '@/views/dashboard/DashBoardList.styles';
import mockProducts from '@/mock/mockProducts.json';
import { ProductCard } from '@/components/ui/ProductCard';
import { MiniPriceChart } from '@/features/chart/components/MiniPriceChart';
import { AlertIcon } from '@/components/ui/AlertIcon';
/**
 * @todo
 * 관심 상품 mock 데이터를 리스트 형태로 보여줌
 * 각 항목은 ProductCard 기반 + 소형 가격 추이 차트(MiniPriceChart) + 알림 상태(AlertIcon) 포함
 * 추후 Zustand 또는 API 연동 가능하게 확장
 *
 *
 * @returns
 */

export default function DashBoardList() {
  const mockFavorites = mockProducts.filter((v) => !v.liked);
  return (
    <div className={styles.wrapper}>
      {mockFavorites.map((product) => (
        <div key={product.id} className={styles.cardItem}>
          <ProductCard sect={'favorite'} product={product} />
          <div className={styles.bottomBox}>
            <MiniPriceChart productId={product.id} />
            <AlertIcon isActive={true} />
          </div>
        </div>
      ))}
    </div>
  );
}
