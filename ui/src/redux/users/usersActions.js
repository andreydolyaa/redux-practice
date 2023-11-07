import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  DELETE_USER,
} from "./usersTypes";
import instance from "../../api";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const performDeleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    instance
      .get("/users")
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    instance
      .delete(`/delete/${userId}`)
      .then((res) => {
        dispatch(performDeleteUser(userId));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
