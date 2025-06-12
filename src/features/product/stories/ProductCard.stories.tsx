import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductCard } from "@/features/product";

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
    imageUrl: "https://via.placeholder.com/300",
    name: "아이폰 15 Pro",
    price: 1390000,
    seller: "Apple 공식스토어",
    reviewCount: 124,
    shippingInfo: "무료배송",
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
