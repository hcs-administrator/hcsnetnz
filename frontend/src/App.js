import './App.css';

import { Home } from './pages/Home'
import { StaffPhotos } from './pages/StaffPhotos'
import { Test } from './pages/Test';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/staffphotos" element={<StaffPhotos />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
