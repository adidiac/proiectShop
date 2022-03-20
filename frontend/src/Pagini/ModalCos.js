
import { Modal,Col,Row ,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export default function ModalCos({show,setShow,}) 
{
    let produse=useSelector(state=>state.produseController);
    let user=useSelector(state=>state.userController.user);
    const sendComanda=()=>{        
        let comanda={
            user:user,
            produse:produse
        }
        if(!user)
        {    alert("Please login first");
            return;
        }
        dispatch({type:"ADD_ORDER",payload:{id:Math.random(),products:comanda.produse,price:comanda.produse.reduce((acc,prod)=>acc+prod.price,0)}})
        let orderToSend={id:Math.random(),products:comanda.produse,price:comanda.produse.reduce((acc,prod)=>acc+prod.price,0)}
        axios.post("http://localhost:3000/users/addOrder",{email:user.email,order:orderToSend}).then(res=>{
            console.log(res.data);
            //dispatch({type:"ADD_ORDER",payload:res.data});
            }).catch(err=>{
                console.log(err);
            })
        setShow(false);
    }
    console.log(produse);
    const dispatch=useDispatch();
    return <>
    <Modal show={show} onHide={()=>{setShow(false)}}>
        <Modal.Header closeButton>
        <Modal.Title>Cosul tau</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            {produse.length>0?produse.map((produs,idx)=>
            <>
            <Row key={idx} style={{padding:10,margin:10}}>
            <Col>
            <img src={produs.picture} style={{width:50,height:50}}></img>
            </Col>
            <Col>
            <h7>{produs.name}</h7>
            </Col>
            <Col>
            <p>{produs.price} lei</p>
            </Col>
            <Col>
                <Button variant="primary" onClick={()=>{dispatch({type:"REMOVE_PRODUS",payload:{produs}})}}>Remove</Button>
            </Col>
            </Row>
            {idx<produse.length-1?<hr></hr>:<></>}
            </>
            ):<h7>Cosul tau de cumparaturi e gol</h7>}   
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={()=>{sendComanda()}}>Realizeaza comanda
        </Button>
        <Button onClick={()=>{setShow(false)}}>Close</Button>
        </Modal.Footer>
    </Modal>
    </>
}