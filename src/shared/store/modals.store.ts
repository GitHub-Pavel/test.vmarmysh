import {atom} from "jotai";
import {TreeInterface} from "@/shared/types";

export const createModalAtom = atom<null | TreeInterface>(null)
export const renameModalAtom = atom<null | TreeInterface>(null)