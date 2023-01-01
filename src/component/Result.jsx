import React from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';

import '../style/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Button,Form,Table} from 'react-bootstrap'



const Result = () => {
  const state = useSelector(state => state)
  const navigate = useNavigate()

  const onSubmit = () => {

    navigate("./submit")

  };


  return (
    <>
    
      <Container className='container'>
      <header className='title'><h2>Review</h2></header>

    


      <Container className="box">

      <Container className='table' >

       <Table>
        <thead>
        <tr>
          <td>Name:</td>
        <th>{state.firstName}  {state.lastName}</th>
        </tr>
        <tr> 
      
          <td>Emaile: </td>
          <th>{state.email}</th>
        </tr>
        <tr> 
          <td>Password: </td>
          <th>{state.password}</th>
        </tr>
        <tr> 
          <td>Age: </td>
          <th>{state.age}</th>
        </tr>
        <td>Gender: </td>
        <th>{state.gender}</th>
       
        <tr>
          <td> Phone Number: </td>
          <th>{state.phoneNumber}</th>
        </tr>
        <tr> 
          <td>Address: </td>
          <th>{state.adress}</th>
        </tr>
       
        </thead>
    
      </Table>
         </Container>
         
          <Form onSubmit={(onSubmit)}>
            <Container style={{marginTop:"6%"}}>

          <Button onClick={() =>navigate("/step2/step3/step4")} style={{width:"20%"}}>Back</Button>
          <Button style={{marginLeft:"2%",width:"20%"}}> <input type="submit" value="Submit"  className="btn-next"  /></Button> 
            </Container>
         
           </Form>
          
        </Container>
        </Container>

     
    </>
  )
};

export default Result;