import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user,setUser] = useState({});
    useEffect(()=>{
       const url = `http://localhost:5000/user/${id}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setUser(data))
    },[])
    const {name,email} = user;
    const handleUpdateUser = (event) =>{
        event.preventDefault();
        const name = event.target.name.value; 
        const email = event.target.email.value;
        const updatedUser = {name,email};
        // send data to the server 
        const url = `http://localhost:5000/user/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data,'success')
            alert('users added successfully !!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h2>userId: {id} </h2>
            <h3>User Name : {name} </h3>
            <h3>User email : {email} </h3>
            <form onSubmit={handleUpdateUser} className='p-5'>
                  <input className='p-2 m-2 rounded w-100' type="text" name='name' required placeholder='Name'/> 
                  <br />
                  <input className='p-2 m-2 rounded w-100' type="email"name='email'required placeholder='Email' /> <br />
                  <input type="submit"className='p-2 w-100 m-2 rounded' value="Update User" />
                </form>
        </div>
    );
};

export default UpdateUser;