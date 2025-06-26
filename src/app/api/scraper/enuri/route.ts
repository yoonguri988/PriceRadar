import { scrapeEnuriProducts } from '@/lib/scraper/enuriScraper';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');

  if (!keyword) {
    return NextResponse.json({ error: 'No keyword provided' }, { status: 400 });
  }

  const data = await scrapeEnuriProducts(keyword);
  return NextResponse.json(data);
}
