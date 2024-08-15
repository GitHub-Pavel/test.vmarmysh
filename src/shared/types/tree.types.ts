export interface TreeInterface {
    id: number;
    name: string;
    children: TreeInterface[];
}

export interface TreeMenuPropsInterface {
    tree: TreeInterface;
}