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
- `www.imejis.io:images:tools:memoji-builder:male:justin:light_boy`
  - Source: `/male/justin/light/{emotion}.png`
- `www.imejis.io:images:tools:memoji-builder:female:mary:light_girl`
  - Source: `/female/mary/light/{emotion}.png`
- `www.imejis.io:images:tools:memoji-builder:female:angela:dark_woman`
  - Source: `/female/angela/dark/{emotion}.png`

Each character set includes:

```text
angry.png
crossing.png
crying.png
fisting.png
grinning.png
happy.png
heart.png
kiss.png
like.png
mouth.png
party.png
rolling.png
sad.png
scream.png
sh!.png
shocked.png
star.png
thinking.png
winking.png
```

`replacements/` contains first-pass candidates mapped to the current public SVG
names. These are not wired into the app yet, so the visual swap can be reviewed
before changing imports or image paths.
