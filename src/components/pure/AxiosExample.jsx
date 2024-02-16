import React, {useState, useEffect} from 'react';
import getRandomUser from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     obtainUser()
    // }, []);
    
const obtainUser =()=>{
    getRandomUser().then((response) => {
        if (response.status === 200) {
            setUser(response.data.results[0])
            console.log(response)
        }

    }).catch((error) =>
        alert(`something went wrong: ${error}`))
}

    return (
        <div>
            <h1>Axios example</h1>
            {user != null ?
            (<p>
                <div>
                        <img src={user.picture.medium}/>
                        <h2>{user.name.title} ,{user.name.first},{user.name.last} , </h2>
                        <h3>{user.phone}</h3>
                </div>
            </p>):(
             null)
            }
            <div>
                <p>Generate new user</p>
                <button onClick={obtainUser}>Random user</button>
            </div>
        </div>
    );
}

export default AxiosExample;
