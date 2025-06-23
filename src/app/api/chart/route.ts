import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json({ error: "상품 ID 누락" }, { status: 400 });
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "mock",
      "mockPriceHistory.json"
    );
    const fileContents = await fs.readFile(filePath, "utf-8");
    const allData = JSON.parse(fileContents);

    const filtered = allData.filter(
      (item: any) => item.productId === productId
    );
    return NextResponse.json(filtered);
  } catch (err) {
    console.error("파일 읽기 오류:", err);
    return NextResponse.json(
      { error: "데이터를 불러올 수 없습니다." },
      { status: 500 }
    );
  }
}
