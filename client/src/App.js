import React from 'react';
import PlayerData from './PlayerData';
import './App.css';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import PlayerCard from './PlayerCard';

function App() {
  return (
    <div className="App">
      <NavBar />

      <SearchForm />
            
      {/* <PlayerCard />   */}
         
      <PlayerData />      
        
     
       
    </div>
  )
}

export default App;
