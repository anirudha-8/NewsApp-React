import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [progress, setprogress] = useState(15);

  const apikey = process.env.REACT_APP_API_KEY;
  const country = 'in';
  const pageSize = 0;

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='general' pageSize={pageSize} />} />
          <Route path='/business' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='business' pageSize={pageSize} />} />
          <Route path='/entertainment' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='entertainment' pageSize={pageSize} />} />
          <Route path='/general' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='general' pageSize={pageSize} />} />
          <Route path='/health' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='health' pageSize={pageSize} />} />
          <Route path='/sports' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='sports' pageSize={pageSize} />} />
          <Route path='/science' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='science' pageSize={pageSize} />} />
          <Route path='/technology' element={<News apiKey={apikey} setprogress={setprogress} country={country} category='technology' pageSize={pageSize} />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
