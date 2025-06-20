import {
  SearchParams,
  Product,
  GetProductListResponse,
} from "@/features/product";

export const getProductList = async ({
  sort = "latest",
  filter,
  page = 1,
}: SearchParams): Promise<GetProductListResponse> => {
  const params = new URLSearchParams();
  if (sort) params.append("sort", sort);
  if (filter) params.append("filter", filter);
  if (page) params.append("page", String(page));

  const res = await fetch(`/api/products?${params.toString()}`);
  if (!res.ok) throw new Error("상품 목록을 불러오지 못했습니다.");

  const data: GetProductListResponse = await res.json();
  return data;
};

export const getProductDetail = async (id: string): Promise<Product> => {
  return {
    id,
    name: "Apple AirPods Pro 2세대",
    price: 249000,
    originalPrice: 329000,
    imageUrl: "/images/airpods-pro.jpg",
    seller: "Apple 공식스토어",
    reviewCount: 1523,
    shippingInfo: "무료배송 / 오늘 도착",
    isSoldOut: false,
    isFavorite: true,
    badges: [
      { text: "특가", color: "#FF4D4F" },
      { text: "빠른배송", color: "#52C41A" },
    ],
  };
};
