import { useSelector } from "react-redux";

import Likes from "./Likes";
import Title from "./Title";
import Comments from "./Comments";

import "./App.css";

function App() {
   const error = useSelector((state) => state.appReducer.error);

   return (
      <div className="App">
         <div className="wrap">
            <div className="card">
               {error && <div className="error-message">{error}</div>}
               <div className="card-image">
                  <img src="./demons.jpeg" alt="demons" />
                  <Title />
                  <Likes />
               </div>
               <Comments />
            </div>
         </div>
      </div>
   );
}

export default App;
