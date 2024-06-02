import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Player />
      </div>
    </div>
  )
}

export default App;