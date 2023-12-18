import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    const arrayAtCurrent = array[currentIndex];
    const arrayAtRandom = array[randomIndex];

    if (!arrayAtCurrent || !arrayAtRandom) continue;

    [array[currentIndex], array[randomIndex]] = [arrayAtRandom, arrayAtCurrent];
  }

  return array;
};
