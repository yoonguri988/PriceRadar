// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import mockProducts from "@/mock/mockProducts.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const order = searchParams.get("order") || "lastest";

  let sortedProducts = [...mockProducts];

  if (order === "lastest") {
    sortedProducts.sort((a, b) => b.id - a.id);
  } else if (order === "priceAsc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (order === "priceDesc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return NextResponse.json(sortedProducts);
}
