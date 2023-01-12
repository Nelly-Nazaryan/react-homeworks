import React from 'react'
import { withAppContext } from '../../AppContext'

function Users({ context }) {
    console.log(context, 'context');
    const {
        users
    } = context;
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

export default withAppContext(Users)