'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchInput from '@/features/search/components/SearchInput';
import SearchResults from '@/features/search/components/SearchResults';
import { Product } from '@/types/product.type';
import mockData from '@/mock/mockProducts.json';
import { ArrowLeft, ShoppingBagIcon } from 'lucide-react';

/**
 * views/search/page.tsx
 * @description
 * 사용자가 상품명을 입력 → 검색 → 결과 리스트 제공
 * 관심 상품 등록, 빈 상태 안내 등도 포함
 * 결과 리스트는 ProductCard 공통 컴포넌트 재활용
 */
export default function SearchPageView() {
  const router = useRouter();

  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<Product[]>(mockData);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80); // 원하는 스크롤 위치 기준 조절
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setResults(mockData.filter((v) => v.name.includes(keyword)));
    // console.log('🔍 검색어:', keyword);
  };
  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const handleDelChange = () => {
    setKeyword('');
  };

  useEffect(() => {
    setResults(mockData);
  }, [keyword]);

  return (
    <main className="flex flex-col gap-4 max-w-5xl mx-">
      <div
        className={`top-0 z-50 ${
          isSticky
            ? 'w-screen fixed bg-white left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'
            : 'w-full relative bg-transparent'
        } `}
      >
        <div
          className={`max-w-5xl flex gap-0 bg-white ${
            isSticky
              ? 'max-w-screen-2xl ml-2 border border-primary'
              : 'mx-auto '
          }`}
        >
          {isSticky && (
            <div className="pt-2 mx-2">
              <button onClick={() => router.back()}>
                <ArrowLeft size={24} />
              </button>
            </div>
          )}
          <SearchInput
            keyword={keyword}
            onChange={handleChange}
            onDelete={handleDelChange}
            onSubmit={handleSubmit}
            isSticky={isSticky}
          />
          {isSticky && (
            <div className="pt-2 mx-2">
              <button onClick={() => router.back()}>
                <ShoppingBagIcon size={24} />
              </button>
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
      <SearchResults items={results} />
    </main>
  );
}
