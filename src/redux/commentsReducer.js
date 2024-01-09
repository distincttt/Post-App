import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD } from "./types";

const initialState = { comments: [] };

export const commentsReducer = (state = initialState, action) => {
   switch (action.type) {
      case COMMENT_CREATE:
         return {
            ...state,
            comments: [...state.comments, action.data],
         };
      case COMMENTS_LOAD:
         const commentsNew = action.data.map((el) => {
            return { text: el.name, id: el.id };
         });
         return {
            ...state,
            comments: commentsNew,
         };
      case COMMENT_UPDATE:
         const { data } = action;
         const { comments } = state;
         const itemIndex = comments.findIndex((el) => el.id === data.id);
         const newComments = [
            ...comments.slice(0, itemIndex),
            data,
            ...comments.slice(itemIndex + 1),
         ];
         return {
            ...state,
            comments: newComments,
         };
      case COMMENT_DELETE:
         return (() => {
            const { id } = action;
            const { comments } = state;
            const itemIndex = comments.findIndex((el) => el.id === id);
            const newComments = [...comments.slice(0, itemIndex), ...comments.slice(itemIndex + 1)];
            return {
               ...state,
               comments: newComments,
            };
         })();
      default:
         return state;
   }
};
