
import factsData from './WitzigeNilsFakten.json';
import { useState, useEffect } from 'react';

function App() {

  const title = {
    marginTop: '0',
    paddingTop: '1em',
    fontSize: '3.5em'
}
const stiling = {
  fontFamily: 'Atrament',
  color: 'white',
  textAlign: 'center'
}
const position = {
  marginTop: '8em',
  textAlign: 'center',

}

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
    <div style={{...backgroundStyle,textAlign: 'center'}}>
      <div style={overlayStyle}>
      <h1 style={{...title, ...stiling}}>Witziger Nilsfakt</h1>
        <div style={{position}}>
          {facts ? (
            <div>
  <p style={{...stiling, 
        maxWidth: '30em !important',
        margin: '0 auto',
        fontSize: '4em',
        display : 'block',}}>
    {facts.inhalt}
  </p>
  <p style={{...stiling,
      maxWidth : '30em', 
      margin: '0 auto', 
      fontSize: '2em',
      fontWeight: 'bold'
    }}>
    {facts.author} {facts.datum}
  </p>
</div>

          ) : ("fdfs")
          }
        </div>
      </div>
    </div>
  );
}
export default App;
