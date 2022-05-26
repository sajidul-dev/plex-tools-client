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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AllTools from './Pages/AllTools/AllTools';
import AddReview from './Pages/Dashboard/AddReview';
import Portfolio from './Pages/Portfolio/Portfolio';
import Notfound from './Pages/Notfound/Notfound';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='font-[roboto]'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tools' element={<AllTools />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddAProduct /></RequireAdmin>}></Route>

        </Route>

        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
