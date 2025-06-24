import {
  SearchParams,
  Product,
  GetProductListResponse,
} from '@/features/product';

export const getProductList = async ({
  sort = 'latest',
  filter,
  page = 1,
}: SearchParams): Promise<GetProductListResponse> => {
  const params = new URLSearchParams();
  if (sort) params.append('sort', sort);
  if (filter) params.append('filter', filter);
  if (page) params.append('page', String(page));

  const res = await fetch(`/api/products?${params.toString()}`);
  if (!res.ok) throw new Error('상품 목록을 불러오지 못했습니다.');

  const data: GetProductListResponse = await res.json();
  return data;
};
