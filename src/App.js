import React from 'react';
import './App.css';
import aboutMePhoto from './assets/images/about-me.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-item">About me</div>
        <div className="nav-item">Articles</div>
        <div className="nav-item">Projects</div>
      </header>
      <div className="container">
        <div className="page about-me">
          <div className="page-title">
            <div className="page-title-text">
              <h1>{"Hannah Redler"}</h1>
              <h2>{"Software Engineer"}</h2>
            </div>
            <div className="page-title-image">
              <img src={aboutMePhoto} height="200"/>
            </div>
          </div>
          <div className="page-body">
            <p>{ "Experience in frontend and backend, agile methodologies and startup environments. Lover of finding simple solutions to complex problems." }</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
