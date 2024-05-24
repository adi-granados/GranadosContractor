import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Granados General Contractor</h1>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;