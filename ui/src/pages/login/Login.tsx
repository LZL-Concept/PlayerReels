import { useState } from 'react';
import { Link } from 'react-router-dom';
import turtle from './assets/pc.jpg';
import { MdEmail } from "react-icons/md";
import Slider from 'react-slick'

function LoginPage() {

  const imagesGallery = ['https://images.unsplash.com/photo-1649296303096-38245976e01e?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ,'https://images.unsplash.com/photo-1655494744357-61aa7ad1abb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  const [image, setImage] = useState(0);

  const handleLogin = () =>{
    alert("login clicked")
  };

  const handleForgot = () =>{
    alert("Forgot Password clicked")
  };

  return (
    <>
      <div className='bg-bl flex justify-center items-center h-screen text-primary'>
        <div className='bg-blk-light w-[600px] h-[680px] p-6 shadow-xl rounded-3xl'>
          <h1 className="font-bold text-xl text-center mb-2">Welcome</h1>
          <hr className='mt-10'/>
          <div className='mt-5'>
            <form action="login" className="loginBox">
              <div>
                  
                  <label className='block mb-2'>Username <MdEmail className='inline-block'/></label>
                  <input type="text" required className='w-full h-14 outline-none border-b-2 bg-blk-light'/>
              </div>
              <div>
                  <label className='block mb-2'>Password</label>
                  <input type="password" required className='mb-2 w-full h-14 outline-none border-b-2 bg-blk-light'/>
              </div>
              <div className='mb-16'>
                <div>
                    <label><input type="checkbox"/> Remember me</label>
                </div>
                <button type='submit' onClick={handleLogin} className='mt-10 border rounded-4xl w-full h-14'>
                  Login
                </button>
              </div>
              <div className='flex'>
                <button type='submit' onClick={handleForgot}
                    className='border rounded-4xl w-full h-14 mb-4 mr-10'>Forgot Password?
                </button>
                <Link to='./Register' className='flex justify-center items-center border rounded-4xl w-full h-14'
                >Create Account</Link>
              </div>
              <p className='flex justify-center items-center mt-10'>terms and agreement</p>
            </form>
          </div>
        </div>
        <div className='ml-4'>
            <div>
              <img src='https://images.unsplash.com/photo-1655494744357-61aa7ad1abb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="turtle" 
              className='w-[680px] h-[680px] rounded-4xl object-cover backdrop-blur-lg'/>
            </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
