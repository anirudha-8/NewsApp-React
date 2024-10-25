import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [progress, setprogress] = useState(0);
  const [mode, setMode] = useState('dark');

  const apikey = process.env.REACT_APP_API_KEY;
  const country = 'us';
  const pageSize = 10;

  //theme changer
  function themeChanger() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1e1e2f';
      document.body.style.color = '#e4e4e7';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f4f4f9';
      document.body.style.color = '#333333';
    }
  }

  return (
    <>
      <Router>
        <Navbar themeChanger={themeChanger} mode={mode} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='general' pageSize={pageSize} />} />
          <Route path='/business' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='business' pageSize={pageSize} />} />
          <Route path='/entertainment' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='entertainment' pageSize={pageSize} />} />
          <Route path='/general' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='general' pageSize={pageSize} />} />
          <Route path='/health' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='health' pageSize={pageSize} />} />
          <Route path='/sports' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='sports' pageSize={pageSize} />} />
          <Route path='/science' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='science' pageSize={pageSize} />} />
          <Route path='/technology' element={<News mode={mode} apiKey={apikey} setprogress={setprogress} country={country} category='technology' pageSize={pageSize} />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
