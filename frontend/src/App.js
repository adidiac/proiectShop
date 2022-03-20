
import './App.css';
import {Col,Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import BaraNavigatie from './BaraNavigatie';
import { useState } from 'react';
import ModalCos from './Pagini/ModalCos';
import ModalLogin from './Pagini/ModalLogin';
import PaginaAdmin from './PaginiAdmin/PaginaAdmin';
function App() {
  let user=useSelector(state=>state.userController.user);
  let page=useSelector(state=>state.pageController.page);
const [showCos,setShowCos]=useState(false);
const [showLogin,setShowLogin]=useState(false);

  const render=()=>
  {
    console.log(user);
    if(!user || user.role=="normal")
    {
      return <div className="App">
      <BaraNavigatie showCos={showCos} setShowCos={setShowCos} showLogin={showLogin} setShowLogin={setShowLogin}></BaraNavigatie>
      {page}
      <ModalCos show={showCos} setShow={setShowCos}></ModalCos>
      <ModalLogin show={showLogin} setShow={setShowLogin}></ModalLogin>
    </div>
    }
    else
    {
  
      return <PaginaAdmin></PaginaAdmin>
    }
    
  }
  return <>
    {render()}
    </>
}

export default App;
