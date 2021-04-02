import { useState } from "react"
import {Link} from 'react-router-dom';
    //return <Redirect to="/home/" /> 

const Register=()=>{
    const[name,setName]=useState('');
    return(
        <div>
        <h1>To Do List</h1>
        <form className='add-form' >
        <div className='form-control'>
            <label>Please enter your name : </label>
            <input type='text' 
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter your name ' />
        </div>
        <Link onClick={(event) => (!name)?event.preventDefault() : null } to={`/home?name=${name}`}>
        <input type='submit' value='Submit' className='btn btn-block1' />
        </Link>
        </form>
        </div>
    )
}
export default Register

/*
*/