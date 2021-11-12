import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
const App = () => {
    const [name ,  setName] = useLocalStorage("Name", "") 
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} type="text"/> 
    </div>
  );
};

export default App;