import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PriceChart, PriceChartSkeleton } from "@/features/chart";
import mockPriceHistory from "@/mock/mockPriceHistory.json";
import { http, HttpResponse } from "msw"; // ✅ v2 import

const meta: Meta<typeof PriceChart> = {
  title: "Chart/PriceChart",
  component: PriceChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    msw: {
      handlers: [
        http.get("/api/chart", ({ request }) => {
          const url = new URL(request.url);
          const productId = url.searchParams.get("productId");

          const filtered = mockPriceHistory.filter(
            (item: any) => item.productId === productId
          );
          return HttpResponse.json(filtered);
        }),
      ],
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof PriceChart>;

export const Default: Story = {
  args: {
    productId: "product_1",
  },
};

export const Loading: Story = () => (
  <>
    {Array.from({ length: 1 }).map((_, i) => (
      <PriceChartSkeleton key={i} />
    ))}
  </>
);
Loading.parameters = {
  msw: [], // 로딩이므로 mock 연결 X
};
