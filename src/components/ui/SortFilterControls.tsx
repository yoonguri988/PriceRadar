// src/components/ui/SortFilterControls.tsx
import styles from "@/components/ui/SortFilterControls.module.scss";
import { motion } from "framer-motion";

import { FilterOption, SortOption } from "@/features/product";
import { FILTER_OPTIONS, SORT_OPTIONS } from "@/lib/constants";
import { SortFilterControlsProps } from "@/types/ui.types";

const SortFilterControls = ({
  sort,
  setSort,
  filter,
  setFilter,
}: SortFilterControlsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles["button-group"]}>
        {FILTER_OPTIONS.map(({ value, label }) => {
          const selected = filter === value;
          return (
            <motion.button
              key={value}
              onClick={() => setFilter(value)}
              className={
                selected
                  ? `${styles["filter-button"]} ${styles["selected"]}`
                  : styles["filter-button"]
              }
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          );
        })}
      </div>

      <select
        className={styles["sort-select"]}
        value={sort}
        onChange={(e) => setSort(e.target.value as SortOption)}
      >
        {SORT_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilterControls;
