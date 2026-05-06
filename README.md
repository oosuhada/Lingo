# Lingo

언어 학습 앱 구조를 바탕으로 한국어, 영어, 일본어, 스페인어, 이탈리아어, 한자, Python, Java 학습 코스를 함께 다루도록 확장 중인 Next.js 학습 플랫폼입니다. 아직 개발 중인 프로젝트라 데모 사이트 주소는 비워두고, 현재 구현된 기능과 화면 중심으로 정리했습니다.

## 왜 만들었나 / Why I built it

Duolingo를 매일 쓰면서, 텍스트를 읽고 외우는 방식보다 **짧게 반복하고 바로 반응을 받는 게임식 학습**이 나에게 훨씬 잘 맞는다는 걸 체감했습니다. 이후 Python과 Java를 공부하면서 코딩테스트를 풀다 보면 알고 있던 기초 문법이 순간적으로 생각나지 않는 일이 자주 있었고, 단순 암기식 복습은 오래 유지되지 않았습니다.

그래서 프로그래밍 언어도 Duolingo처럼 작은 문제를 반복해서 풀고, 진행률과 보상으로 계속 돌아오게 만들면 어떨까에서 시작했습니다. 언어 학습 UX를 그대로 복제하는 것이 아니라 **내가 실제로 효과를 봤던 학습 리듬을 Python·Java·한자 같은 다른 학습 영역에 적용해 보는 것**이 Lingo의 핵심 동기입니다.

I built Lingo because Duolingo's short, game-like repetition worked much better for me than passive memorization. When basic Python and Java syntax kept disappearing from memory during coding-test practice, I wanted the same kind of active, repeatable learning loop for programming concepts instead of another page of notes to reread.

Demo site: [https://lingo.oosu.dev](https://lingo.oosu.dev)

![Lingo main screen](.github/images/img_main.png)

## Current Status

- Next.js App Router 기반의 marketing, auth, main learning, lesson, admin route가 구성되어 있습니다.
- Clerk 인증, Drizzle ORM, Neon/PostgreSQL, Stripe subscription, React Admin 기반 운영 화면을 연결할 수 있는 구조입니다.
- 언어 코스뿐 아니라 Python/Java 프로그래밍 코스와 한자 코스를 추가하는 방향으로 확장하고 있습니다.
- 기존 clone/template README에 남아 있던 외부 author, 후원, Vercel demo, star-history 중심 내용을 제거하고 현재 포트폴리오 맥락에 맞게 정리했습니다.

## Screenshots

| Course selection | Quest progress |
| --- | --- |
| ![Course UI](.github/images/img1.png) | ![Quest UI](.github/images/img2.png) |

| Shop and hearts |
| --- |
| ![Shop UI](.github/images/img3.png) |

## Implemented Features

| Area | What is implemented |
| --- | --- |
| Marketing surface | Glass-field landing UI, animated hero visual, language panel, theme-aware global styling |
| Course catalog | Courses are grouped into language, hanja, and programming categories with custom visual themes |
| Learning path | Unit/lesson hierarchy, active lesson state, progress percentage, locked/completed lesson UI |
| Lesson engine | Challenge cards, quiz footer, result card, hearts modal, practice modal, exit modal |
| User progress | Hearts, points, active course, course progress, lesson percentage, subscription-aware state |
| Quests and shop | Quest checklist, heart refill, unlimited hearts promo, Stripe subscription hook |
| Admin tools | React Admin resources for courses, units, lessons, challenges, and challenge options |
| Localization | UI copy helper and locale cookie flow for Korean/English interface text |

## Course Direction

The project is moving beyond a single-language clone into a broader learning playground:

- Korean, English, Japanese, Spanish, Italian language courses
- Hanja memorization and meaning drills
- Python beginner drills based on control flow, functions, collections, and coding-test patterns
- Java beginner drills planned around syntax, objects, and problem-solving flow

## Architecture

```text
Lingo/
├── app/
│   ├── (marketing)/           # landing page
│   ├── (auth)/                # Clerk sign-in/sign-up
│   ├── (main)/                # courses, learn, quests, shop, leaderboard
│   ├── lesson/                # lesson and challenge player
│   ├── admin/                 # React Admin resources
│   └── api/                   # CRUD and Stripe webhook routes
├── actions/                   # server actions for progress/subscription
├── components/                # layout, progress, quest, promo, landing UI
├── db/                        # Drizzle schema, queries, connection
├── lib/                       # admin, course style, Stripe, locale, UI copy
├── scripts/course-data/       # language, hanja, and programming seed content
└── store/                     # modal state stores
```

```mermaid
flowchart LR
  user["Learner"] --> app["Next.js App Router"]
  app --> auth["Clerk auth"]
  app --> db["Drizzle + PostgreSQL"]
  app --> lesson["Lesson/challenge engine"]
  lesson --> progress["Progress, hearts, points"]
  app --> admin["React Admin"]
  app --> stripe["Stripe subscription"]
```

## Environment

Create local env files from `.env.example`. Keep real credentials out of git.

```env
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
STRIPE_API_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
CLERK_ADMIN_IDS=
```

## Run Locally

This repo uses `bun.lock`, so Bun is the preferred package manager.

```bash
bun install
bun run dev
```

Database setup when credentials are ready:

```bash
bun run db:push
bun run db:prod
```

## Validate

```bash
bun run lint
bun run build
```

If Clerk keys or database credentials are mismatched locally, authenticated pages can redirect before screenshots/build verification. In that case, fix env first and rerun the checks.
