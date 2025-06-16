// src/app/api/chart/route.ts
import { NextResponse } from "next/server";
import mockPriceHistory from "@/mock/mockPriceHistory.json";

export async function GET(request: Request) {
  let priceHistory = [...mockPriceHistory];

  return NextResponse.json(priceHistory);
}
