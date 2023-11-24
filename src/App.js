import './App.css';
import factsData from './WitzigeNilsFakten.json';
import { useState, useEffect } from 'react';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('giphyb.gif')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  };
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    if (factsData.fakten && factsData.fakten.length > 0) {
      setFacts(factsData.fakten[1]);
    }
  }, []);

  return (
    <div className="App" style={backgroundStyle}>
      <div style={overlayStyle}>
        <h1 id='titel' className='stiling'>Witziger Nilsfakt</h1>
        <div class='position'>
          {facts ? (
            <div>
            <p class='stiling' id='quote'>
              {facts.inhalt}</p>
            <p class='stiling' id='citing'>
              {facts.author} {facts.datum}</p>
            </div>
          ) : ("fdfs")
          }
        </div>
      </div>
    </div>
  );
}
export default App;
