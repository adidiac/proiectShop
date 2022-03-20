import {Col,Container,Row,Carousel} from 'react-bootstrap';
import Slide1 from './ImaginiCarusel/Slide1.png';
import Slide2 from './ImaginiCarusel/Slide2.png';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import Produs from '../Usefull/Produs';
import axios from 'axios';
export default function PaginaPrincipala() {

   const [produse,setProduse]=useState([{name:"Disc frana",price:"100",picture:''}]);
   const getAllProduse=()=>{
        axios.get("http://localhost:3000/products/").then(res=>{
            console.log(res.data);
            setProduse(res.data);
        }).catch(err=>{
            console.log(err);
        })
        
    }
    useEffect(()=>{
        getAllProduse();
    },[])
  return <>
        <Container>
        <Col>
            <Row className="justify-content-md-center">
            <h1 style={{color:"white",fontSize:70,margin:50}}>Produse piese auto</h1>
            
            </Row>
            <hr style={{color:"white",height:3,margin:20,width:"100%"}}></hr>
            <Row style={{border:""}}>
                {produse.map((produs,index)=>{
                    return <Produs price={produs.price} name={produs.name} picture={produs.image} details={produs.description}></Produs>
                })
            }
            </Row>
        </Col>
        </Container>
    </>
}
