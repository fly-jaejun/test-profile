# 이재준 프로필 웹사이트

와비사비(侘寂, Wabi-Sabi) 철학을 담은 개인 프로필 웹사이트입니다.

## 🎨 디자인 컨셉

**와비사비(Wabi-Sabi)**: 불완전함과 무상함의 아름다움을 표현하는 전통적인 일본 미학을 웹 디자인으로 재해석했습니다.

### 핵심 원칙
- 자연스러운 불완전함 (비대칭 레이아웃)
- 소박한 색상 팔레트 (베이지/브라운/그린 톤)
- 질감과 디테일 (subtle grain texture)
- 여백의 미
- 절제된 애니메이션

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Fonts**: Google Fonts (Noto Sans KR, Noto Serif, Noto Serif KR)

## 📁 프로젝트 구조

```
my-profile-site/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.scss        # 글로벌 스타일
├── components/
│   ├── Header/            # 헤더 컴포넌트
│   ├── Hero/              # 히어로 섹션
│   ├── About/             # 소개 섹션
│   ├── Skills/            # 기술 스택 섹션
│   └── Contact/           # 연락처 섹션
├── styles/
│   ├── variables.scss     # SCSS 변수
│   └── mixins.scss        # SCSS 믹스인
└── public/
    └── assets/            # 이미지, 아이콘
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm run start
```

### 타입 체크

```bash
npm run type-check
```

## ✨ 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **부드러운 스크롤**: 섹션 간 자연스러운 전환
- **Intersection Observer**: 스크롤 시 애니메이션 효과
- **이메일 복사 기능**: 원클릭으로 이메일 주소 복사
- **와비사비 디자인**: 자연스러운 질감과 비대칭 레이아웃

## 🎯 섹션 구성

1. **Hero**: 이름과 직업을 소개하는 메인 비주얼
2. **About**: 자기소개와 개발 철학
3. **Skills**: 기술 스택 (Next.js, React.js, TypeScript, JavaScript)
4. **Contact**: 이메일 연락처

## 📱 반응형 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: > 1024px

## 🎨 컬러 팔레트

### 배경 색상
- Primary: `#F5F1E8`
- Secondary: `#E8E4D9`
- Accent: `#D4CFC0`

### 텍스트 색상
- Primary: `#3A3A3A`
- Secondary: `#5C5C5C`
- Muted: `#8B8680`

### 포인트 색상
- Green: `#8B9A7A`
- Brown: `#9D8B7C`
- Sage: `#A8B5A0`

## 📄 라이선스

© 2024 이재준. All rights reserved.
