# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build
npm run preview   # preview production build locally
npm run lint      # run ESLint
```

There are no tests.

## Environment

Requires a `.env` file with:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Architecture

**Auth gate → App shell → Activities**

`src/main.jsx` is the true entry point. It renders `Root`, which gates on Supabase auth state:
- No session → `AuthScreen`
- Password recovery flow → `SetPasswordScreen`
- Authenticated → `App` (in `src/mindfulness-app.jsx`)

`App` owns a single `screen` state string (`"menu"`, `"rainbow"`, `"feathers"`, `"bubbles"`) and renders the matching activity full-screen. It also tracks `{ w, h }` on `window.resize` and passes those as `screenW`/`screenH` props to the activities that need them.

**Shared pieces**
- `src/theme.js` — exports `SKY`, `DARK_NAVY`, and `globalStyles` (a `<style>` string injected by `App`). All components that need brand colours import from here.
- `src/supabaseClient.js` — singleton Supabase client, imported wherever auth or DB calls are needed.

**Activities**

| Screen | Component | Rendering approach |
|---|---|---|
| `rainbow` | `src/activities/rainbow/Rainbow.jsx` | SVG arcs animated with CSS `stroke-dashoffset` transitions; triggered by spacebar |
| `feathers` | `src/activities/feathers/Feathers.jsx` + `FallingFeather.jsx` | `requestAnimationFrame` loop per feather; waves of feathers increase in count each cycle |
| `bubbles` | `src/activities/bubbles/Bubbles.jsx` | `requestAnimationFrame` loop; DOM refs mutated directly for perf (no re-render per frame) |

**Animation pattern used by Feathers and Bubbles:** state is held in a ref (`bubblesRef` / `posRef`) and DOM elements are mutated directly via `el.style.transform` inside the rAF loop. React state is only set when the component list changes, not on every frame.

**Assets:** Feathers uses `feather.svg` (a single SVG, coloured via CSS `filter: hue-rotate()`). Bubbles uses six separate SVG files imported directly. Rainbow uses `cloud.png` for the foot-of-arc clouds.

**No React import needed** — the project uses the new JSX transform configured in Vite.
