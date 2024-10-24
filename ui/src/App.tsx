import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-xl font-bold underline">Hello World </h1>
      <Link to='./Login'>Login</Link>
    </>
  );
}

export default App;
