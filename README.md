src/
┣ app/ ← Next.js 13+ 기준 페이지 구조
┃ ┣ layout.tsx
┃ ┗ page.tsx

┣ features/
┃ ┣ product/
┃ ┃ ┣ components/ ← 상품 관련 UI 단위
┃ ┃ ┃ ┗ ProductCard.tsx
┃ ┃ ┣ styles/
┃ ┃ ┃ ┗ ProductCard.styles.ts
┃ ┃ ┣ stories/
┃ ┃ ┃ ┗ ProductCard.stories.tsx
┃ ┃ ┣ hooks/ ← 상품 전용 hook
┃ ┃ ┃ ┣ useProductDetail.ts
┃ ┃ ┃ ┣ useProductList.ts ← 상품 목록 불러오기 로직
┃ ┃ ┃ ┗ ...
┃ ┃ ┣ api/ ← 상품 api 호출 함수들
┃ ┃ ┃ ┗ productAPI.ts ← 상품 목록, 상세 호출 함수
┃ ┃ ┣ types/ ← 상품 관련 타입 선언
┃ ┃ ┃ ┗ product.type.ts ← 상품 인터페이스, 응답 타입 등
┃ ┃ ┗ index.ts ← 해당 도메인 export hub
┃
┃ ┣ search/
┃ ┃ ┣ components/
┃ ┃ ┃ ┗ SearchInput.tsx
┃ ┃ ┣ styles/
┃ ┃ ┃ ┗ SearchInput.styles.ts
┃ ┃ ┣ hooks/
┃ ┃ ┃ ┗ useSearch.ts
┃ ┃ ┣ stories/
┃ ┃ ┃ ┗ SearchInput.stories.tsx
┃ ┃ ┣ api/
┃ ┃ ┃ ┗ searchAPI.ts
┃ ┃ ┗ types/
┃ ┃ ┃ ┗ search.type.ts
┃
┃ ┣ chart/
┃ ┃ ┣ components/
┃ ┃ ┃ ┗ PriceChart.tsx
┃ ┃ ┣ styles/
┃ ┃ ┃ ┗ PriceChart.styles.ts
┃ ┃ ┣ stories/
┃ ┃ ┃ ┗ PriceChart.stories.tsx
┃ ┃ ┗ types/
┃ ┃ ┃ ┗ chart.type.ts
┃
┃ ┣ user/
┃ ┃ ┣ components/
┃ ┃ ┃ ┗ UserMenu.tsx
┃ ┃ ┣ styles/
┃ ┃ ┃ ┗ UserMenu.styles.ts
┃ ┃ ┣ api/
┃ ┃ ┃ ┗ userAPI.ts
┃ ┃ ┣ hooks/
┃ ┃ ┃ ┗ useUser.ts
┃ ┃ ┣ types/
┃ ┃ ┃ ┗ user.type.ts
┃ ┃ ┗ stories/
┃ ┃ ┃ ┗ UserMenu.stories.tsx

┣ components/ ← 글로벌 UI 컴포넌트, 도메인과 무관한 범용 ui 컴포넌트
┃ ┣ ui/ ← 디자인 시스템 레벨에서 사용, 재사용성과 확장성 중심
┃ ┃ ┣ Button.tsx
┃ ┃ ┣ Input.tsx
┃ ┃ ┣ Modal.tsx
┃ ┃ ┗ ...
┃ ┣ layout/
┃ ┃ ┣ Header.tsx
┃ ┃ ┗ Footer.tsx
┃ ┗ ...

┣ pages/ or app/

┣ styles/
┃ ┣ theme.ts ← 글로벌 테마 설정
┃ ┣ reset.css ← reset CSS
┃ ┣ base.css ← reset CSS
┃ ┗ Emotion ThemeProvider에 들어갈 토큰

┣ lib/ ← 유틸, formatter, constants 등
┣ hooks/ ← 전역 custom hook (도메인 무관한 것)
┣ types/ ← 공용 타입
┗ store/ ← Zustand, Redux 등 상태 관리

### 폴더 구조 생성

mkdir -p src/features/[기능 단위]/{components,styles,stories,api,hooks,types}
