'use client';

import DashBoardList from '@/views/dashboard/DashBoardList';

export default function DashBoardView() {
  return (
    <main className="flex flex-col gap-8 px-4 py-10 max-w-6xl mx-auto">
      <div className="text-2xl font-bold">⭐ 관심 상품</div>
      <DashBoardList />
    </main>
  );
}
