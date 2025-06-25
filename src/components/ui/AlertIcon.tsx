/**
 * src\components\ui\AlertIcon.tsx
 *
 * @todo
 * 관심 상품에 대한 알림 설정 여부 시각적으로 표현
 * 사용자가 설정한 경우에는 강조된 상태로 표시
 * 기본 아이콘은 Bell / 설정됨은 BellRing (lucide-react 사용)
 */
'use client';

import { Bell, BellRing } from 'lucide-react';
import { IconProps } from '@/types/ui.types';

export const AlertIcon = ({ isActive }: IconProps) => {
  return (
    <div className="text-gray-400 hover:text-blue-500 transition-colors">
      {isActive ? <BellRing size={24} /> : <Bell size={24} />}
    </div>
  );
};
