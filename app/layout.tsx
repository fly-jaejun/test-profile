import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "이재준 | Frontend Developer",
  description: "올리브영에서 근무하는 7년차 프론트엔드 개발자 이재준의 프로필 웹사이트",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "이재준"],
  authors: [{ name: "이재준" }],
  openGraph: {
    title: "이재준 | Frontend Developer",
    description: "올리브영에서 근무하는 7년차 프론트엔드 개발자",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
