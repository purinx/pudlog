import { atom } from 'jotai';

export const dataAtom = atom<string | undefined>(undefined);

export type Doc = {
  createdAt: string;
  title: string;
  description: string;
};

export const listAtom = atom<Doc[] | undefined>(undefined);
