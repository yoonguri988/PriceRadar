/** @jsxImportSource @emotion/react */

import * as styles from "@/components/ui/EmptyState.styles";
import { EmptyState as Empty } from "@/types/ui.types";
import { LucideInbox } from "lucide-react";

export const EmptyState = ({
  icon,
  title = "상품이 없습니다",
  description = "조건에 맞는 상품이 없어요. 필터를 변경해 보세요.",
  action,
}: Empty) => {
  return (
    <div css={styles.container}>
      {icon ?? <LucideInbox size={48} css={styles.imageIcon} />}
      <h3 css={styles.title}>{title}</h3>
      <p css={styles.content}>{description}</p>
      {action}
    </div>
  );
};
