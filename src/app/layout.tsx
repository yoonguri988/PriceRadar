"use client";

import { ReactNode } from "react";
import { ReactQueryClientProvider } from "@/lib/ReactQueryClientProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
