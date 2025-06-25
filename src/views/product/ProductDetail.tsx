'use client';

/**
 * src\views\product\ProductDetail.tsx
 *
 * @returns
 * 상품 기본 정보 렌더링
 * 가격 정보 + 뱃지 + 배송 + 리뷰 수 등 표시
 * 가격 히스토리 차트, 알림 설정 영역 포함
 * 관심 상품 등록 버튼 포함
 */

import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import PriceHistoryChart from '@/features/chart/components/PriceHistoryChart';
import { AlertIcon } from '@/components/ui/AlertIcon';
import * as styles from '@/views/product/ProductDetail.styles';
import mockProducts from '@/mock/mockProducts.json';
import { ProductDetailProps } from '@/types/product.type';
import { NotificationSetting } from '@/views/product/NotificationSetting';
import FavoriteToggleButton from '@/components/ui/FavoriteToggleButton';

export default function ProductDetail({ id }: ProductDetailProps) {
  const mockProduct = mockProducts.filter((v) => v.id === id)[0];
  const {
    name,
    price,
    originalPrice,
    imageUrl,
    seller,
    reviewCount,
    shippingInfo,
    rating,
    badges,
  } = mockProduct;

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className={styles.image}
        />
        <div className={styles.infoBox}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.price}>{price.toLocaleString()}원</p>
          <p className={styles.originalPrice}>
            {originalPrice.toLocaleString()}원
          </p>
          <p className={styles.meta}>
            {seller} · 리뷰 {reviewCount}개 · 평점 {rating}점
          </p>
          <p className={styles.shipping}>{shippingInfo}</p>
          <div className={styles.badgeRow}>
            {badges.map((b, i) => (
              <Badge key={i} color={b.color} text={b.text} />
            ))}
          </div>
        </div>
      </div>

      <PriceHistoryChart productId={mockProduct.id} />
      {/* 알림 설정 UI */}
      <NotificationSetting productId={mockProduct.id} />
      {/* 관심 등록/해제 버튼 */}
      <FavoriteToggleButton
        initial={true}
        onToggle={(v) => console.log('관심 등록 상태:', v)}
      />
    </section>
  );
}
