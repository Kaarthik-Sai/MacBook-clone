import { create } from "zustand";

const useMacBookStore = create((set) => ({
  color: "#2e2e2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({ color: "#2e2c3e", scale: 0.08, texture: "/videos/feature.mp4" }),
}));

export default useMacBookStore;
