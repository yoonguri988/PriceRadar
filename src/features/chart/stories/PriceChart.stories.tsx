import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import PriceChart from "../components/PriceChart";
// 백엔드 구현을 기다리지 않고 UI 개발 및 테스트 가능

const meta: Meta<typeof PriceChart> = {
  title: "chart/PriceChart",
  component: PriceChart,
  tags: ["autodocs"], // 자동 문서화
  decorators: [
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PriceChart>;

export const WithData: Story = () => <PriceChart productId="mock-id" />;
WithData.parameters = {
  msw: [
    http.get("/price-history/:id", ({ request }) => {
      return HttpResponse.json([
        { date: "2024-06-01", price: 10000 },
        { date: "2024-06-02", price: 9700 },
      ]);
    }),
  ],
};
