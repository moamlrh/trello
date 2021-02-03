import { database } from "../../../firebase/config";

export const addNewListAPI = async ({ board, newList }) => {
  const response = await database.ref(`boards/${board.id}`).update({
    lists: board.lists ? [...board.lists, newList] : [newList],
  });
  return response;
};