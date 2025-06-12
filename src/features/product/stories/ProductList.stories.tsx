// src/features/product/stories/ProductList.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { ProductList } from "@/features/product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw"; // ✅ v2 import
// 백엔드 구현을 기다리지 않고 UI 개발 및 테스트 가능

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
        http.get("/api/products", () => {
          return HttpResponse.json([
            {
              id: 1,
              name: "아이폰 15 Pro",
              price: 1390000,
              imageUrl: "https://via.placeholder.com/300",
            },
            {
              id: 2,
              name: "갤럭시 Z 플립 6",
              price: 1350000,
              imageUrl: "https://via.placeholder.com/300",
            },
          ]);
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
