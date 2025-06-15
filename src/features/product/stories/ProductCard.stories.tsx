import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductCard, ProductCardSkeleton } from "@/features/product";

const queryClient = new QueryClient();

const meta: Meta<typeof ProductCard> = {
  title: "Product/ProductCard",
  component: ProductCard,
  tags: ["autodocs"], // 자동 문서화
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    name: "아이폰 15 Pro",
    price: 1390000,
    imageUrl: "https://via.placeholder.com/300",
    seller: "Apple 공식스토어",
    reviewCount: 124,
    shippingInfo: "무료배송",
    isSoldOut: false,
    isFavorite: false,
    onFavoriteToggle: () => alert("찜 토글"),
  },
  parameters: {
    viewport: {
      iphone14: {
        name: "iPhone 14 Pro",
        styles: {
          width: "390px",
          height: "844px",
        },
        type: "mobile",
      },
    },
    layout: "fullscreen",
  },
};

export const NoShipping: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/300",
    name: "갤럭시 Z 플립 6",
    price: 1350000,
    seller: "Samsung 스토어",
    reviewCount: 58,
    shippingInfo: "배송비 3,000원",
    isFavorite: true,
  },
};

export const Clickable: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/300",
    name: "애플워치 9",
    price: 529000,
    seller: "Apple 스토어",
    reviewCount: 200,
    shippingInfo: "무료배송",
    onClick: () => alert("상품 카드 클릭"),
  },
};

export const DiscountWithBadge: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/300",
    name: "맥북 에어 M3",
    price: 1490000,
    originalPrice: 1690000,
    badges: [
      { text: "최저가", color: "#2d9cdb" },
      { text: "특가", color: "#e91e63" },
    ],
    seller: "애플 공홈",
    reviewCount: 77,
    shippingInfo: "무료배송",
  },
};

export const SoldOut: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/300",
    name: "플스5 디스크 에디션",
    price: 720000,
    isSoldOut: true,
    seller: "PlayStation 공식",
    reviewCount: 320,
    shippingInfo: "배송비 2,500원",
  },
};

export const Favorite: Story = {
  args: {
    ...Default.args,
    isFavorite: true,
  },
};

export const DesignQA: Story = {
  args: {
    name: "맥북 프로 16인치",
    price: 3490000,
    imageUrl: "https://via.placeholder.com/300x300?text=MacBook",
    seller: "애플 공식",
    reviewCount: 234,
    shippingInfo: "오늘 출발",
    isSoldOut: false,
    isFavorite: false,
    badges: [{ text: "베스트셀러", color: "#2d9cdb" }],
    onFavoriteToggle: () => alert("찜 토글"),
  },
  decorators: [
    // UI 품질 검수
    (Story) => (
      <div
        style={{
          width: "300px", // 고정 너비로 실제 그리드 아이템처럼 표시
          padding: "2rem", // 패딩 적용
          background: "#f9f9f9", // 회색 배경
          border: "1px solid #ddd",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export const Skeleton: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <ProductCardSkeleton />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
};
