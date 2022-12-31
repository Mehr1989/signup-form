import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { chooseEmail,choosePassword  } from "../redux/rootSlice";


import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import { Container, Form} from 'react-bootstrap'



const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown((passwordShown) => !passwordShown);
  };

  const email = useSelector(state => state.email)
  const password = useSelector(state => state.password)

  const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: { email, password} });

  const onSubmit = (data) => {
    dispatch(chooseEmail(data.email))
    dispatch(choosePassword(data.password))
    navigate("./step3")
  }

  return (
    <Container className="box">
    
    <Form.Label  style={{padding:"2%"}}>
      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
      {errors.email?.type === 'pattern' && <span >{errors.email.message}</span>}
    
      {errors.password?.type === 'required' && <span >{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span >{errors.password.message}</span>}
    </Form.Label>


     <Form onSubmit={handleSubmit(onSubmit)}>
          <Container>
          <Form.Label style={{marginLeft:"4%"}} >
             <span>Email:</span>
          </Form.Label>
          <Form.Control   className="content"
              type="email"
              placeholder="Your Email"            
              {...register("email", {
                required: {
                value: true,
                message: <h4>Email is Required</h4>
              },
              pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: <h4>Provide a valid Email</h4>
                       }
                      })}
                    />
          </Container>
          <Container style={{marginRight:"4%"}}>

             <Form.Label>
             <span>Password:</span>
             </Form.Label>
                      
             <Form.Control  type={passwordShown ? "text" : "password"} placeholder={"password..."}
               style={{marginBottom:"0"}}
               className="content"
     
              {...register("password",{
               required:  {
               value:true,
               message: <h4>Password is required</h4>
                   },
               minLength: {
               value: 6,
               message: <h4>Must be 6 characters or longer</h4>
                }
                   })}
                   />
            <Container>
              <input 
                 type="checkbox"
                 id="checkbox"
                 checked={passwordShown}
                 onChange={togglePassword}
                />

                <Form.Label htmlFor="checkbox" style={{paddingLeft:"1rem"}} className="checkbox">Show password </Form.Label>

              </Container >
    
              </Container>
                                               
              <Container style={{marginLeft:"6%"}}>
                 <Button onClick={() =>navigate("/")}>Back</Button>
                 <Button style={{marginLeft:"1rem"}}><input  type="submit" value="Next" className="btn-next"/></Button>       
               </Container>  
                 </Form>
      
              </Container>
  )
}
export default Step2;