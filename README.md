## 프로젝트 구조 요약

### 본 프로젝트는 기능 단위로 폴더를 구성합니다.

각 기능 폴더는 다음과 같은 하위 구조를 가집니다:

- components
- api
- hooks
- styles
- stories
- types

### SCSS 전역(Global) vs 모듈(Module) 구분

- Global : 전체 레이아웃, Reset, Theme
- Module : 개별 컴포넌트 스타일링

```
└── 📁src
    └── 📁app
        └── 📁api
            └── 📁chart
                └── route.ts
            └── 📁products
                └── route.ts
        └── layout.tsx
        └── page.tsx
        └── 📁products
            └── page.tsx
    └── 📁assets
    └── 📁components
        └── 📁layout
        └── 📁ui
            └── Button.module.scss
            └── Button.tsx
            └── EmptyState.module.scss
            └── EmptyState.tsx
            └── Input.module.scss
            └── Input.tsx
            └── SortFilterControls.module.scss
            └── SortFilterControls.tsx
    └── 📁features
        └── 📁chart
            └── 📁api
                └── chartAPI.ts
            └── 📁components
                └── PriceChart.tsx
                └── PriceChartSkeleton.tsx
            └── 📁hooks
                └── useD3PriceChart.ts
                └── usePriceHistory.ts
            └── index.ts
            └── 📁lib
                └── drawChart.ts
            └── 📁stories
                └── PriceChart.stories.tsx
            └── 📁styles
                └── Chart.module.scss
            └── 📁types
                └── chart.type.ts
        └── 📁product
            └── 📁api
                └── productAPI.ts
            └── 📁components
                └── AlertToggle.tsx
                └── ProductCard.tsx
                └── ProductCardSkeleton.tsx
                └── ProductList.tsx
                └── ProductSortControls.tsx
            └── 📁hooks
                └── useProductDetail.ts
                └── useProductList.ts
            └── index.ts
            └── 📁lib
                └── applySortAndFilter.ts
            └── 📁store
                └── useProductSortStore.ts
            └── 📁stories
                └── ProductCard.stories.tsx
                └── ProductList.stories.tsx
                └── ProductSortControls.tsx
            └── 📁styles
                └── Page.module.scss
                └── ProductCard.module.scss
                └── ProductCardSkeleton.module.scss
                └── ProductList.module.scss
            └── 📁types
                └── product.type.ts
        └── 📁search
            └── 📁api
            └── 📁components
            └── 📁hooks
            └── 📁stories
            └── 📁styles
            └── 📁types
        └── 📁user
            └── 📁api
            └── 📁components
            └── 📁hooks
            └── 📁stories
            └── 📁styles
            └── 📁types
    └── 📁hooks
    └── 📁lib
        └── constants.ts
        └── formatter.ts
        └── ReactQueryClientProvider.tsx
        └── utils.ts
    └── 📁mock
        └── mockPriceHistory.json
        └── mockProducts.json
    └── 📁store
        └── useAlertStore.ts
    └── 📁stories
        └── button.css
        └── Button.stories.ts
        └── Button.stories.tsx
        └── Button.tsx
        └── Configure.mdx
        └── EmptyState.stories.tsx
        └── header.css
        └── Header.stories.ts
        └── Header.tsx
        └── Input.stories.tsx
        └── page.css
        └── Page.stories.ts
        └── Page.tsx
        └── SortFilterControls.stories.tsx
    └── 📁styles
        └── _base.scss
        └── _media.scss
        └── _mixins.scss
        └── _variables.scss
        └── global.scss
        └── 📁pages
            └── home.module.scss
    └── 📁types
        └── alert.types.ts
        └── ui.types.ts
    └── 📁views
        └── 📁Home
            └── index.tsx
        └── 📁ProductDetail
            └── index.tsx
        └── 📁Search
            └── index.tsx
```
