import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { inputText } from "./redux/action";

export default function Title(props) {
   const text = useSelector((state) => {
      const { inputReducer } = state;
      return inputReducer.text;
   });
   const [isHidden, setIsHidden] = useState(true);
   const dispatch = useDispatch();

   const handleChange = (e) => {
      dispatch(inputText(e.target.value));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsHidden(false);
   };

   return (
      <form className="card-title" onSubmit={handleSubmit}>
         {isHidden && (
            <div className="card-title-top">
               <input type="text" onChange={handleChange} />
            </div>
         )}
         {!isHidden && <input value={text}></input>}
      </form>
   );
}
