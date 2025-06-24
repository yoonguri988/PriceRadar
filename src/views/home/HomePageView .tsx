/**
 * views/home/page.tsx
 * @description 한 줄 설명 및 슬로건
 */
import { HomeIntro } from './HomeIntro';
import { PopularProducts } from '@/features/product/components/PopularProducts';
import { DemoPriceTrend } from '@/features/chart/components/DemoPriceTrend';

export default function HomePageView() {
  return (
    <main className="flex flex-col gap-8 px-4 py-10 max-w-5xl mx-auto">
      <HomeIntro />
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-home-cardBg">
        <div className="max-w-5xl mx-auto px-4">
          <PopularProducts />
        </div>
      </div>
      <div>
        <DemoPriceTrend />
      </div>
    </main>
  );
}
