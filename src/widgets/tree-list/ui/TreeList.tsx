import {FC, useState} from "react"
import {List} from "@mui/material";
import {TreeCard} from "@/features/tree-card";
import {RootMenu} from "@/entities/root-menu";
import {ListPropsInterface} from "./tree-list.types"

export const TreeList: FC<ListPropsInterface> = ({tree}) => {
    const showMenuState = useState<number | null>(null)
    return (
        <List>
            <TreeCard
                menu={RootMenu}
                showMenuState={showMenuState}
                tree={{...tree, name: 'Root'}}
            />
        </List>
    )
}