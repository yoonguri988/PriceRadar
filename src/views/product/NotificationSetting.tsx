'use client';

/**
 * src\views\product\NotificationSetting.tsx
 * @param productId
 * @returns
 * 사용자가 “가격이 특정 금액 이하일 때 알림 받기” 설정 가능
 * 입력값(가격) → 저장 버튼 → 알림 상태 활성
 * 알림 상태 유지 or 초기화
 *
 * @todo
 * - 상태 저장 or API 연동
 */
import { useState } from 'react';
import { NotificationProps } from '@/types/product.type';

export const NotificationSetting = ({ productId }: NotificationProps) => {
  const [threshold, setThreshold] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!threshold) return;
    console.log(`🔔 알림 설정: ${productId} - ${threshold}원`);
    setSaved(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-2 border p-4 rounded-md"
    >
      <label className="text-sm font-medium w-full sm:w-auto whitespace-nowrap">
        🔔 가격 알림 설정
      </label>
      <input
        type="number"
        className="border rounded px-2 py-1 text-sm flex-1"
        placeholder="원하는 가격 입력 (원)"
        value={threshold}
        onChange={(e) => setThreshold(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded"
      >
        저장
      </button>

      {saved && (
        <span className="text-green-600 text-sm font-medium">✔️ 설정됨</span>
      )}
    </form>
  );
};
