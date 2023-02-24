import React from 'react';
import './AddUser.css';

const AddUser = () => {
    const handleAddUser = (event) =>{
        event.preventDefault();
        const name = event.target.name.value; 
        const email = event.target.email.value;
        const user = {name,email};
        // send data to the server 
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data,'success')
        })
    }
    return (
        <div>
            <h2 className='text-center pt-3'>Please add user welcome</h2>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleAddUser} className='p-5'>
                  <input className='p-2 m-2 rounded w-100' type="text" name='name' required placeholder='Name'/> 
                  <br />
                  <input className='p-2 m-2 rounded w-100' type="email"name='email'required placeholder='Email' /> <br />
                  <input type="submit"className='p-2 w-100 m-2 rounded' value="Add User" />
                </form>
            </div>
            
        </div>
    );
};

export default AddUser;