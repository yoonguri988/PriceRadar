"use client";

import { ProductList } from "@/features/product";

export default function ProductsPage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
      >
        🔎 인기 상품 모아보기
      </h1>
      <ProductList />
    </main>
  );
}
