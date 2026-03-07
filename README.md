# Mindfulness Activities

A calming, interactive web app with three guided mindfulness activities for children. Built with React 19 and Vite, authenticated via Supabase, and hosted on GitHub Pages.

## Activities

- **Rainbow** — A breathing and colouring activity
- **Bubbles** — Animated bubble-blowing activity
- **Feathers** — Gently falling feathers for breath-pacing

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/) — authentication (email/password)

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project with email/password auth enabled

### Environment Variables

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Install and Run

```bash
npm install
npm run dev
```

## Deployment (GitHub Pages)

### 1. Set the base path in `vite.config.js`

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### 2. Add GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 3. Add secrets to GitHub

In your repository: **Settings > Secrets and variables > Actions**, add:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 4. Enable GitHub Pages

In **Settings > Pages**, set the source to the `gh-pages` branch.

Push to `main` to trigger a deploy.

## Project Structure

```
src/
  mindfulness-app.jsx       # App root
  theme.js                  # Colours and global styles
  supabaseClient.js         # Supabase initialisation
  components/
    AuthScreen.jsx          # Login screen
    Clouds.jsx              # Animated background
    Menu.jsx                # Activity selector
    BackBtn.jsx             # Back to menu button
  activities/
    rainbow/Rainbow.jsx
    bubbles/Bubbles.jsx
    feathers/Feathers.jsx
```
