import { create } from 'zustand';

export const useProvider = create((set) => ({
  providerId: null,
  setProviderId: (id) => set({ providerId: id }),
}));


