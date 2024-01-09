import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

import { commentCreate, commentsLoad } from "./redux/action";
import SingleComment from "./SingleComment";
import Spin from "./Spin";

export default function Comments(props) {
   const [textComment, setTextComment] = useState("");
   const comments = useSelector((state) => {
      const { commentsReducer } = state;
      return commentsReducer.comments;
   });
   const dispatch = useDispatch();

   const handleInput = (e) => {
      setTextComment(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const id = uniqid();
      dispatch(commentCreate(textComment, id));
   };

   useEffect(() => {
      dispatch(commentsLoad());
   }, []);
   return (
      <div className="card-comments">
         <Spin className="card-spin" />
         <form className="card-comments" onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} />
            <input type="submit" hidden />
         </form>
         {!!comments.length &&
            comments.map((el) => {
               return <SingleComment key={el.id} data={el} />;
            })}
      </div>
   );
}
