import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';

function App() {
    return (
        <div className="app">
            {/* BEM class naming convention */}
            {/* header -> <Header /> */}
            <Header/> 
            <div className="app__page">
              {/* sidebar -> <Sidebar >  */}
              <Sidebar />
              {/* recommended videos ->  */}
              <RecommendedVideos/>
            </div>

        </div>
    );
}

export default App;
