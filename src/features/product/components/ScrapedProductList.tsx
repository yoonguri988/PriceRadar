'use client';

import { useScrapedProducts } from '@/features/product/hooks/useScrapedProducts';
import { ScrapedProduct, ScrapedProductProps } from '@/types/dataImport.types';

/**
 * src\features\product\components\ScrapedProductList.tsx
 *
 * @param {keyword: string, source: Source}
 * @returns 크롤링 상품 출력 컴포넌트
 */

export default function ScrapedProductList({
  keyword,
  source,
}: ScrapedProductProps) {
  const { data, isLoading, isError } = useScrapedProducts({ keyword, source });

  if (!keyword)
    return <p className="text-sm text-gray-500">검색어를 입력해주세요.</p>;
  if (isLoading)
    return (
      <p className="text-sm text-blue-500">상품 정보를 불러오는 중입니다...</p>
    );
  if (isError)
    return (
      <p className="text-sm text-red-500">상품 정보를 불러오지 못했습니다.</p>
    );

  if (!data || data.length === 0)
    return <p className="text-sm text-gray-500">검색 결과가 없습니다.</p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {data.map((item: ScrapedProduct, idx: number) => (
        <li
          key={idx}
          className="border rounded-2xl p-3 shadow hover:shadow-md transition duration-150"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain mb-2"
            />
            <div className="font-semibold text-sm truncate">{item.title}</div>
            <div className="text-blue-600 font-bold mt-1">
              {item.price.toLocaleString()}원
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
