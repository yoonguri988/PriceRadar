/** 클라이언트 컴포넌트로 ThemeProvider 래핑 */
"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
