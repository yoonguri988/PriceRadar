/**
 * @todo 공통 레이아웃
 */
import '@/styles/globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ReactQueryClientProvider } from '@/lib/ReactQueryClientProvider';
import NavLink from '@/components/ui/NavLink';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryClientProvider>
          <header className="px-6 py-4 bg-gray-100 border-b border-gray-300">
            <nav className="max-w-5xl mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">
                <Link href="/">PriceRadar</Link>
              </h1>
            </nav>
          </header>
          <main className="max-w-6xl mx-auto px-4 py-6 pb-32">{children}</main>
          <footer className="w-svw fixed z-50 bottom-0 px-6 py-2 bg-gray-100 border-b border-gray-300">
            <nav className="max-w-6xl mx-auto flex  gap-1 justify-center items-center">
              <NavLink href="/" label="홈" />
              <NavLink href="/search" label="검색" />
              <NavLink href="/dashboard" label="관심상품" />
              <NavLink href="/product/1" label="상품 상세" />
              <NavLink href="/mypage" label="마이페이지" />
            </nav>
          </footer>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
