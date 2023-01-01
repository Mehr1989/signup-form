import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { chooseFirstName,chooseLastName } from '../redux/rootSlice'


import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Form} from 'react-bootstrap'
import '../style/style.css'







const Step1 = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)

    const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: { firstName, lastName } });

    const onSubmit = (data) => {
        dispatch(chooseFirstName(data.firstName))
        dispatch(chooseLastName(data.lastName))
        navigate("./step2")
    }

    return (
        <Container className='box'>
       
         
          <Form onSubmit={handleSubmit(onSubmit)}>
               
           <Form.Label style={{padding:"2%"}}>
            {errors.firstName?.type === 'required' && <span>{errors.firstName.message}</span>}
            {errors.lastName?.type === 'required' && <span>{errors.lastName.message}</span>}
           </Form.Label>
      
            <Container>
                   <Form.Label style={{display:"inline",marginLeft:"9%"}}>
                        <span>First Name:</span>
                    </Form.Label>

                  
                    <Form.Control className='content' 
                        type="text"
                        placeholder="First Name..."
                        
                        {...register("firstName", {
                            required: {
                                value: true,
                                message: <h4>First Name is required!</h4>
                            }
                        })}
                    />

                   </Container>
                    

                    <Container>
                    <Form.Label  style={{display:"inline",marginLeft:"9%"}}>
                        <span>Last Name:</span>
                    </Form.Label>
                    <Form.Control  className='content' 
                        placeholder="Last Name..."
                
                        {...register("lastName", {
                            required: {
                                value: true,
                                message: <h4>Last Name is Required!</h4> 
                            }
                        })}
                    />
                  
                </Container>

                <Container>
                    <Button style={{marginLeft:"22%",width:"40%"}}>  <input type="submit" value="Next" className='btn-next'/></Button>
                  
                </Container>

            </Form>

        </Container>
    )
}
export default Step1;
