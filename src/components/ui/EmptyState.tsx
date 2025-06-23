import { EmptyStateProp } from '@/types/ui.types';
import { LucideInbox } from 'lucide-react';

export const EmptyState = ({
  icon,
  title = '상품이 없습니다',
  description = '조건에 맞는 상품이 없어요. 필터를 변경해 보세요.',
  action,
}: EmptyStateProp) => {
  return (
    <div className={``}>
      {icon ?? <LucideInbox size={48} className={``} />}
      <h3 className={``}>{title}</h3>
      <p className={``}>{description}</p>
      {action}
    </div>
  );
};
