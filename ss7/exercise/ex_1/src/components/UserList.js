import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USER_LIST, DELETE_USER } from '../redux/Types';

const UserList = () => {
    const users = useSelector(state => state.userList)
    const dispatch = useDispatch();
    const getUserList = () => {
        dispatch({
            type: GET_ALL_USER_LIST,
            payload: null
        })
    }

    const deleteUser = (id) => {
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    }

    return (
        <>
            <h1>User List</h1>
            <button onClick={() => getUserList()}>Get Users</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                    {users.map((user, index) => {
                        return (
                            <>
                                <tr key={`u_${index}`}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td><button onClick={() => deleteUser(`${user.id}`)}>Delete user</button></td>
                                </tr>
                            </>
                        )
                    })}
                </thead>
            </table>
        </>
    )
}

export default UserList;