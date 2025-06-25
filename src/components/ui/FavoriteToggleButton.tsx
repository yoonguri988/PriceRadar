'use client';

/**
 * src\components\ui\FavoriteToggleButton.tsx
 * @param {inital:boolean, onToggle:void}
 * @return
 * 사용자가 상품을 관심 목록에 등록 / 해제할 수 있도록 토글 버튼 제공
 * 상태에 따라 버튼 텍스트와 색상 변화
 * 추후 Zustand or API 연동 가능하게 설계
 */
import { useState } from 'react';
import { ToggleButtonProps } from '@/types/ui.types';
import { Star } from 'lucide-react';

export default function FavoriteToggleButton({
  initial = false,
  onToggle,
}: ToggleButtonProps) {
  const [active, setActive] = useState(initial);

  const handleClick = () => {
    const next = !active;
    setActive(next);
    onToggle?.(next);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded font-semibold text-sm border transition-all
        ${
          active
            ? 'bg-yellow-400 text-white border-yellow-500'
            : 'bg-white text-gray-700 border-gray-300'
        }
      `}
    >
      {active ? (
        <span>
          <Star size={24} fill="yellow" />
          <span>관심 등록됨</span>
        </span>
      ) : (
        <span>
          <Star size={24} />
          <span>관심 등록</span>
        </span>
      )}
    </button>
  );
}
