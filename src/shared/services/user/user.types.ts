export interface CreateRequestInterface {
    treeName: string;
    parentNodeId: number;
    nodeName: string;
}

export interface DeleteRequestInterface {
    treeName: string;
    nodeId: number;
}

export interface RenameRequestInterface {
    treeName: string;
    nodeId: number;
    newNodeName: string;
}