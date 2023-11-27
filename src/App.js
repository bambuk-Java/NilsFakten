
import factsData from './WitzigeNilsFakten.json';
import { useState, useEffect } from 'react';

function App() {
    /** <---------- Functions ----------> */
    const [hover, setHover] = useState(false);

    const [facts, setFacts] = useState([]);
    useEffect(() => {
      if (factsData.fakten && factsData.fakten.length > 0) {
        setFacts(factsData.fakten[2]);
      }
    }, []);
    
    /** <--------------- Styling ------------> */

  const rotation = {
    transform: hover ? 'rotate(135deg)' : '',
    transition: 'transform 0.5s ease-in-out',
    position: 'absolute',
    top: '1.75em',
    left: '2.5em',
    zIndex : '100',
  }
  const list = {
    position: 'absolute',
    top: '1.75em',
    left: '1em',
    listStyle: 'none'
  };
const listItem = {
  opacity: hover ? '1' : '0',
  transition: `transform 0.9s ${hover ? '0.5s' : '0s'}, opacity 0.3s ${hover ? '0.5s' : '0s'}`,
  transform: `translateY(${hover ? '7' : '1.75'}em)`,
  }
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
  marginTop: '10em',
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


  return (
    <div style={{...backgroundStyle,textAlign: 'center',position: 'relative'}}>
      <div style={overlayStyle}>
        <img src='geoDreieck.png' style={{...rotation, height: '5em', width : '5em'}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}/>
        <ul style={ list}>
          <li style={listItem}>fdasfs</li>
          <li style={listItem}>fdas</li>
        </ul>
      <h1 style={{...title, ...stiling}}>Witziger Nilsfakt</h1>
        <div style={{position}}>
          {facts ? (
            <div>
  <p style={{...stiling, 
        width: '15em ',
        margin: '0 auto',
        paddingTop:'1em',
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
