import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={styles["App-header"]}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Yeaaaa
        </a>
      </header>
    </div>
  );
}

export default App;