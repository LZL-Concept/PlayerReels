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
    <div className='bg-primary flex justify-center items-center h-screen'>
      <div className='bg-fourth w-96 p-6 shadow-xl rounded-3xl'>
        <h1 className="text-xl text-center">PlayerReels</h1>
        <hr className='mt-5'/>
        <div className='mt-5'>
          <form action="login" className="loginBox">
            <div>
                <label className='block mb-2 '>Username</label>
                <input type="text" required/>
            </div>
            <div>
                <label className='block mb-2'>Password</label>
                <input type="text" required/>
                <span></span>
            </div>
            <div>
                <label><input type="checkbox"/> Remember me</label>
            </div>
            <button type='submit' onClick={handleLogin}>
                <span>Login</span>
            </button>
            <button type='submit' onClick={handleForgot}
              className=''>
                <span>Forgot Password?</span>
            </button>
            <hr/>
            <Link to='./Register'>Create Account</Link>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
