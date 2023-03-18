import { create } from 'zustand';

export const useStore = create(set => ({
  visibleModal: false,
  yourCurrentLesson: null,
  openModal: () => set(() => ({ visibleModal: true })),
  closeModal: () => set(() => ({ visibleModal: false })),
  addLesson: lesson => set({ yourCurrentLesson: { ...lesson } }),
}));
