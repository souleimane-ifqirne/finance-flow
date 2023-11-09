import React, { useState } from 'react';
import './App.css';

import FinanceFlow from './component/FinanceFlow';

function App() {
  const [animate, setAnimate] = useState(false);
  const handleButtonClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setLaunch(true);
    }, 1000)
  };

  const [launch, setLaunch] = useState(false);
  return (
    <div className={`App ${animate ? ' animate' : ''} ${launch ? 'launch' : ''}`}>
      {launch ?
        <FinanceFlow />
        :
        <header className="App-header">
          <p className={`${animate ? 'active' : ''}`}>Finance Flow</p>
          {!animate &&
            <button onClick={handleButtonClick}>Lancer</button>
          }
        </header>
      }
    </div>
  );
}

export default App;
