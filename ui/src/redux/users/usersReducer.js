import {
  DELETE_USER,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./usersTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    case DELETE_USER:
      const updatedUsers = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        users: updatedUsers,
      };
    default:
      return state;
  }
};

export default usersReducer;
