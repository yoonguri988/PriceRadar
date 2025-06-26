import { scrapeDanawaProducts } from '@/lib/scraper/danawaScraper';
import { NextResponse } from 'next/server';
/**
 * src\app\api\scraper\danawa\route.ts
 *
 * @param request
 * @returns
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');

  if (!keyword) {
    return NextResponse.json({ error: 'No keyword provided' }, { status: 400 });
  }

  const data = await scrapeDanawaProducts(keyword);
  return NextResponse.json(data);
}
