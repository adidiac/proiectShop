import {Modal,Form,Button,Col,Row,Container} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function ModalComenzi({setShow,show})
{
    const [comenzi,setComenzi]=useState([{email:"",pret:"",data:"",status:"pending",id:""}]);
    const getComenzi=()=>{
        //TODO: get comenzi
        axios.get("http://localhost:3000/users/getOrders/").then(res=>{
            console.log(res.data);
            let orders=[];
            res.data.map(user=>{
                user.orders.map(order=>{
                if(!order.status)
                    orders.push({email:user.email,pret:order.price,data:order.date,status:"pending",id:order._id});
                    else
                    orders.push({email:user.email,pret:order.price,data:order.date,status:order.status,id:order._id});
                });
            }); console.log(orders)   
            setComenzi(orders);
        }).catch(err=>{
            console.log(err);
        })
    }   
    const acceptaComanda=(id,email)=>
    {
        //TODO: accepta comanda
        axios.post("http://localhost:3000/users/acceptOrder/",{email:email,orderId:id}).then(res=>{
            console.log(res.data);
            getComenzi();
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getComenzi();
    },[]);
    return <>
    <Modal show={show} onHide={()=>{setShow(false)}}>
    <Modal.Header closeButton>
    <Modal.Title>Comenzi</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Container>
    {
        comenzi.map((comanda,index)=>
        <>
        <Row key={index} style={{margin:10,padding:10}}>
        <Col>
        <h7>{comanda.email}</h7>
        </Col>
        <Col>
        <p>{comanda.pret} lei</p>
        </Col>
        <Col>
        Id:{comanda.id}
        </Col>
        </Row>
        {index<comenzi.length-1?<hr></hr>:<></>}
        </>
        )
    }
    </Container>
    </Modal.Body>
    <Modal.Footer>
    <Button onClick={()=>{setShow(false)}}>Close</Button>
    </Modal.Footer>
    </Modal>
    </>

}