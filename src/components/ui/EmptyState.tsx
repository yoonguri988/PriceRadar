import styles from "@/components/ui/EmptyState.module.scss";
import { EmptyStateProp } from "@/types/ui.types";
import { LucideInbox } from "lucide-react";

export const EmptyState = ({
  icon,
  title = "상품이 없습니다",
  description = "조건에 맞는 상품이 없어요. 필터를 변경해 보세요.",
  action,
}: EmptyStateProp) => {
  return (
    <div className={styles.container}>
      {icon ?? <LucideInbox size={48} className={styles.imageIcon} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{description}</p>
      {action}
    </div>
  );
};
