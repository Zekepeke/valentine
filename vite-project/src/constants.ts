import { Vector3 } from "three";

// --- Cards Data ---
export type CardConfig = {
  id: string;
  image: string;
  position: [number, number, number];
  rotation: [number, number, number];
};

export const CARDS: ReadonlyArray<CardConfig> = [
  {
    id: "confetti",
    image: "/mine.jpeg",
    position: [0,0,0],
    rotation: [0,0,0],
  }
];