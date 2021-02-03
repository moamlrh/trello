import { database } from '../../../firebase/config';

export const addNewItemAPI = async ({ board, currList, list, index }) => {
    board.lists[index] = currList
    const lists = board.lists;
    return await database.ref(`boards/${board.id}`).update({
        lists
    })
}


export const updateItemAfterDragAPI = async ({ boardById }) => {
    const response = await database.ref(`boards/${boardById.id}`).update(boardById);
    return response;
};


export const deleteItemAPI = async ({board}) => {
    return await database.ref(`boards/${board.id}`).update(board);
}