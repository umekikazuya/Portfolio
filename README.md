# My Portfolio

This project will serve as my personal portfolio of developer skills, projects, and experiences, as well as an introduction to my private life.

## Public Website

[Link to Portfolio](https://www.umekikazuya.me/)

## Tech Stack

### Frontend Stack

- Next.js(AppRouter)
- TypeScript
- Styled Components

### Backend Stack

- [Laravel](https://www.drupal.org/)

## Getting Started

### 001. Clone the repository

```shell
git clone https://github.com/kazuya-u/Portfolio.git
```

### 002. Install dependencies.

```shell
npm ci
```

### 003. Start the development server.

```shell
npm run dev
```

## Project Structure
```text
app/
│   ├── api/
│   │   └── articles/
│   │       └── route.ts (Next.js API Route)
│   ├── articles/
│   │   └── page.tsx (記事一覧ページ)
│   ├── page.tsx
│   └── layout.tsx
components/
│   ├── ui/ (再利用可能なUIコンポーネント)
│   │   ├── Button/
│   │   └── Heading/
│   └── features/ (機能単位コンポーネント)
│       └── articles/
│           ├── ArticleSection.tsx
│           └── ArticleContainer.tsx
domain/
│   ├── entities/
│   │   ├── Article.ts
│   │   └── Profile.ts
│   ├── valueObjects/
│   │   ├── Article.ts
│   │   └── Profile.ts
│   └── repositories/
│   │   ├── ArticleRepository.ts
│   │   └── ProfileRepository.ts
infrastructure/
│   └── api/
│       ├── ArticleApiRepository.ts(API呼び出しの具体実装)
│       └── ProfileApiRepository.ts(API呼び出しの具体実装)
│
lib/
│   └── services/
│       └── parseArticle.ts (純粋関数)
hooks/
│   └── useArticles.ts
types/
│   └── Result.ts
styles/
│   ├── reset.css
│   └── base.css
tests/
```

## License

In preparation...
