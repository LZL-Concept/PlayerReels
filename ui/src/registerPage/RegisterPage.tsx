import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './register.css';
import { Link } from 'react-router-dom';


function RegisterPage() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  return (
    <>
     <h1 className="text-xl font-bold underline">Register Page</h1>
    <div className='flex justify-center content-center'>
      

    <h3>Password must contain the following:</h3>
        <ol id="message" className='list-decimal'>
            <li id="letter" className="m-5">A <b>lowercase</b> letter</li>
            <li id="capital" className="m-5">A <b>capital (uppercase)</b> letter</li>
            <li id="number" className="m-5">A <b>number</b></li>
            <li id="length" className="m-5">Minimum <b>8 characters</b></li>
        </ol>
    </div>
    </>
  );
}

export default RegisterPage;
