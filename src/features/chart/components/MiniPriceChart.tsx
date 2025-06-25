import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartProps } from '@/features/chart/types/chart.types';
import mockPriceHistory from '@/mock/mockPriceHistory.json';
/**
 * src\features\chart\components\MiniPriceChart.tsx
 * @todo
 * 관심 상품 목록에서 간단한 가격 흐름 시각화
 * Recharts 기반으로 가볍게 표현
 * Y축/툴팁 최소화 (리스트 내에서 사용되기 때문)
 */
export const MiniPriceChart = ({ productId }: ChartProps) => {
  const data = mockPriceHistory.filter((p) => p.productId === productId);

  if (!data.length) return null;

  return (
    <div className="w-full h-[64px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" hide />
          <Tooltip formatter={(v: string) => `${v.toLocaleString()}원`} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
