// src/features/chart/components/PriceChartSkeleton.tsx

import styles from "@/features/chart/styles/Chart.module.scss";

export const PriceChartSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skeleton} />
    </div>
  );
};

export default PriceChartSkeleton;
