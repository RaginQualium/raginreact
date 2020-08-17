import React from 'react';

import './App.css';
import Header from './Header';

function App() {
    return (
        <div className="app">
            {/* BEM class naming convention */}

            <header className="App-header">
                {/* header -> <Header /> */}
                <Header/> 
                {/* sidebar -> <Sidebar >  */}
                {/* recommended videos ->  */}
            </header>
        </div>
    );
}

export default App;
