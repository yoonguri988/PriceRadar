import { render, screen } from '@testing-library/react';
import SortFilterControls from '@/components/ui/SortFilterControls';
import { useState } from 'react';
import { SortOption, FilterOption } from '@/features/product';

describe('<SortFilterControls />', () => {
  it('정렬/필터 UI가 렌더링 되어야 한다', () => {
    const Wrapper = () => {
      const [sort, setSort] = useState<SortOption>('all');
      const [filter, setFilter] = useState<FilterOption>('all');

      return (
        <SortFilterControls
          sort={sort}
          setSort={setSort}
          filter={filter}
          setFilter={setFilter}
        />
      );
    };

    render(<Wrapper />);
    expect(screen.getByText(/정렬/i)).toBeInTheDocument();
    expect(screen.getByText(/필터/i)).toBeInTheDocument();
  });
});
