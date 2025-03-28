import React from 'react'
import { NavLink } from 'react-router-dom'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
});
 

// const {storeTokenInLS} = useAuth();



const userURL = "http://localhost:2000/api/auth/signup";

const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value

    setUser({
      ...user,
      [name]:value,
    });
  };    

  const navigate = useNavigate();

  
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
    const response = await fetch(userURL , {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(user),
    });
    
    // const res_data = await response.json();

    if(response.ok) {
        navigate("/login")
        toast.success("Signed up Succesfully!")
        setUser ({ username : "",email : "",password : "" });
        // storeTokenInLS(res_data.token);
    } else {
        toast.error("Registration Failed")
    }
  
  console.log(response)
} catch (error) {
    console.log(error)
}

}
  return (
    <div>
       <div className='mt-[6rem] w-[60%] m-auto'>
      
      <form action="" className='flex justify-center flex-col gap-4 ' 
      onSubmit={handleSubmit}
      >
      <h1 className='text-2xl md:text-4xl text-blue-600 '>Signup on Prodigy-InfoTech</h1>
      <label htmlFor="username">Username</label>
      <input placeholder='enter username' className='p-3 border rounded-md' 
        name="username"
        required 
        type="username"
        id='username'
        autoComplete='off'
        value={user.username}
        onChange={handleInput}
      
      />

      <label htmlFor="email">Email</label>
      <input type="email" placeholder='enter your email' className='p-3 border rounded-md'
       name="email"
       required 
       id='email'
       autoComplete='off'
       value={user.email}
       onChange={handleInput}
      />

      <label htmlFor="password">Password</label>
      <input placeholder='enter your password' className='p-3 border rounded-md' 
       name="password"
       type="password" 
       required 
       id='password'
       autoComplete='off'
       value={user.password}
       onChange={handleInput}
      />

      <button className='btn border p-2 bg-blue-500'>sign up</button>
      </form>

      <div className="logings flex content-center p-4">
      <p className=''>alraedy have an account? </p> 
      <NavLink to="/login" ><p className='underline'> login</p></NavLink>
      </div>

    </div>
    </div>
  )
}

export default Signup
