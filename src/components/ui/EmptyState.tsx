/** @jsxImportSource @emotion/react */

import * as styles from "@/components/ui/EmptyState.styles";
import { EmptyState as Empty } from "@/types/ui.types";
import { LucideInbox } from "lucide-react";

export const EmptyState = ({
  title = "결과가 없습니다.",
  description = "조건에 맞는 상품을 찾을 수 없습니다.",
  action,
}: Empty) => {
  return (
    <div css={styles.container}>
      <LucideInbox size={48} css={styles.imageIcon} />
      <h3 css={styles.title}>{title}</h3>
      <p css={styles.content}>{description}</p>
      {action}
    </div>
  );
};
