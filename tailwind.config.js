/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 공통 색상
        foreground: '#000000', // 기본 텍스트
        background: '#ffffff', // 배경색

        // 레이아웃 관련
        menu: '#7346F3', // 사이드/탑 메뉴 글자
        category: {
          text: '#ffffff', // 카테고리 글자
          bg: '#F03F45', // 카테고리 배경
        },

        // 홈화면 전용
        home: {
          cardBg: '#F8F9FD', // 인기상품 카드 배경
          price: '#949494', // 원가 텍스트
          discount: '#D40022', // 할인 텍스트
          badgeText: '#757575', // 뱃지 텍스트
          badgeBg: '#F8F9FD', // 뱃지 배경
        },

        // Shadcn UI 재정의 (선택 사항)
        primary: '#7346F3', // 주요 강조색 (menu color)
        primaryForeground: '#ffffff',
        destructive: '#D40022', // 할인/경고 색
        muted: '#F8F9FD', // 중립 or 배경용
      },
      scale: {
        105: '1.05', // hover animation (이미지 확대 등)
      },
    },
  },
  plugins: [],
};
