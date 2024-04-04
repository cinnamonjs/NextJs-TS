import { create } from "zustand";

interface UserState {
  likes: number;
  items: string[];
  populations: number;
  decrementPopulation: () => void;
  incrementPopulation: () => void;
  setItem: (item: string) => void;
  like: () => void;
  dislike: () => void;
}

/** global use state management: (use for handle many state in one page) */
export const useUserStore = create<UserState>((set) => ({
  // variables
  likes: 0,
  items: [],
  populations: 0,

  // functions
  setItem: (item) => set((state) => ({ items: [...state.items, item] })),

  incrementPopulation: () =>
    set((state) => ({ populations: state.populations + 1 })),
  decrementPopulation: () =>
    set((state) => {
      if (state.populations === 0) {
        return { populations: 0 };
      } else {
        return { populations: state.populations - 1 };
      }
    }),

  like: () => set((state) => ({ likes: state.likes + 1 })),
  dislike: () =>
    set((state) => {
      if (state.likes === 0) {
        return { likes: 0 };
      } else {
        return { likes: state.likes - 1 };
      }
    }),
}));
