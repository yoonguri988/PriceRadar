/**
 * @todo 홈페이지
 * src/app/page.tsx
 */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PriceRadar',
  description: '상품 가격을 추적하고 알림을 받아보세요.',
};

export default function HomePage() {
  return (
    <main className="homepage">
      <h1>PriceRadar에 오신 것을 환영합니다!</h1>
      <p>관심 상품을 등록하고 가격 변동을 추적해보세요.</p>
    </main>
  );
}
