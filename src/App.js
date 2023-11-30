
import factsData from './WitzigeNilsFakten.json';
import { useState, useEffect } from 'react';

function App() {
  /** <---------- Functions ----------> */
  const [hover, setHover] = useState(false);
  const [facts, setFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };
  

  useEffect(() => {
    const currentDate = new Date();
    const dayOfYear = getDayOfYear(currentDate);
  
    // Vermeidung von undefined oder falsy factsData
    if (factsData && factsData.fakten) {
      const totalFacts = factsData.fakten.length;
      setCurrentFactIndex(dayOfYear % totalFacts);
    }
  }, []);
  

  /** <--------------- Styling ------------> */

const rotation = {
 transform: hover ? 'rotate(135deg)' : '',
 transition: `transform 0.9s ${hover ? '0.2s' : '0.9s'}`,
 position: 'absolute',
 top: '1.75em',
 left: '2.5em',
 zIndex: '100',
}
  const list = {
    position: 'absolute',
    top: '1.75em',
    left: '1em',
    listStyle: 'none'
  };
  const listItem = {
    opacity: hover ? '1' : '0',
    fontSize: '1.5em'

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
    <div style={{ ...backgroundStyle, textAlign: 'center', position: 'relative' }}>
      <div style={overlayStyle}>
        <img src='geoDreieck.png' style={{ ...rotation, height: '5em', width: '5em' }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} />
        <ul style={list}>
          <li style={{
            ...stiling, ...listItem,
            transition: `transform 0.9s ${hover ? '1.1s' : '0s'}, opacity 1s ${hover ? '1.1s' : '0s'}`,
            transform: `translateY(${hover ? '7' : '1.75'}em)`,
          }}>fdasfs</li>
          <li style={{
            ...stiling, ...listItem,
            transition: `transform 0.9s ${hover ? '1s' : '0.1s'}, opacity 1s ${hover ? '1s' : '0.1s'}`,
            transform: `translateY(${hover ? '7' : '1.75'}em)`,
          }}>fdas</li>
        </ul>
        <h1 style={{ ...title, ...stiling }}>Witziger Nilsfakt</h1>
<div style={{ position }}>
  {factsData && factsData.fakten ? (
    <div>
      <p style={{ ...stiling, width: '15em', margin: '0 auto', paddingTop: '1em', fontSize: '4em', display: 'block' }}>
        {factsData.fakten[currentFactIndex].inhalt}
      </p>
      <p style={{ ...stiling, maxWidth: '30em', margin: '0 auto', fontSize: '2em', fontWeight: 'bold' }}>
        {`${factsData.fakten[currentFactIndex].author} ${factsData.fakten[currentFactIndex].datum}`}
      </p>
    </div>
  ) : ("Loading...")}
</div>

      </div>
    </div>
  );
}
export default App;
