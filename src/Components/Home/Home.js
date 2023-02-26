import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
          fetch('http://localhost:5000/user')
          .then(res =>res.json())
          .then(data =>setUsers(data))
    },[])
    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?')
        if(proceed){
            console.log('deleting user with ID',id)
            const url = (`http://localhost:5000/user/${id}`);
            fetch(url, {
                method: 'DELETE' 
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    console.log('data',data)
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }
    return (
        <div className='text-center'>
           <h1 >Users Available: {users.length}</h1>
           <ul>
            {
                users.map(user => <li 
                key={user._id}>{user.name}::{user.email}
                <Link to={`/update/${user._id}`}><button className='m-2'>Update</button></Link>
                <button onClick={()=>handleUserDelete(user._id)}>X</button>
                </li>)
            }
           </ul>
        </div>
    );
};

export default Home;