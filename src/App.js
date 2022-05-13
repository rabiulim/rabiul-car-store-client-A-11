
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageItem from './components/ManageItem/ManageItem';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Singup from './components/SignUp/SignUp';
import UpdateCar from './components/UpdateCar/UpdateCar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manage-item' element={<RequireAuth>
          <ManageItem />
        </RequireAuth>}></Route>
        <Route path='/add-items' element={<AddItems />}
        ></Route>
        <Route path='/add-items' element={<AddItems />}
        ></Route>
        <Route path='/car/:id' element={<UpdateCar></UpdateCar>}></Route>
        <Route path='/my-items' element={<RequireAuth>
          <MyItems />
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Singup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
