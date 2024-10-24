import axios from 'axios';
import { useEffect, useState } from 'react';
import { getBackendUrl } from './util/api-helper';

function App() {
  const [text, setText] = useState<string>();

  useEffect(() => {
    axios.get(getBackendUrl()).then((rep) => setText(rep.data));
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold underline">Hello World </h1>
      <p>Backend Text: {text}</p>
    </>
  );
}

export default App;
