/**
 * features/chart/components/DemoPriceTrend.tsx
 * @description 상품 가격 트렌드 예시 차트
 * 홈에서 사용자에게 가격 추적 기능을 미리 체험하게 하는 예시용 차트 표시
 * 실제 상품과 무관하게 가상 데이터 기반으로 구성
 * Recharts 라이브러리 사용
 */
'use client';

import mockData from '@/mock/mockPriceHistory.json';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import * as styles from '@/features/chart/styles/DemoPriceTrend.styles';

const demoPriceHistory = mockData.filter((v) => v.productId === 'product_1');
const historyByDate = [...demoPriceHistory];
historyByDate.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);

export const DemoPriceTrend = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{`product_1`} 가격 추이</div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={historyByDate}>
          <CartesianGrid strokeDasharray="7 7" />
          <XAxis
            dataKey="date"
            // tickFormatter={(v) => v.slice(5)} // MM-DD 형식
            tickFormatter={(v) => `${v.slice(8)}`} // MM-DD 형식
            tick={{ fontSize: 12 }}
          />
          <YAxis
            width={60}
            domain={['auto', 'auto']}
            tickFormatter={(v) => `${v.toLocaleString()}원`}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: string) => [`${value.toLocaleString()}원`, '']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#7346F3"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};
