import React from "react";
import { deleteUser } from "../../redux";
import { useDispatch } from "react-redux";

export default function User({ user }) {
  const dispatch = useDispatch();
  const deleteUserPerm = (userId) => dispatch(deleteUser(userId));

  return (
    <div className="user">
      <div>
        {user.firstName} {user.lastName}
      </div>
      <button onClick={() => deleteUserPerm(user.id)}>delete</button>
    </div>
  );
}
