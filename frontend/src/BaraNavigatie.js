import {Navbar,Nav,Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PaginaUser from './Pagini/PaginaUser';
import PaginaPrincipala from './Pagini/PaginaPrincipala';
export default function BaraNavigatie({showCos,setShowCos,showLogin,setShowLogin}) {
  let user=useSelector(state=>state.userController.user);
  let dispatch=useDispatch();
  return <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Piese Auto</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={()=>{dispatch({type:"SET_PAGE",payload:<PaginaPrincipala></PaginaPrincipala>})}}>Magazin</Nav.Link>
      <Nav.Link onClick={(e)=>{
        setShowCos(true)}} >Cos</Nav.Link>
      <Nav.Link onClick={(e)=>{
        !user?
        setShowLogin(true):dispatch({type:'SET_PAGE',payload:<PaginaUser></PaginaUser>})}} > {!user?'Login':user.name}</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
} 