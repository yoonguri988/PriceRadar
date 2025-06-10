import { ReactNode } from "react";
import ThemeRegistry from "@/styles/ThemeRegistry";

export const metadata = {
  title: "PriceRadar",
  description: "쇼핑몰 가격 비교 및 트렌드 알림 웹앱",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>{" "}
      </body>
    </html>
  );
}

/**
 * @description 컴포넌트에서 사용 예시
 * @jsxImportSource @emotion/react
 * import styled from "@emotion/styled";
 *
 * const StyledButton = styled.button`
 * background-color: ${({ theme }) => theme.colors.primary};
 * color: ${({ theme }) => theme.colors.onPrimary};
 * padding: 8px 16px;
 * border-radius: 8px;
 * `;
 */
