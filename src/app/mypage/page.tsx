import MypagePanel from '@/views/mypage/MypagePanel';

/**
 * src\app\mypage\page.tsx
 * @returns
 * 사용자의 최근 검색어, 등록 상품, 알림 설정 내역 등을 확인할 수 있는 개인화 공간 제공
 * 기능적으로는 단순한 UI지만, 상태 기반 데이터 표현이 핵심
 */
export default function MyPage() {
  return (
    <main>
      <div className="text-2xl font-bold">👤 마이페이지</div>
      <MypagePanel />
    </main>
  );
}
