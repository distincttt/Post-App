import { connect } from "react-redux";

import * as actions from "./redux/action.js";

function Likes(props) {
   return (
      <div className="button-controls">
         <button onClick={props.inc}>♥ {props.likes}</button>
         <button onClick={props.dec}>Dislike</button>
      </div>
   );
}

function mapStateToProps(state) {
   const { likesReducer } = state;
   return {
      likes: likesReducer.likes,
   };
}

export default connect(mapStateToProps, actions)(Likes);
