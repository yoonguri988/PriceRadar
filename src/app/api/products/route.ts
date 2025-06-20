// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import mockProducts from "@/mock/mockProducts.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get("sort") || "latest";
  const filter = searchParams.get("filter") || "all";
  const page = Number(searchParams.get("page") || "1");
  const limit = 10; // 페이지당 아이템 수

  let sortedProducts = [...mockProducts];

  if (sort === "latest") {
    sortedProducts.sort((a, b) => a.id.localeCompare(b.id));
  } else if (sort === "priceAsc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort == "reviewDesc") {
    sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);
  }

  if (filter !== "all") {
    sortedProducts = sortedProducts.filter((v) => v.category === filter);
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const items = sortedProducts.slice(start, end);

  // { items: Product[], hasMore: boolean }
  return NextResponse.json({
    items,
    hasMore: end < sortedProducts.length,
  });
}
