import { FcCheckmark } from "react-icons/fc";
import { MouseEventHandler } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function RegisterPage() {
  const usernameInput = document.querySelector('username')
  const passwordInput = document.querySelector('password')
  const confirmInput = document.querySelector('confirm')

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-bl'>
      <div className='bg-primary rounded h-auto w-128 text-center' >
        <h1 className="text-xl font-bold underline mb-10">Register Page</h1>
        <div>
          <input type="text" id='username' required placeholder='Username' 
            className='mr-4 mb-5 border rounded inline-block w-64 h-10' />
            <FcCheckmark className="inline-block"/>
          <input type="text" id='password' required placeholder='Create Password' 
            className='mb-5 border rounded  inline-block w-64 h-10'/>
            <MdOutlineRemoveRedEye className="inline-block"/>
            <FcCheckmark className="inline-block"/>

          <input type="text" id='confirm' required placeholder='Enter Password Again' 
            className='mb-5 border rounded  inline-block w-64 h-10'/>
            <MdOutlineRemoveRedEye className="inline-block"/>
            <FcCheckmark className="inline-block"/>
        </div>
          <h3>Password must contain the following:</h3>
              <ol id="message" className='inline-block'>
                  <li id="letter" className="m-5">1.  A <b>lowercase</b> letter (a..z)</li>
                  <li id="capital" className="m-5">2. A <b>capital (uppercase)</b> letter (A..Z)</li>
                  <li id="number" className="m-5">3. A <b>number</b> (0..9)</li>
                  <li id="length" className="m-5">4. Minimum <b>8 characters</b></li>
              </ol>
      </div>
    </div>
    </>
  );
}

export default RegisterPage;
