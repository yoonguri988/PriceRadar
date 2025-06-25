'use client';

/**
 * @returns 뱃지 컴포넌트
 */
import { BadgeProps } from '@/types/ui.types';

export const Badge = ({ text, color = '#e2e8f0' }: BadgeProps) => {
  return (
    <span
      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white shadow-sm"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
};
