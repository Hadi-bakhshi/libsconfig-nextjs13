'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import {  decrement, increment, reset } from '@/feature/counterSlice/counterSlice';

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

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
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }}>
            decrement
          </button>
          <button onClick={() => dispatch(reset())}>reset</button>
          <h3>count is:{count}</h3>
        </Box>
      </div>
    </main>
  );
}
