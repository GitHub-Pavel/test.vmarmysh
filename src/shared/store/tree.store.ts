import {atom} from "jotai";
import {TreeInterface} from "@/shared/types";

export const treeAtom = atom<TreeInterface | null>(null)