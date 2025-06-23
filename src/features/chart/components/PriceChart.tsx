"use client";
// src/features/chart/components/PriceChart.tsx
import { useEffect, useRef } from "react";
import styles from "@/features/chart/styles/Chart.module.scss";
import {
  useD3PriceChart,
  usePriceHistory,
  PriceChartSkeleton,
} from "@/features/chart";

export const PriceChart = ({ productId }: { productId: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const { data, isLoading, isError } = usePriceHistory({ productId });

  const isReady = productId && data;
  if (isReady) useD3PriceChart(svgRef, data);

  if (!productId)
    return <div className={styles.status}>상품 ID가 필요합니다.</div>;
  if (isLoading) return <PriceChartSkeleton />;
  if (isError || !data)
    return <div className={styles.status}>차트를 불러올 수 없습니다.</div>;

  return (
    <div className={`${styles.container}`}>
      <svg ref={svgRef}></svg>
      <div
        id="tooltip"
        className={styles.tooltip}
        style={{ display: "none" }}
      ></div>
    </div>
  );
};

export default PriceChart;
