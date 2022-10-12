import React from 'react';
import './App.css';
import  Search  from './components/Search';

function App() {
  return (
    <div className="App">
     <div className="container">
        <h1 className="title">Photo Search</h1>

        <Search />
      </div>
    </div>
  );
}

export default App;