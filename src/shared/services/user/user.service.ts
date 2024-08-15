import {TreeInterface} from "@/shared/types";
import {axiosInstance} from "@/shared/instances";
import {CreateRequestInterface, DeleteRequestInterface, RenameRequestInterface} from "./user.types.ts";

export const UserService = {
    tree: {
        async get(treeName: string) {
            return axiosInstance<TreeInterface>({
                url: '/api.user.tree.get',
                method: 'POST',
                params: {treeName}
            })
        },
        async create(tree: CreateRequestInterface) {
            return axiosInstance({
                url: '/api.user.tree.node.create',
                method: 'POST',
                params: tree
            })
        },
        async delete(tree: DeleteRequestInterface) {
            return axiosInstance({
                url: '/api.user.tree.node.delete',
                method: 'POST',
                params: tree
            })
        },
        async rename(tree: RenameRequestInterface) {
            return axiosInstance({
                url: '/api.user.tree.node.rename',
                method: 'POST',
                params: tree
            })
        }
    }
}