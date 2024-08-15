import {FC, MouseEvent} from "react";
import {CircularProgress, IconButton, Stack} from "@mui/material";
import {TreeInterface, TreeMenuPropsInterface} from "@/shared/types";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useMutationTree} from "@/shared/hooks";
import {useMutation} from "react-query";
import {UserService} from "@/shared/services";
import {TREE_NAME} from "@/shared/constants";
import {useSetAtom} from "jotai";
import {createModalAtom, renameModalAtom} from "@/shared/store";

type HandleType = (fn: (arg0: (prev: null | TreeInterface) => TreeInterface | null) => void) => (e: MouseEvent<HTMLElement>) => void;

export const TreeMenu: FC<TreeMenuPropsInterface> = ({tree}) => {
    const mutateTree = useMutationTree()
    const setCreateModal = useSetAtom(createModalAtom)
    const setRenameModal = useSetAtom(renameModalAtom)
    const {mutate, isLoading} = useMutation(
    ['delete tree'],
    () => UserService.tree.delete({
        treeName: TREE_NAME,
        nodeId: tree.id
    }), {
        onSuccess: () => mutateTree()
    })
    const handleClick: HandleType = fn => () => fn(prev => prev ? null : tree)

    return (
        <Stack spacing={1} direction="row" alignItems="center">
            <IconButton aria-label="delete" onClick={handleClick(setCreateModal)}>
                <AddCircleOutlineIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleClick(setRenameModal)}>
                <ModeEditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => mutate()}>
                <DeleteOutlinedIcon />
            </IconButton>
            {isLoading && (
                <CircularProgress color="inherit" size={20} />
            )}
        </Stack>
    )
}