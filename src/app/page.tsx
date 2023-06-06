import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/users">getUsers</Link>
      </p>
    </main>
  );
}
