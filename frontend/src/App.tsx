import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState(''); // State for the message from the API

  useEffect(() => {
    // Fetch the message from the Flask API
    const fetchMessage = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api');
        const data = await response.json();
        setMessage(data.message); // Set the fetched message
      } catch (error) {
        console.error('Error fetching the API:', error);
      }
    };

    fetchMessage();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      {/* Display the message from the API */}
      <h2>Message from Flask API:</h2>
      <p>{message || 'Loading...'}</p>
    </>
  );
}

export default App;
