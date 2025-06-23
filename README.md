# 📁 프로젝트 구조

- 본 프로젝트는 기능 기반 구조(Feature-based structure)를 중심으로 구성.
- 전역 공통 요소는 명확히 분리하여 확장성과 유지보수를 고려.

```
📁src
├── 📁app                  # Next.js App Router 기반 엔트리 포인트 및 라우트 설정
├── 📁components           # 전역 UI 컴포넌트 (버튼, 입력창 등)
├── 📁features             # 주요 기능 단위 (도메인 중심 구성: product, chart, search 등)
├── 📁views                # 라우팅 기반 페이지 UI (실제 사용자 화면 단위)
├── 📁lib                  # 유틸리티, 클라이언트 설정, 포맷터 등 공통 로직
├── 📁mock                 # MSW 또는 테스트용 mock 데이터
├── 📁store                # 글로벌 상태 관리 (Zustand 등)
├── 📁styles               # 전역 스타일 정의 및 페이지별 스타일링
├── 📁tests                # 단위 테스트 코드 (Jest 기반)
├── 📁types                # 전역 타입 정의
└── 📁stories              # Storybook 구성 요소 (공통 컴포넌트 기준)

```

# 📌 주요 디렉터리 설명

| 디렉터리      | 설명                                                                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/`        | Next.js의 App Router 기반 디렉터리 구조이며, API route 및 레이아웃 관리                                                                         |
| `components/` | 모든 페이지/기능에서 재사용되는 공통 UI 컴포넌트 모음                                                                                           |
| `features/`   | 각 도메인(`product`, `chart`, `search` 등) 별 기능 구성. 하위에 `api`, `components`, `hooks`, `store`, `lib`, `types`, `stories`, `styles` 포함 |
| `views/`      | 라우팅 단위 화면을 구성하는 실제 UI 계층. 사용자와 맞닿는 레벨의 컴포넌트                                                                       |
| `lib/`        | 프로젝트 전역에서 사용하는 상수, 유틸 함수, Provider 구성 등                                                                                    |
| `mock/`       | 개발 및 테스트 용 mock 데이터(JSON 파일 등)                                                                                                     |
| `store/`      | Zustand 기반 글로벌 상태 모듈 관리                                                                                                              |
| `styles/`     | 글로벌 CSS, Tailwind 설정, 페이지/컴포넌트 별 커스텀 스타일                                                                                     |
| `tests/`      | 컴포넌트 단위 테스트 파일 관리 (테스트 커버리지 측정 기준)                                                                                      |
| `types/`      | 프로젝트 전역 타입 정의 (공통 인터페이스, 타입 유틸 등)                                                                                         |
| `stories/`    | Storybook에 등록된 컴포넌트 스토리 모음                                                                                                         |
