import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login,Signup} from "./Routes.js";
import UploadFiles from "./pages/admin/UploadFiles.js";
import Navbar from "./components/admin/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/UploadFiles' element={<UploadFiles />} />
        <Route path='/Navbar' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import Signup from './components/Signup';
// import './App.css';

// function App() {
//   return (
//     <div >
//       <Signup />
//     </div>
//   );
// }

//export default App;
