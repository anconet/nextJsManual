# Manual Install of Next Js.
---
# Todo

---

```bash
mkdir my-app
cd my-app
npm install next@latest
npm install react@latest
npm install react-dom@latest
```
Add the following to `package.json`:
```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },

```
create `/app` directory and initial `layout.tsx` and `page.tsx`

`layout.tsx`
```typescript
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

`page.tsx`
```typescript
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
## Add TypeScript
When you run `npm run dev` for the first time, next will install Typescript and auto create a `tsconfig.json` file for you.

## Add Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
# Create Tailwind.config.js
npx tailwindcss init -p
```
Add to `tailwind.config.js`
```javascript

...
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
   ], ... }
```
Create `app/global.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Import `app/global.css` into `app/layout.tsx`
```typescript
// These styles apply to every route in the application
import './globals.css'

import type { Metadata } from 'next'
  
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```
Add Tailwind Extention to VSCodeL `Tailwind CSS IntelliSense` by Tailwind Labs
