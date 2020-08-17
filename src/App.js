import React from 'react';

import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app"> 
    { /* BEM class naming convention */ }

      <header className="App-header">
       
        <p>
          Ragin Google React App
        </p>
        {/* header -> <Header /> */}
        <Header/>
        {/* sidebar -> <Sidebar >  */}
        {/* recommended videos ->  */}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
