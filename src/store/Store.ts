import { create } from 'zustand';

interface Store {
  count: number;
  setCount: (count: number) => void;
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  setCount: (count) => set(() => ({ count: count })),
}));
