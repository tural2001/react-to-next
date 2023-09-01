import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../features/slides/slidesSlice';

export const store = configureStore({
  reducer: { slide: slideReducer },
});
