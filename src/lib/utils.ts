import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AxiosError } from "axios";
import { type ApiError } from "./types";
import { toast } from "sonner";
dayjs.extend(relativeTime);

export const buildUsername = (email: string) => {
  return (
    email.split("@")[0]?.slice(0, 5) + Math.random().toString(36).slice(2, 10)
  );
};

export const getRelativeTime = (time: Date) => {
  return dayjs(time).fromNow();
};

export const compactValue = (value: number) => {
  return value.toLocaleString(undefined, {
    notation: "compact",
  });
};

export const trimmedString = (str: string) => {
  return str.replace(/\s+/g, " ").trim();
};

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

export const checkIfApiError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const apiError = error as AxiosError<ApiError>;
    if (!!apiError.response) {
      return apiError.response.data;
    }
  }
};

export const handleApiError = (error: unknown) => {
  const apiError = checkIfApiError(error);
  if (!!apiError) {
    toast.error(
      `${apiError.subject.toUpperCase()}: ${apiError.message.toUpperCase()}`,
    );
  }
};
