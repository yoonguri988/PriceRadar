// src/features/chart/components/PriceChart.tsx

"use client";

import { ResponsiveLine } from "@nivo/line";
import { PriceChartProp, usePriceHistory } from "@/features/chart";

const PriceChart = ({ productId }: PriceChartProp) => {
  const { data, isLoading, isError } = usePriceHistory(productId);

  if (isLoading) return <div>차트 로딩 중...</div>;
  if (isError || !data) return <div>차트를 불러올 수 없습니다.</div>;

  const chartData = [
    {
      id: "가격",
      data: data.map((d) => ({ x: d.date, y: d.price })),
    },
  ];

  return (
    <div style={{ height: 300 }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", stacked: false }}
        axisBottom={{
          tickRotation: -45,
        }}
        axisLeft={{
          legend: "가격",
          legendOffset: -40,
        }}
        colors={{ scheme: "nivo" }}
        pointSize={6}
        useMesh
      />
    </div>
  );
};

export default PriceChart;
