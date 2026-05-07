# Memoji Asset Staging

These PNGs are staging assets for replacing the older SVG illustration set with
more iOS-memoji-like 3D character artwork.

Source pattern:

```text
https://www.imejis.io/images/tools/memoji-builder/{gender}/{character}/{tone}/{emotion}.png
```

Downloaded character sets:

- `www.imejis.io:images:tools:memoji-builder:male:mattew:light_man`
  - Source: `/male/mattew/light/{emotion}.png`
  - Local filenames use the `man_` prefix.
- `www.imejis.io:images:tools:memoji-builder:male:justin:light_boy`
  - Source: `/male/justin/light/{emotion}.png`
  - Local filenames use the `boy_` prefix.
- `www.imejis.io:images:tools:memoji-builder:female:mary:light_girl`
  - Source: `/female/mary/light/{emotion}.png`
  - Local filenames use the `girl_` prefix.
- `www.imejis.io:images:tools:memoji-builder:female:angela:dark_woman`
  - Source: `/female/angela/dark/{emotion}.png`
  - Local filenames use the `woman_` prefix.
- `www.imejis.io:images:tools:memoji-builder:male:ed:dark_mascot`
  - Source: `/male/ed/dark/{emotion}.png`
  - Local filenames use the `mascot_` prefix.

Each character set includes:

```text
{prefix}_angry.png
{prefix}_crossing.png
{prefix}_crying.png
{prefix}_fisting.png
{prefix}_grinning.png
{prefix}_happy.png
{prefix}_heart.png
{prefix}_kiss.png
{prefix}_like.png
{prefix}_mouth.png
{prefix}_party.png
{prefix}_rolling.png
{prefix}_sad.png
{prefix}_scream.png
{prefix}_sh!.png
{prefix}_shocked.png
{prefix}_star.png
{prefix}_thinking.png
{prefix}_winking.png
```

## Replacement candidates

`replacements/` contains one PNG candidate for each non-course SVG in
`public/`, excluding flags, Hanja, Python, and Java. The filenames intentionally
match the original SVG basename so a later UI swap can change only extensions or
asset paths.

Mapped files:

```text
finish.png
github.png
heart.png
hero.png
leaderboard.png
learn.png
mascot.png
mascot_bad.png
mascot_sad.png
points.png
quests.png
robot.png
shop.png
unlimited.png
zombie.png
```

Human replacements are kept only in the emotion-specific character folders.
Mascot replacements use the Ed dark memoji set above. Most utility replacements
come from Apple iOS 14.2 emoji images on Emojipedia; `shop.png` uses the
Microsoft Fluent 3D shopping bags icon, `github.png` uses the GitHub mark, and
`robot.png` preserves the user-provided sample at `public/memoji/robot.png`. See
`replacements/manifest.json` for the exact source mapping.
