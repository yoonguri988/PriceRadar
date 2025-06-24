import { EmptyStateProp } from '@/types/ui.types';
import { BoxIcon, LucideInbox, Package } from 'lucide-react';
import * as styles from '@/styles/EmptyState.styles';

export const EmptyState = ({
  icon,
  title = '상품이 없습니다',
  description = '다른 검색어를 입력해보세요.',
  action,
}: EmptyStateProp) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{icon ?? <Package size={60} />}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};
