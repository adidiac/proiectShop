import { Button, Modal,Row,Col,Container,Form } from "react-bootstrap"
import { useState,useEffect } from "react";
import axios from "axios";
export default function ModalUseri({setShow,show})
{
    const [useri,setUseri]=useState([{email:"email",numberOfProducts:0}]);
    const [modalBodyShow,setModalBodyShow]=useState("useri");
    const [email,setEmail]=useState("");
    const getUseri=()=>{
        axios.get("http://localhost:3000/users/").then(res=>{
            console.log(res.data);
            let users=[];
            res.data.map(us=>{
                users.push({email:us.email,numberOfProducts:us.orders.length});
            });
            setUseri(users);
        }
        ).catch(err=>{
            console.log(err);
        });
    }
    const updateUser=(email,newEmail)=>{
        axios.post("http://localhost:3000/users/updateEmail/",{email:email,newEmail:newEmail}).then(res=>{
            console.log(res.data);
            getUseri();
        }).catch(err=>{
            console.log(err);
        });

    }
    const deleteUser=(email)=>{
       
        axios.post("http://localhost:3000/users/deleteUser/",{email:email}).then(res=>{
            console.log(res.data);
            getUseri();
        }).catch(err=>{
            console.log(err);
        });
    }
    const createUser=(name,email,password,role)=>{
     
        axios.post("http://localhost:3000/users/createUser/",{name:name,email:email,password:password,role:role}).then(res=>{
            console.log(res.data);
            getUseri();
        }).catch(err=>{
            console.log(err);
        }
        );
    }
    const modalUpdateUser=()=>
    {
        return <Modal.Body>
        <Container>
        <Row>
        <Col>
        <h3>Update user</h3>
        <br></br>
        <Form onSubmit={(e)=>{
            e.preventDefault();
            let form=e.target;
            let newEmail=form[0].value;
            updateUser(email,newEmail);
            setModalBodyShow("useri");
        }}>
        <Form.Control type="email" placeholder="Enter email" />
        <br></br>
        <Button variant="primary" type="submit">
                Update
        </Button>
        </Form>
        </Col>
        </Row>
        </Container>
        </Modal.Body>
    }
    const modalCreateUser=()=>
    {
        return <Modal.Body>
        <Container>
        <Row>
        <Col>
        <h3>Create user</h3>
        <br></br>
        <Form onSubmit={(e)=>{
            e.preventDefault();
            let form=e.target;
            let name=form[0].value;
            let email=form[1].value;
            let password=form[2].value;
            let role=form[3].value;
            createUser(name,email,password,role);
            setModalBodyShow("useri");
        }}>
        <Form.Control type="text" placeholder="Enter name" />
        <br></br>
        <Form.Control type="email" placeholder="Enter email" />
        <br></br>
        <Form.Control type="password" placeholder="Password" />
        <br></br>
        {/*select dropdown a role*/}
        <Form.Control as="select">
            <option>normal</option>
            <option>admin</option>
        </Form.Control>
        <br></br>
        <Button variant="primary" type="submit">
                Create
        </Button>
        </Form>
        </Col>
        </Row>
        </Container>
        </Modal.Body>
    }
    const modalUseri=()=>
    {
        return <Modal.Body>
        {useri.map((user,idx)=>
        <Row key={idx} style={{margin:10,padding:10}}>
        <Col>
        <h8>{user.email}</h8>
        </Col>
        <Col>
        <p>{user.numberOfProducts} produse</p>
        </Col>
        <Col >
            <Button variant="primary" onClick={()=>{setEmail(user.email);
                setModalBodyShow("update");}}>Update</Button>
        </Col>
        <Col>
            <Button variant="primary" onClick={()=>{deleteUser(user.email);getUseri();}}>Delete</Button>
        </Col>
        </Row>
        )}
        </Modal.Body>
    }
    const modalBodyRender=()=>{
        if(modalBodyShow==="useri")
        {
            return modalUseri();
        }
        else if(modalBodyShow==="update")
        {
            return modalUpdateUser();
        }
        else if(modalBodyShow==="create")
        {
            return modalCreateUser();
        }
    
    }
    useEffect(()=>{
        getUseri();
    },[]);
    //list a display with users and delete,update or create a new user
    return <>
    <Modal style={{fontSize:10}} show={show} onHide={()=>{setShow(false)}}>
        <Modal.Header closeButton>
        <Modal.Title>Lista userilor</Modal.Title>
        </Modal.Header>
        {modalBodyRender()}
        <Modal.Footer>
        <Button onClick={()=>{setShow(false)}}>Close</Button>
        <Button onClick={()=>{setModalBodyShow("create");}}>Create</Button>
        </Modal.Footer>
    </Modal>
    </>
}