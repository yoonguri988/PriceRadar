import { create } from "zustand";
import { ProductSortStoreProps } from "@/features/product";

export const useProductSortStore = create<ProductSortStoreProps>((set) => ({
  sort: "price",
  filter: "all",
  setSort: (sort) => set({ sort }),
  setFilter: (filter) => set({ filter }),
}));
