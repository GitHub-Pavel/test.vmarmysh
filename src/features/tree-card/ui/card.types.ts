import {TreeInterface, TreeMenuPropsInterface} from "@/shared/types";
import {FC} from "react";

export interface CardPropsInterface {
    tree: TreeInterface;
    menu?: FC<TreeMenuPropsInterface>;
    showMenuState: [number | null, (value: number | null) => void];
}