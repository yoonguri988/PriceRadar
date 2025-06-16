import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SortFilterControls from "@/components/ui/SortFilterControls";
import { FilterOption, SortOption } from "@/features/product";

const meta: Meta<typeof SortFilterControls> = {
  title: "UI/SortFilterControls",
  component: SortFilterControls,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SortFilterControls>;

export const Default: Story = {
  render: () => {
    const [sort, setSort] = useState<SortOption>("price");
    const [filter, setFilter] = useState<FilterOption>("all");
    return (
      <SortFilterControls
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />
    );
  },
};
