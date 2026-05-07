# Course Data

Each natural-language course has its own file in this folder. Edit one course
file at a time when expanding lesson content.

## Files to attach to another model

- `types.ts`: course, unit, lesson, challenge, and option shapes
- `helpers.ts`: helper for simple vocabulary lessons
- `spanish.ts`: best complete example from the original seed
- The target language file, such as `korean.ts` or `japanese.ts`
- `index.ts`: only needed when adding a brand-new course file

## Shape

```ts
export const koreanCourse: CourseSeed = {
  title: "Korean",
  imageSrc: "/ko.svg",
  units: [
    {
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
    },
  ],
};
```

The seed script preserves existing course ids and updates units, lessons, and
challenges by their order. Avoid reordering existing items after users have
started lessons unless you are intentionally migrating the course.
