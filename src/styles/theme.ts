/** 디자인 시스템 정의 */
import "@emotion/react";

export const theme = {
  colors: {
    background: "#ffffff",
    text: "#000000",
    subText: "#757575",
    primary: "#7346f3",
    onPrimary: "#ffffff",
    error: "#FF0000",
    border: "#e0e0e0",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "24px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    base: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    base: "8px",
    round: "9999px",
  },
  boxShadow: {
    subtle: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
} as const;

export type Theme = typeof theme;
