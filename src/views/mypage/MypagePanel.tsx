'use client';

/**
 * src\views\mypage\MypagePanel.tsx
 * @return
 * 사용자의 활동 이력과 관심 정보를 요약 형태로 한눈에 보여주는 개인화 UI 섹션
 * 전역 상태(Zustand), localStorage, 서버 연동 데이터 등과 연결될 준비 구조 제공
 * 재사용보다는 사용자 단독 뷰에 초점을 맞춘 단순, 명확, 빠른 구조 설계
 *
 * - 검색 행동 기반 개인화 추천 가능성 대비 및 UX 개선 포인트
 * - 등록 시간 기준으로 빠른 확인 / 상태 기반 삭제/수정 확장 여지
 * - 알림 기준 정리 및 일괄 관리 인터페이스 준비
 */

import * as styles from '@/views/mypage/MypagePanel.styles';
import mockFavorites from '@/mock/mockFavorites.json';
import mockNotifications from '@/mock/mockNotifications.json';
import mockRecentKeywords from '@/mock/mockRecentKeywords.json';

// mock 데이터 예시
export default function MypagePanel() {
  return (
    <section className={styles.panelWrapper}>
      {/* 최근 검색어 목록 */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>🕵 최근 검색어</h2>
        <ul className={styles.list}>
          {mockRecentKeywords.map((keyword) => (
            <li key={keyword.id} className={styles.listItem}>
              {keyword.name}
            </li>
          ))}
        </ul>
      </div>

      {/* 관심 상품 리스트 */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>⭐ 관심 상품</h2>
        <ul className={styles.list}>
          {mockFavorites.map((item) => (
            <li key={item.id} className={styles.listItem}>
              {item.name}{' '}
              <span className="text-xs text-gray-400">
                ({item.registeredAt})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 알림 설정 내역 */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>🔔 알림 설정 내역</h2>
        <ul className={styles.list}>
          {mockNotifications.map((n, i) => (
            <li key={i} className={styles.listItem}>
              {n.productName} → {n.threshold.toLocaleString()}원 이하 알림
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
