import { database } from '../../../firebase/config';

export async function getBoardsByIdAPI(id) {
    var data = [];
    const board = database.ref(`boards/${id}`);
    await board.once('value', snap => {
        data.push(snap.val());
    })
    return data[0]
}

export async function getAllBoardsAPI() {
    const data = []
    const boards = await database.ref('boards');
    await boards.once('value', snap => {
        data.push(snap.val());
    })
    return data[0];
}


export async function createNewBoardAPI(newBoard) {
    await database.ref(`boards/${newBoard.id}`).set(newBoard)

}



export async function updateBoardAfterDragAPI(boardAfterDrag) {
    console.log(boardAfterDrag)
    return await database.ref(`boards/${boardAfterDrag.id}`).update(boardAfterDrag)
}


export async function deletBoardAPI(id) {
    return await database.ref(`boards/${id}`).set(null)

}

export const addStarToBoardAPI  = async ({board, startted}) => {
    return await database.ref(`boards/${board.id}`).update({
        ...board,
        startted
    })
}