import { CircleXIcon, Search } from 'lucide-react';
import * as styles from '@/features/search/styles/SearchInput.styles';
import { SearchInputProps } from '../types/search.types';
/**
 * src\features\search\components\SearchInput.tsx
 * @returns 검색창
 * - 키워드 입력, submit 가능
 * @description
 * 상품명을 입력하고 검색 요청을 트리거
 * submit 이벤트 처리
 * 키보드 엔터 가능
 * 검색어는 전역 상태(store) 또는 부모로 전달 가능하게 설계
 * @todo
 * [] 검색 로직 또는 상태 저장/라우팅 등
 * [] zustand 전역 상태로 검색어 저장
 * [] URLSearchParams를 활용한 라우팅
 * [] SearchResults에서 검색어 기준으로 filteredData 제공
 */

export default function SearchInput({
  keyword,
  isSticky = false,
  onChange,
  onDelete,
  onSubmit,
}: SearchInputProps) {
  return (
    <form
      className={`flex items-center gap-2 w-full bg-white border rounded-md  ${
        isSticky ? 'border-none' : 'border-primary shadow-sm'
      }`}
      onSubmit={onSubmit}
    >
      <input
        id="input_text"
        type="text"
        className="flex-1 outline-none text-base opacity-85 pl-4 bg-primaryForeground placeholder:text-gray-400"
        placeholder="상품명 또는 브랜드 입력"
        value={keyword}
        onChange={onChange}
      />
      {keyword && (
        <button type="button" onClick={onDelete}>
          <CircleXIcon size={20} className="text-gray-400" />
        </button>
      )}
      <button type="submit" className="text-[#121212] p-2 pr-[11px]">
        <Search size={24} />
      </button>
    </form>
  );
}
