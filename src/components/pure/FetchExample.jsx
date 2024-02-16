
import React, { useState, useEffect } from 'react';
import { getAllUsers, getAllPagedUsers, getUserDetails } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState(2);
    const [totalUsers, setTotalUsers] = useState(12);
    const [userPerPage, setUserPerPage] = useState(6);
    const [selectedUser, setSelectUser] = useState({});


    useEffect(() => {
        obtainUsers()
    }, []);


    const obtainUsers = () => {
        getAllUsers().then((response) => {
            console.log('All users', response.data);
            setUsers(response.data)
            setPages(response.total_pages)
            setTotalUsers(response.total)
            setUserPerPage(response.per_page)

        }).catch((error) => {
            alert(`ocurrio un problema: ${error}`)

        }).finally(() => {
            console.log('ended obtaining users:');
            console.table(users)
        }
        )
    }

    const obtainPagesUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All pages users', response.data);
                setUsers(response.data)
                setTotalUsers(response.total)
                setUserPerPage(response.per_page)
                setPages(response.total_pages)


            }).catch((error) => {
                alert(`ocurrio un problema: ${error}`)

            }).finally(() => {
                console.log('ended obtaining users:');
                console.table(users)
            }
            )
    }

    const obtineUsersDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('All pages users', response.data);
                setSelectUser(response.data)

            }).catch((error) => {
                alert(`ocurrio un problema: ${error}`)

            }).finally(() => {
                console.log('ended obtaining users:');
                console.table(selectedUser)
            }
            )
    }

    return (
        <div>
            <h2> Users:</h2>
            {users.map((user, index) => (
                <p key={index} onClick={() => obtineUsersDetails(user.id)}>
                    {/* <img src={user.avatar} ></img>  */}
                    {user.first_name} {user.last_name}
                </p>
            ))}
            <p>Showing {userPerPage} users of {totalUsers}</p>
            <button onClick={() => obtainPagesUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagesUsers(2)}>
                2
            </button>
            <div>
                {selectedUser != null ?
                    (<div>
                            <h3>user details</h3>
                            <img src={selectedUser.avatar}></img>
                            <p>{selectedUser.first_name} {selectedUser.last_name}</p>
                            <p>{selectedUser.email}</p>
                        </div>
                ):<p>Please click in the user</p>
                }
            </div>
        </div>
    );
}

export default FetchExample;
