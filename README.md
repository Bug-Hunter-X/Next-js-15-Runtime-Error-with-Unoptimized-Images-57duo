# Next.js 15 Unoptimized Image Error

This repository demonstrates a runtime error that can occur in Next.js 15 applications when using images that aren't optimized using the `next/image` component.  The `about.js` file contains the problematic code.  The `index.js` file shows the navigation to the `about` page.

## Reproducing the Error

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Observe the runtime error in the console.

## Solution

The solution is to use the `next/image` component to load and optimize the images. This ensures that images are properly served and handled by Next.js, preventing runtime errors.