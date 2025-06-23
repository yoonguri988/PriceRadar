import { useEffect } from "react";
import { drawChart, PriceData } from "@/features/chart";

export const useD3PriceChart = (
  svgRef: React.RefObject<SVGSVGElement | null>,
  data: PriceData[]
) => {
  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;
    drawChart(svgRef.current, data);
  }, [data]); // 개선된 의존성 배열
};
