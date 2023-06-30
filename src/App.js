import './App.css';
import Profile from './components/Profile';
import { MyFriendList } from './components/MyFriendList';
import {Routes,Route} from'react-router-dom';
import { Home } from './components/home';
import {Navbar} from './components/Navbar.js';
import User from './components/User';
function App() {
  return (
    <>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path="/user/:id" element={<User/>}></Route>
      </Routes>
    </>
  );
}

export default App;
