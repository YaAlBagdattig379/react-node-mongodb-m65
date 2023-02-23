import { Button } from 'bootstrap';
import React from 'react';
import './AddUser.css';

const AddUser = () => {
    const handleAddUser = (event) =>{
        event.preventDefault();
        const name = event.target.name.value; 
        const email = event.target.email.value;
        console.log(name,email) 
    }
    return (
        <div className='border'>
            <h2 className='text-center'>add user welcome</h2>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleAddUser} className='p-5'>
                  <input className='p-2' type="text"name='name' required placeholder='Name'/> 
                  <br />
                  <input className='p-2' type="email"name='email'required placeholder='Email' /> <br />
                  <Button></Button>
                  <input type="submit" value="Add User" />
                </form>
            </div>
            

        </div>
    );
};

export default AddUser;