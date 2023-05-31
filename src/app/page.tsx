import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/initial-data">Prefetching Using initial data</Link>
      </p>
      <p>
        <Link href="/hydration">Prefetching Using Hydration</Link>
      </p>
    </main>
  );
}
