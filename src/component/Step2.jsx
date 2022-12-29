import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { chooseEmail,choosePassword  } from "../redux/rootSlice";


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
    <>

    <label className="label">
      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
      {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>

    <label className="label">
      {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label>


     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mx-auto form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
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
                        </div>

                          <span>Password:
       
                 <input  type={passwordShown ? "text" : "password"} placeholder={"password..."}
     
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
                   </span>

                   
               <input 
                 type="checkbox"
                 id="checkbox"
                 checked={passwordShown}
                 onChange={togglePassword}
              />
              <label htmlFor="checkbox">Show password </label>
                        
                                
                          



                        
                        <div className='flex justify-center'>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Next" />
                        </div>
                        
                       
                        <Link className="flex justify-center" to="/"><button class="mt-2 btn w-full max-w-xs text-white">Back</button></Link>
                        
                    </form>
      
    </>
  )
}
export default Step2;