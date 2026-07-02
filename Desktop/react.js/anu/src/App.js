import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
function App() {
   const [name, setName] = useState('');
   useEffect(() => {alert("Welcome Student!"); 
   }, []); 
   const [number, setNumber] = useState(1);
   const multipliedResult = useMemo(() => {
    return number * 2;
  }, [number]); 
   const [message, setMessage] = useState('');
   const showMessage1 = useCallback(() => {
    setMessage("Welcome Student! Keep Learning React.");
  }, []); 
    const showMessage2 = useCallback(() => {
    setMessage("Welcome to Advanced React Hooks Tutorial!");
  }, []); 
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: '#61dafb', marginBottom: '40px' }}>React Hooks Assignments</h1>
         <div style={{ marginBottom: '30px', width: '100%' }}>
          <h2>1. Student Name Display (useState Task)</h2>
          <input 
            type="text" 
            placeholder="Type your name here" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }}
          />
          {name && <h3 style={{ color: '#61dafb', marginTop: '10px' }}>Welcome {name}</h3>}
        </div>
          <hr style={{ width: '100%', borderColor: '#444', margin: '20px 0' }} />
           <div style={{ marginBottom: '30px', width: '100%' }}>
          <h2>2. Multiply Number by 2 (useMemo Task)</h2>
          <p style={{ fontSize: '18px' }}>Current Number: <strong>{number}</strong></p>
          <p style={{ fontSize: '18px' }}>Result (Number * 2): <strong style={{ color: '#61dafb' }}>{multipliedResult}</strong></p>
          <button 
            onClick={() => setNumber(number + 1)} 
            style={{ padding: '10px 20px', fontSize: '15px', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
          >
            Increase Number
          </button>
        </div>
         <hr style={{ width: '100%', borderColor: '#444', margin: '20px 0' }} />
         <div style={{ marginBottom: '30px', width: '100%' }}>
          <h2>3. Show Welcome Message (useCallback Task)</h2>
          <button 
            onClick={showMessage1} 
            style={{ padding: '10px 20px', fontSize: '15px', cursor: 'pointer', marginRight: '15px', borderRadius: '4px', border: '1px solid #61dafb', backgroundColor: 'transparent', color: '#61dafb' }}
          >
            Button 1
          </button>
          <button 
            onClick={showMessage2} 
            style={{ padding: '10px 20px', fontSize: '15px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #61dafb', backgroundColor: 'transparent', color: '#61dafb' }}
          >
            Button 2
          </button>
          {message && <h3 style={{ color: '#90ee90', marginTop: '20px' }}>{message}</h3>}
        </div>
      </header>
    </div>
  );
}

export default App;
