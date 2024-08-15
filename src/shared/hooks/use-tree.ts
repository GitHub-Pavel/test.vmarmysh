import {useEffect} from "react"
import {useAtomValue} from "jotai"
import {treeAtom} from "@/shared/store"
import {useMutationTree} from "./use-mutation-tree"

export const useTree = () =>  {
    const tree = useAtomValue(treeAtom)
    const mutate = useMutationTree()

    useEffect(() => {
        if (!tree) mutate()
    }, [])

    return tree
}