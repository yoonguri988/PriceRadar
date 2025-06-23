// src/components/ui/SortFilterControls.tsx
import { motion } from 'framer-motion';

import { FilterOption, SortOption } from '@/features/product';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/lib/constants';
import { SortFilterControlsProps } from '@/types/ui.types';

const SortFilterControls = ({
  sort,
  setSort,
  filter,
  setFilter,
}: SortFilterControlsProps) => {
  return (
    <div className={``}>
      <div className={``}>
        {FILTER_OPTIONS.map(({ value, label }) => {
          const selected = filter === value;
          return (
            <motion.button
              key={value}
              onClick={() => setFilter(value)}
              className={``}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          );
        })}
      </div>

      <select
        className={``}
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
