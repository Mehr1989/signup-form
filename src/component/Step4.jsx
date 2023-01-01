import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chooseAdress,choosePhoneNumber  } from "../redux/rootSlice";


import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Form, Button } from 'react-bootstrap'



const Step4 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const phoneNumber = useSelector(state => state.phoneNumber)
  const adress = useSelector(state => state.adress)

  const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: { phoneNumber, adress } });

  const onSubmit = (data) => {
    dispatch(choosePhoneNumber(data.phoneNumber))
    dispatch(chooseAdress(data.adress))
    navigate("./result")

  };
  return (
    <Container className="box">
     

      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>
          {errors.phoneNumber?.type === 'required' && <span>{errors.phoneNumber.message}</span>}
      
           {errors.adress?.type === 'required' && <span>{errors.adress.message}</span>}
        </Form.Label>
        <Container>
          <Form.Label style={{display:"inline",marginLeft:"9%"}}>
            <span>Phone:</span>
          </Form.Label>
          <Form.Control className='content' 
            type="number"
            placeholder="Phone number "
          
            {...register("phoneNumber", {
              required: {
                value: true,
                message: <h4>Phone number is Required</h4>
              }
            })}
          />
          
        </Container>
        <Container>
          <Form.Label style={{display:"inline",marginLeft:"9%"}}>
            <span>Adress:</span>
          </Form.Label>
          <Form.Control className='content' 
            type="text"
            placeholder="Adress"
        
            {...register("adress", {
              required: {
                value: true,
                message: <h4>Adress is Required</h4>
              }
            })}
          />
          
        </Container>


        <Container style={{marginLeft:"8%"}}>
        <Button onClick={() =>navigate("/step2/step3")} style={{width:"20%"}}>Back</Button>
        <Button style={{marginLeft:"2%",width:"20%"}}><input type="submit" value="Next" className="btn-next" /></Button>
         
        </Container>

        
      </Form>
    </Container>
  );
};

export default Step4;