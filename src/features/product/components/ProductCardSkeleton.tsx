// src/features/product/components/ProductCardSkeleton.tsx
import styles from "@/features/product/styles/ProductCardSkeleton.module.scss";

export const ProductCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.box} />
      <div className={`${styles.text} ${styles["text-lg"]}`} />
      <div className={`${styles.text} ${styles["text-md"]}`} />
      <div className={`${styles.text} ${styles["text-sm"]}`} />
    </div>
  );
};
