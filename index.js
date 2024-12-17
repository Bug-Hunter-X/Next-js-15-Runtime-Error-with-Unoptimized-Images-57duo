```javascript
// pages/about.js
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Image src='/images/unoptimized.jpg' alt='Optimized Image' width={500} height={300} />
    </div>
  );
}
```

To ensure this works properly, also create a directory called `images` in the `public` directory and put an image in there called `unoptimized.jpg`.