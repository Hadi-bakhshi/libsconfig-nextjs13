import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CounterState = {
  value: number;
};

const initialState = {
  value: 0,
} as CounterState;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, incrementByAmount, decrement, decrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
export const counterState = (state: RootState) => state.counter;
