import {FC} from "react";
import {useSetAtom} from "jotai";
import {createModalAtom} from "@/shared/store";
import {IconButton, Stack} from "@mui/material";
import {TreeMenuPropsInterface} from "@/shared/types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const RootMenu: FC<TreeMenuPropsInterface> = ({tree}) => {
    const setCreateModal = useSetAtom(createModalAtom)
    const handleCreate = () => setCreateModal(prev => prev ? null : tree)

    return (
        <Stack spacing={1} alignItems="center">
            <IconButton aria-label="delete" onClick={handleCreate}>
                <AddCircleOutlineIcon />
            </IconButton>
        </Stack>
    )
}