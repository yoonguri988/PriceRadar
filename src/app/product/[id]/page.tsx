'use client';

/**
 * src\app\product\[id]\page.tsx
 * @returns
 * 선택한 상품의 상세 정보, 가격 히스토리, 알림 설정 기능을 제공
 * 상품 트렌드를 명확히 보여주고 사용자가 알림을 직접 설정할 수 있게 함
 */
import ProductDetail from '@/views/product/ProductDetail';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  return (
    <main className="flex flex-col gap-8 px-4 py-10 max-w-4xl mx-auto">
      <ProductDetail id={`product_${params.id}`} />
    </main>
  );
}
