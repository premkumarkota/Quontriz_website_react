# QUONTRIZ — Hero Video Brief (for AI video generation)

Goal: a looping, atmospheric **soft-3D blue** background clip for the homepage hero.
The brand text ("QUONTRIZ", headline, CTAs) is overlaid in HTML — **do NOT try to make the
AI render any text/logos** (it will come out garbled).

## Technical specs (so it drops straight into the site)
- **Aspect ratio:** 16:9 (landscape). Mobile center-crops, so keep action centered.
- **Resolution:** 1080p minimum (1920×1080), 4K if available.
- **Duration:** 5–10s. Prefer a tool with a **loop** option (Luma Dream Machine has one).
- **Motion:** slow and weighty. Busy/fast motion fights the headline text.
- **Palette:** corporate blue only — cobalt `#1A4FE3`, navy `#0A2A6B`, ink `#0B1B33`. **No purple.**
- **Format:** mp4 (H.264). If you get .mov/.webm, I'll convert.
- Leave the **left third calmer/darker** — that's where the headline sits.

## PRIMARY PROMPT — dark navy (best for our white headline)
```
Cinematic soft-3D product render, minimal and premium. A deep navy studio
environment softly lit from above. Glossy cobalt-blue spheres float and drift
slowly with weighty, physical motion, casting long soft shadows. A sleek
floating smartphone rotates gently, its screen showing an abstract blue app
dashboard with softly glowing UI cards. Translucent glass panels and thin
glowing connection lines link floating nodes, suggesting enterprise data
flowing between systems. Slow smooth camera dolly, shallow depth of field,
soft bokeh, matte and glossy materials, volumetric light. Monochrome corporate
blue palette, elegant, calm, high-end, seamless subtle motion.
```
**Negative / avoid:** `text, words, letters, logos, watermark, people, purple, fast motion, clutter, glitch`

## ALTERNATE PROMPT — matte white studio (Dribbble-style)
Use this if you prefer the light look (I'll switch the hero to dark text + light scrim).
```
Cinematic soft-3D render on a matte off-white studio surface, bright soft
lighting, long diffuse shadows. Glossy cobalt-blue spheres drift slowly with
weighty motion. A floating smartphone rotates gently showing an abstract blue
app UI. Thin blue wireframe globe turns slowly nearby. Minimal, tactile,
premium, shallow depth of field, monochrome blue-on-white palette, calm
seamless motion.
```

## Recommended tools
- **Luma Dream Machine** — has a native **loop** toggle; easiest seamless loop. Free tier.
- **Kling** — excellent physics/material realism.
- **Runway Gen-4** — best control if you feed a start image (drop in a still from the current hero).
- **Sora / Pika** — also fine.

## Workflow
1. Generate 3–5 candidates with the primary prompt.
2. Pick the **slowest, cleanest, most loopable** one.
3. Drop the file at `public/hero-loop.mp4` (and I'll regenerate the poster) — or send it to me.
4. I'll finish it: seamless-loop crossfade, brand color match, poster frame, and size optimization.

## Swapping it in (once you have the mp4)
- Replace `public/hero-loop.mp4`
- I'll regenerate `public/hero-poster.jpg` from its first frame.
- No code changes needed — the player is already wired.
