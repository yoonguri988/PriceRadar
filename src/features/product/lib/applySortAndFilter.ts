import { Product, FilterOption, SortOption } from "@/features/product";

export const applySortAndFilter = (
  products: Product[],
  sort: SortOption,
  filter: FilterOption
): Product[] => {
  let filtered = [...products];

  if (filter === "favorites") {
    filtered = filtered.filter((p) => p.isFavorite);
  } else if (filter === "inStock") {
    filtered = filtered.filter((p) => !p.isSoldOut);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "discount") {
    filtered.sort((a, b) => {
      const aDiscount = (a.originalPrice ?? a.price) - a.price;
      const bDiscount = (b.originalPrice ?? b.price) - b.price;
      return bDiscount - aDiscount;
    });
  }

  return filtered;
};
