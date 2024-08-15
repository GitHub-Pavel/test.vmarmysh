import {FC} from "react";
import {useAtom} from "jotai";
import {useMutationTree, useTree} from "@/shared/hooks";
import {TreeList} from "@/widgets/tree-list";
import {createModalAtom, renameModalAtom} from "@/shared/store";
import {ModalForm, ModalFormType} from "@/entities/modal-form";
import {UserService} from "@/shared/services";
import {TREE_NAME} from "@/shared/constants";

export const Tree: FC = () => {
    const tree = useTree()
    const createModal = useAtom(createModalAtom)
    const renameModal = useAtom(renameModalAtom)
    const mutate = useMutationTree()
    const [renameTree] = renameModal
    const [createTree] = createModal
    const onCreate = ({name}: ModalFormType) => {
        UserService.tree.create({
            treeName: TREE_NAME,
            nodeName: name,
            parentNodeId: createTree!.id
        }).then(() => mutate())
    }
    const onRename = ({name}: ModalFormType) => {
        UserService.tree.rename({
            treeName: TREE_NAME,
            nodeId: renameTree!.id,
            newNodeName: name
        }).then(() => mutate())
    }

    if (!tree) return null

    return (
        <>
            <TreeList tree={tree} />
            <ModalForm
                onSubmit={onCreate} modal={createModal} label="Create tree"
            />
            {renameTree && (
                <ModalForm
                    onSubmit={onRename}
                    modal={renameModal}
                    label="Rename tree"
                    defaultValues={{
                        name: renameTree!.name
                    }}
                />
            )}
        </>
    )
}