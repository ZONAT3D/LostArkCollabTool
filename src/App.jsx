import { Tabs, Tab } from '@mui/material';
import Header from './Components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Nishi from './Components/Nishi.jsx';
import Mizu from './Components/Mizu.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nishi" element={<Nishi />} />
        <Route path="/mizu" element={<Mizu />} />
      </Routes>
    </>
  );
}


export default App;