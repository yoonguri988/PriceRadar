// src/components/ui/SortFilterControls.tsx
/** @jsxImportSource @emotion/react */
import { FilterOption, SortOption } from "@/features/product";
import { FILTER_OPTIONS, SORT_OPTIONS } from "@/lib/constants";
import { SortFilterControlsProps } from "@/types/ui.types";

import { motion } from "framer-motion";
import * as styles from "@/components/ui/SortFilterControls.styles";

const SortFilterControls = ({
  sort,
  setSort,
  filter,
  setFilter,
}: SortFilterControlsProps) => {
  return (
    <div css={styles.containerStyle}>
      <div css={styles.buttonGroupStyle}>
        {SORT_OPTIONS.map(({ value, label }) => {
          const selected = sort === value;
          return (
            <motion.button
              key={value}
              onClick={() => setSort(value)}
              css={styles.sortButtonStyle(selected)}
              whileTap={{ scale: 0.95 }}
            >
              {label}
              {selected && (
                <motion.span
                  layoutId="active-sort-indicator"
                  css={styles.activeDotStyle}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <select
        css={styles.filterSelectStyle}
        value={filter}
        onChange={(e) => setFilter(e.target.value as FilterOption)}
      >
        {FILTER_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilterControls;
