import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✨ Changed: GitHub Pages 정적 배포를 위한 설정
  output: 'export',
  basePath: '/test-profile',
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화 미지원
  },
};

export default nextConfig;
