// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get("sort") || "latest";
  const filter = searchParams.get("filter") || "all";
  const page = Number(searchParams.get("page") || "1");
  const limit = 10; // 페이지당 아이템 수

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "mock",
      "mockProducts.json"
    );
    const fileContents = await fs.readFile(filePath, "utf-8");
    const Alldata = JSON.parse(fileContents);
    let data = Alldata;

    // 정렬
    if (sort === "latest") {
      data.sort((a: any, b: any) => a.id.localeCompare(b.id));
    } else if (sort === "priceAsc") {
      data.sort((a: any, b: any) => a.price - b.price);
    } else if (sort === "priceDesc") {
      data.sort((a: any, b: any) => b.price - a.price);
    } else if (sort == "reviewDesc") {
      data.sort((a: any, b: any) => b.reviewCount - a.reviewCount);
    }

    // 필터링
    if (filter !== "all") {
      data = data.filter((v: any) => v.category === filter);
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const items = data.slice(start, end);

    // { items: Product[], hasMore: boolean }
    return NextResponse.json({
      items,
      hasMore: end < data.length,
    });
  } catch (err) {
    console.error("파일 읽기 오류:", err);
    return NextResponse.json(
      { error: "데이터를 불러올 수 없습니다." },
      { status: 500 }
    );
  }
}
