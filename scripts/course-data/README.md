# Course Data

Course content is split by the UI/product direction we expect to support:

- `languages/`: regular spoken-language courses such as Spanish, English,
  Korean, Japanese, and Italian
- `hanja/`: Hanja-specific character learning
- `programming/`: programming courses such as Python and Java
- `types.ts`: shared course, unit, lesson, challenge, and option shapes
- `helpers.ts`: optional helpers for future hand-authored vocabulary lessons

## Editing Existing Content

Edit the smallest file that matches the scope.

- One Korean unit: `languages/korean/units/unit-3.ts`
- Korean course metadata or unit order: `languages/korean/index.ts`
- One Hanja unit: `hanja/units/unit-2.ts`
- One Python unit: `programming/python/units/unit-4.ts`
- Python course metadata or unit order: `programming/python/index.ts`
- Programming course registration: `programming/index.ts`

The seed script updates units, lessons, and challenges by their order. Avoid
reordering existing unit/lesson/challenge arrays after users have started
lessons unless you are intentionally migrating progress.

## Files To Attach To Another Model

For a regular language:

- `types.ts`
- the target course index, for example `languages/korean/index.ts`
- the target unit file(s), for example `languages/korean/units/unit-1.ts`
- one strong example, usually `languages/spanish/units/unit-1.ts`

For Hanja:

- `types.ts`
- `hanja/index.ts`
- the target `hanja/units/unit-N.ts`

For programming courses:

- `types.ts`
- `programming/index.ts`
- the target course index, for example `programming/python/index.ts`
- the target unit file(s), for example `programming/python/units/unit-1.ts`
- one strong example, usually `programming/java/units/unit-1.ts`

## Unit Shape

```ts
import type { UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: "Unit 1",
  description: "Practice Korean greetings",
  lessons: [
    {
      title: "Greetings",
      challenges: [
        {
          type: "SELECT",
          question: 'Which one means "hello"?',
          options: [
            { text: "안녕하세요", correct: true },
            { text: "감사합니다", correct: false },
            { text: "책", correct: false },
          ],
        },
      ],
    },
  ],
};
```
