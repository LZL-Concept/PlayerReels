import { useState } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  const [count, setCount] = useState(0);
  
  return (
    <>
       <div><h1>404 Not Found</h1></div>
       <Link to="/">back to Home</Link>
    </>
  );
}

export default NotFound;
