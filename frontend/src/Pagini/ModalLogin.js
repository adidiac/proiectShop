import {Modal,Container,Row,Col,Tab,Button,Nav, Form} from 'react-bootstrap';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
export default function ModalLogin({show,setShow})
{
    let dispatch=useDispatch();
    const sendLogin=(e)=>
    {
        e.preventDefault();
        let form=e.target;
        let email=form[0].value;
        let password=form[1].value;
        console.log(email,password);
        axios.post("http://localhost:3000/users/login/",{email,password}).then(res=>{
            console.log(res.data);
            dispatch({type:"LOGIN",payload:res.data});
            }).catch(err=>{
                console.log(err);
            })
        setShow(false);
    }
    const sendRegister=(e)=>
    {
        e.preventDefault();
        let form=e.target;
        let name=form[0].value;
        let email=form[1].value;
        let password=form[2].value;
        axios.post("http://localhost:3000/users/register/",{name,email,password}).then(res=>{
            console.log(res.data);
            dispatch({type:"LOGIN",payload:res.data});
            }).catch(err=>{
                console.log(err);
            })
        setShow(false);
    }
    return <>
    <Modal show={show} onHide={()=>{setShow(false)}}>
        <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
            <Row>
            <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
            <Nav.Item>
            <Nav.Link eventKey="first">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="second">Register</Nav.Link>
            </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="first">
            <h3>Login</h3>
            <br></br>
            <Form onSubmit={sendLogin}>
            <Form.Control type="email" placeholder="Enter email" />
            <br></br>
            <Form.Control type="password" placeholder="Password" />
            <br></br>
            <Button variant="primary" type="submit">
                    Login
            </Button>
            </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <h3>Register</h3>
            <br></br>
            <Form onSubmit={sendRegister}>
            <Form.Control type="text" placeholder="Enter Name" />
            <br></br>
            <Form.Control type="email" placeholder="Enter email" />
            <br></br>
            <Form.Control type="password" placeholder="Password" />
            <br></br>
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
            </Tab.Pane>
            </Tab.Content>
            </Col>
            </Row>
            </Tab.Container>
            </Col>
            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={()=>{setShow(false)}}>Close</Button>
        </Modal.Footer>
    </Modal>
    </>        
}