import { combineReducers } from "redux";
import usersReducer from "./users/usersReducer";
// import more reducers...

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
