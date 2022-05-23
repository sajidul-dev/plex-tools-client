import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
