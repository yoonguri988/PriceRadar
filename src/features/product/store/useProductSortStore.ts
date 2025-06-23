// src/features/product/store/useProductSortStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductSortStoreProps } from "@/features/product";

export const useProductSortStore = create<ProductSortStoreProps>()(
  persist(
    (set) => ({
      sort: "all",
      filter: "all",
      setSort: (sort) => set({ sort }),
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "product-sort-store", // localStorage 키 이름
    }
  )
);
