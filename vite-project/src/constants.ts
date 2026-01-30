
// --- Cards Data ---
export type CardConfig = {
  id: string;
  image: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
};

export const CARDS: ReadonlyArray<CardConfig> = [
  {
    id: "confetti",
    image: "/letter.jpg",
    position: [1.6,2.3,2],
    rotation: [4.8,0,6],
    scale: [4.2,4.2,4.2],
  },
];