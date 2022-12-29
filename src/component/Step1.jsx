import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { chooseFirstName,chooseLastName } from '../redux/rootSlice'


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
        <div>
             
             
          <label className="label">
            {errors.firstName?.type === 'required' && <span>{errors.firstName.message}</span>}
          </label>

          <label className="label">
            {errors.lastName?.type === 'required' && <span>{errors.lastName.message}</span>}
          </label>


          <form onSubmit={handleSubmit(onSubmit)}>
                <div>

                    <label>
                        <span>First Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        
                        {...register("firstName", {
                            required: {
                                value: true,
                                message: <h4>First Name is Required</h4>
                            }
                        })}
                    />
                
                </div>
                <div>
                    <label>
                        <span>Last Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                
                        {...register("lastName", {
                            required: {
                                value: true,
                                message: <h4>Last Name is Required</h4> 
                            }
                        })}
                    />
                   
                </div>

                <div>
                    <input type="submit" value="Next" />
                </div>

            </form>

        </div>
    )
}
export default Step1;
