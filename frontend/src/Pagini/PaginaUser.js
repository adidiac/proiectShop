import { Container, Row,Col,Tab,Nav,Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import PaginaPrincipala from "./PaginaPrincipala";
export default function PaginaUser()
{
    const dispatch=useDispatch();
    const user=useSelector(state=>state.userController.user);
    return <>
            <Row style={{margin:10,paddingBottom:30,paddingTop:30}}>
            <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={3} style={{}}>
            <Row style={{color:"white"}}>
            <h3>Meniu</h3>
            </Row>
            <hr></hr>
            <Nav variant="pills" className="flex-column">
            <Nav.Item style={{margin:5}}>
            <Nav.Link eventKey="first">{user.name}</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin:5}}>
            <Nav.Link eventKey="second">Comenzi</Nav.Link>
            </Nav.Item>
            <Button variant="danger"  style={{margin:5}} onClick={()=>{
                dispatch({type:"LOGOUT"})
                dispatch({type:"SET_PAGE",payload:<PaginaPrincipala></PaginaPrincipala>})
            }} >
                Logout
            </Button>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content style={{color:"white"}}>
            <Tab.Pane eventKey="first" >
                <Col>
                    <Row style={{margin:10,textAlign:"start"}}>
                        <h2>Nume user: {user.name}</h2>
                    </Row>
                    <Row style={{margin:10,textAlign:"start"}}>
                        <h2>Email user: {user.email}</h2>
                    </Row>
                    <Row style={{margin:10,textAlign:"start"}}>
                        <h3>Total comenzi: {user.orders.length}</h3>
                    </Row>
                </Col>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <Row>
                    <h2>Comenzile tale:</h2>
                </Row>
                <hr></hr>
                {user.orders.map((order,index)=>{
                    return <Row key={index}>
                    <Col>
                        {index+1}.
                    </Col>
                    <Col>
                        Comanda Id: {order.id}
                    </Col>
                    <Col>
                        Numar Total Produse: {order.products.length}
                    </Col>
                    <Col>
                        Pret total: {order.price}
                    </Col>
                    </Row>  
                })}
            </Tab.Pane>
            </Tab.Content>
            </Col>
            </Row>
            </Tab.Container>
            </Col>
            </Row>
    </>
}