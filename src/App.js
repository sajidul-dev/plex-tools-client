import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Home/Purchase';

function App() {
  return (
    <div className='font-[roboto]'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
