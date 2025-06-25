'use client';

/**
 *
 * @param param0: 상품의 ID 값
 * @returns
 * 상세 페이지에서 상품의 가격 변동 이력을 Recharts로 시각화
 * X축 날짜 / Y축 가격 구성
 * Tooltip으로 일자별 가격 제공
 */

import { ChartProps } from '@/features/chart/types/chart.types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import mockPriceHistory from '@/mock/mockPriceHistory.json';

export default function PriceHistoryChart({ productId }: ChartProps) {
  const data = mockPriceHistory.filter((p) => p.productId === productId);

  if (!data.length) return null;

  return (
    <div className="w-full h-72">
      <h3 className="text-base font-semibold mb-2">📈 가격 히스토리</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="7 7" />
          <XAxis
            dataKey="date"
            tickFormatter={(v) => `${v.slice(8)}`} // MM-DD 형식
            tick={{ fontSize: 12 }}
          />
          <YAxis
            width={80}
            domain={['auto', 'auto']}
            tickFormatter={(v) => `${v.toLocaleString()}원`}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip formatter={(v: string) => `${v.toLocaleString()}원`} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#7346F3"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
