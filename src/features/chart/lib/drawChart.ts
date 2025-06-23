import * as d3 from "d3";
import { PriceData } from "@/features/chart";

export const drawChart = (svgEl: SVGSVGElement, data: PriceData[]) => {
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = svgEl.clientWidth - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const svg = d3.select(svgEl);
  svg.selectAll("*").remove(); // Clear

  const g = svg
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => new Date(d.date)) as [Date, Date])
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.price)!])
    .range([height, 0]);

  const line = d3
    .line<PriceData>()
    .x((d) => x(new Date(d.date)))
    .y((d) => y(d.price))
    .curve(d3.curveMonotoneX);

  // 선 그리기
  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#0070f3")
    .attr("stroke-width", 2)
    .attr("d", line);

  // 축 추가
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));
  g.append("g").call(d3.axisLeft(y));

  // Tooltip 처리
  const tooltip = d3.select("#tooltip");
  const bisect = d3.bisector((d: PriceData) => new Date(d.date)).left;

  // 이벤트 감지용 투명 사각형
  g.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mousemove", function (event) {
      const [mouseX] = d3.pointer(event);
      const x0 = x.invert(mouseX);
      const i = bisect(data, x0);
      const d0 = data[i - 1];
      const d1 = data[i];
      const d =
        !d1 ||
        x0.getTime() - new Date(d0.date).getTime() <
          new Date(d1.date).getTime() - x0.getTime()
          ? d0
          : d1;

      tooltip
        .style("left", `${event.pageX}px`)
        .style("top", `${event.pageY - 40}px`)
        .style("display", "block")
        .html(
          `<strong>${d.date}</strong><br/>가격: ₩${d.price.toLocaleString()}`
        );
    })
    .on("mouseleave", () => tooltip.style("display", "none"));
};
