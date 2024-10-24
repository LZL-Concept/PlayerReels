import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = () =>{
    alert("login clicked")
  };

  const handleForgot = () =>{
    alert("Forgot Password clicked")
  };

  const handleCreate = () =>{
    alert("Create Account clicked")

  };
  return (
    <>
     <h1 className="text-xl font-bold underline">Login Page to PlayerReels</h1>
    <div className='flex justify-center content-center'>
      <form action="login" className="loginBox">
        <div>
            <input type="text" placeholder='Username' required/>
        </div>
        <div>
            <input type="text" placeholder='Password' required/>
        </div>
        <div>
            <label><input type="checkbox"/> Remember me</label>
        </div>
        <button type='submit' onClick={handleLogin}>
            <span>Login</span>
        </button>
        <button type='submit' onClick={handleForgot}>
            <span>Forgot Password?</span>
        </button>
        <hr/>
        <Link to='./Register'>Create Account</Link>
      </form>
    </div>
    </>
  );
}

export default LoginPage;
