import { Product } from '@/types/product.type';

export interface SearchInputProps {
  keyword?: string;
  isSticky: boolean;
  onDelete?: () => void;
  onChange?: (e: any) => void;
  onSubmit?: (e: React.FormEvent) => void;
}

export interface SearchResultsProps {
  items?: Product[];
}
