import React, { useEffect} from 'react';
import './App.css';
import { useTelegram } from './hook/useTelegram';
import Header from './components/Header/header';


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
