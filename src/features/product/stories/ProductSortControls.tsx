import type { Meta, StoryObj } from "@storybook/react";
import { ProductSortControls, useProductSortStore } from "@/features/product";

const meta: Meta<typeof ProductSortControls> = {
  title: "features/product/ProductSortControls",
  component: ProductSortControls,
  decorators: [
    (Story) => (
      <div style={{ width: 360, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductSortControls>;

export const Default: Story = {
  render: () => <ProductSortControls />,
};

export const WithState: Story = {
  render: () => {
    const store = useProductSortStore.getState();
    store.setSort("name");
    store.setFilter("favorites");
    return <ProductSortControls />;
  },
};
