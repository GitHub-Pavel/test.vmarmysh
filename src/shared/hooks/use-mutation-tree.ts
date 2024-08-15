import {useSetAtom} from "jotai";
import {useMutation} from "react-query";
import {treeAtom} from "@/shared/store";
import {TREE_NAME} from "@/shared/constants";
import {UserService} from "@/shared/services";

export const useMutationTree = () => {
    const setTree = useSetAtom(treeAtom)

    const {mutate} = useMutation(
        ['mutationTree'],
        () => UserService.tree.get(TREE_NAME),
        {
            onSuccess: (res) => setTree(res.data)
        }
    )

    return mutate
}