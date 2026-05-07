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

Each character set includes:

```text
{prefix}angry.png
{prefix}crossing.png
{prefix}crying.png
{prefix}fisting.png
{prefix}grinning.png
{prefix}happy.png
{prefix}heart.png
{prefix}kiss.png
{prefix}like.png
{prefix}mouth.png
{prefix}party.png
{prefix}rolling.png
{prefix}sad.png
{prefix}scream.png
{prefix}sh!.png
{prefix}shocked.png
{prefix}star.png
{prefix}thinking.png
{prefix}winking.png
```

## Replacement candidates

`replacements/` contains one PNG candidate for each non-course SVG in
`public/`, excluding flags, Hanja, Python, and Java. The filenames intentionally
match the original SVG basename so a later UI swap can change only extensions or
asset paths.

Mapped files:

```text
boy.png
finish.png
girl.png
github.png
heart.png
hero.png
leaderboard.png
learn.png
man.png
mascot.png
mascot_bad.png
mascot_sad.png
points.png
quests.png
robot.png
shop.png
unlimited.png
woman.png
zombie.png
```

Human and mascot replacements come from the local memoji character sets above.
Utility replacements come from Apple iOS 14.2 emoji images on Emojipedia, except
`robot.png`, which preserves the user-provided sample at `public/memoji/robot.png`.
See `replacements/manifest.json` for the exact source mapping.
