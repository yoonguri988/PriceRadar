// src/features/product/stories/ProductList.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { ProductList } from "@/features/product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw"; // ✅ v2 import
// 백엔드 구현을 기다리지 않고 UI 개발 및 테스트 가능

const dummyProducts = Array.from({ length: 40 }, (_, i) => ({
  id: `product_${i + 1}`,
  name: `상품 ${i + 1}`,
  price: Number((i + 1) * 1000),
  imageUrl: `https://via.placeholder.com/300x300?text=Product_${i + 1}`,
  seller: "전국 어디에서나",
  reviewCount: i + 1,
  shippingInfo: "배송비 3,000원",
  isSoldOut: false,
  badges: [],
}));

const meta: Meta<typeof ProductList> = {
  title: "Product/ProductList",
  component: ProductList,
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
        http.get("/api/products", ({ request }) => {
          const url = new URL(request.url);
          const page = Number(url.searchParams.get("page") ?? "1");
          const limit = 10;

          const start = (page - 1) * limit;
          const end = start + limit;
          const items = dummyProducts.slice(start, end);

          return HttpResponse.json({
            items,
            hasMore: end < dummyProducts.length,
          });
        }),
      ],
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
