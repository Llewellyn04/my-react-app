import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{
        backgroundColor: '#0078D4', // Microsoft blue
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          padding: '40px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: 'white',
            fontFamily: 'Segoe UI, sans-serif',
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}>
            Hi Erick Knoetze
          </h1>
          <p style={{
            color: 'white',
            fontFamily: 'Segoe UI, sans-serif',
            fontSize: '1.5rem',
            fontWeight: '400',
            margin: 0,
            opacity: '0.9'
          }}>
            This is hosted on Ubuntu server (NodeJS...React.js and more)
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
