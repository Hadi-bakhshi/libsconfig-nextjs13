'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI - Next.js example using App Router in TypeScript
          </Typography>
        </Box>
      </Container>
      {/* <h1>Hello, Next.js 13 App Directory!</h1> */}
      <div>
        <Link href="/initial-data">Prefetching Using initial data</Link>
      </div>
      <div>
        <Box>
          <Button variant="contained">سلام</Button>
          <TextField label="تعداد" variant="outlined" />
          <Link href="/hydration">Prefetching Using Hydration</Link>
        </Box>
      </div>
    </main>
  );
}
