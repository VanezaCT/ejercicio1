
import { Password } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { getAllUsers, getAllPagedUsers, getUserDetails, login} from '../../services/fetchService';

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

    const authUser =  ()=>{
        login('eve.holt@reqres.in','cityslicka')
        .then((response) => {
            console.log('token', response.token);
           sessionStorage.setItem('token', response.token)

        }).catch((error) => {
            alert(`ocurrio un problema con el login : ${error}`)

        }).finally(() => {
            console.log('ended login users:');
        }
        )
    }
    
    return (
        <div>
        <button onClick={authUser}>Auth user</button>
            <h2> Users:</h2>
            {users.map((user, index) => (
                <p key={index} onClick={() => obtineUsersDetails(user.id)}>
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
                    ) : (<h6>Please click in the user</h6>)
                }
            </div>
        </div>
    );
}

export default FetchExample;
