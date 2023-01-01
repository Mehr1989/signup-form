import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { chooseAge,chooseGender } from "../redux/rootSlice";
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Form, Button } from 'react-bootstrap'


const Step3 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const age = useSelector(state => state.age)
  const gender = useSelector(state => state.gender)

  const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: { age, gender } });

  const onSubmit = (data) => {
    dispatch(chooseAge(data.age))
    dispatch(chooseGender(data.gender))
    navigate("./step4")
  }

  return (
    <Container className="box">


     <Form.Label className="label">
         {errors.age?.type === 'required' && <span className="label-text-alt text-red-500">{errors.age.message}</span>}
      </Form.Label>


      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Form.Label style={{display:"inline",marginLeft:"9%"}}>
            <span>Age:</span>
          </Form.Label>
          <Form.Control className='content' 
            type="number"
            placeholder="Your age"
          
            {...register("age", {
              required: {
                value: true,
                message: <h4>Your age is Required</h4>
              }
            })}
          />
         
        </Container>
        <Container>
          <Form.Label htmlFor="gender"  style={{padding:"2%"}}>
            <span style={{marginRight:"1rem"}}>Gender:</span>
          </Form.Label>

          <select  id="gender" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
           
          </select>
        </Container >
        <Container style={{marginTop:"1rem",marginLeft:"7%"}} >
        <Button onClick={() =>navigate("/step2")} style={{width:"20%"}}>Back</Button>
        <Button style={{marginLeft:"2%",width:"20%"}}><input  type="submit" value="Next" className="btn-next"  /></Button>
          
        </Container>

        
      </Form>
    </Container>
  );
};

export default Step3;