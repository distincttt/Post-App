import { COMMENT_CREATE } from "./types";

import { errorOn } from "./action";

const badWords = ["козёл", "осёл"];

export function spamFilter({ dispatch }) {
   return function (next) {
      return function (action) {
         if (action.type === COMMENT_CREATE) {
            const hasBadWords = badWords.some((el) => action.data.text.includes(el));
            if (hasBadWords) {
               return dispatch(errorOn("Уважайте людей"));
            }
         }
         return next(action);
      };
   };
}
