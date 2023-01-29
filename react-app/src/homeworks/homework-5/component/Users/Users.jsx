import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { getUsers } from '../../api';
import { ACTIONS } from '../../store/actions';

function Users() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch()

    const setUsers = users => dispatch({ type: ACTIONS.SET_USERS, payload: { users } })

    const getUsersHandler = async () => {
        const data = await getUsers();

        setUsers(data?.data?.map(user => user?.data));
    }

    useEffect(() => {
        getUsersHandler();
    }, [])


    return (
        <div>
            <table>
                <tbody>
                    {
                        users.map(({
                            firstName,
                            lastName,
                            age,
                            gender,
                            phone,
                            email,
                            date,
                            position,
                        }) => (
                            <tr>
                                <td>
                                    {firstName ?? 'N/A'}
                                </td>
                                <td>
                                    {lastName ?? 'N/A'}
                                </td>
                                <td>
                                    {age ?? 'N/A'}
                                </td>
                                <td>
                                    {gender ?? 'N/A'}
                                </td>
                                <td>
                                    {phone ?? 'N/A'}
                                </td>
                                <td>
                                    {email ?? 'N/A'}
                                </td>
                                <td>
                                    {date ?? 'N/A'}
                                </td>
                                <td>
                                    {position ?? 'N/A'}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;