import React, { useEffect} from 'react';
import './App.css';
const {onToggleButton, tg} = useTelegram();


function App() {

  useEffect(() => {
    tg.ready();
  })


  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
