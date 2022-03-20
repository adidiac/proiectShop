import {Col,Row,Container,Button,Modal,Form} from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import {useState,useEffect} from 'react';
import ModalComenzi from './ModalComenzi.';
import ModalUseri from './ModalUseri';
import { useDispatch } from 'react-redux';
export default function PaginaAdmin() {
    let dispatch=useDispatch();
    const [showComenzi,setShowComenzi]=useState(false);
    const [showUseri,setShowUseri]=useState(false);
    useEffect(()=>{
        console.log("pagina admin");
    },[]);
    //centrate on middle of the screen
    return <>
        <Button variant="primary" onClick={()=>{dispatch({type:"LOGOUT"})}} style={{margin:20}}>Log out</Button>
        <Container style={{textAlign:"center",position: 'absolute', left: '50%', top: '50%',overflow:"auto",
        transform: 'translate(-50%, -50%)',padding:20,backdropFilter:'blur(20px)', maxWidth:1000,maxHeight:1000,backgroundColor:'rgba(255, 255, 255, 0.2)',color:'white'}}>
        <Row>
            <h1>Pagina Admin</h1>
        </Row>
        <br></br>
        <Row>
        <Col>
        <Button variant="primary" style={{height:120,width:120,textAlign:"center"}} onClick={()=>{setShowComenzi(true)}}>
            <Row className="justify-content-md-center">
            <h5>Comenzi</h5>
            </Row>
            <br></br>
            <Row>
             <Icons.Basket size={30}/>
            </Row>
        </Button>
        </Col>
        <Col>
        <Button variant="primary" style={{height:120,width:120,textAlign:"center"}} onClick={()=>{setShowUseri(true)}}>
            <Row className="justify-content-md-center">
            <h5>Useri</h5>
            </Row>
            <br></br>
            <Row>
             <Icons.Person size={30}/>
            </Row>
        </Button>
        </Col>
        </Row>
        </Container>
        <ModalComenzi setShow={setShowComenzi} show={showComenzi}></ModalComenzi>
        <ModalUseri setShow={setShowUseri} show={showUseri}></ModalUseri>
    </>
}
