import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create()(
  devtools(set => ({
    loading: false,
    error: null,
    authenticated: false,
  }))
);
