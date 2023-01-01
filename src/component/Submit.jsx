import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { chooseFirstName, chooseLastName, chooseEmail,
    choosePassword, chooseAge,chooseGender,
     choosePhoneNumber ,chooseAdress  } from '../redux/rootSlice';


 import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Button} from 'react-bootstrap'
     


const Submit = () => {
    const state = useSelector(state => state)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const myFuntion = () => {
        dispatch(chooseFirstName(""));
        dispatch(chooseLastName(""));
        dispatch(chooseEmail(""));
        dispatch(choosePassword(""));
        dispatch(chooseAge(""));
        dispatch(chooseGender(""));
        dispatch(choosePhoneNumber(""));
        dispatch(chooseAdress(""));
        navigate("/")
    }


    return (
        <Container className='box'>
            <pre className='text-center'>{JSON.stringify(state, null, 2)}</pre>

            <Container>
               
                <Button onClick={() => myFuntion()} style={{width:"40%"}}>Back to Homepage</Button>

            </Container >



        </Container>
    );
};

export default Submit;