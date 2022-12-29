import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { chooseAge,chooseGender } from "../redux/rootSlice";



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
    <>


     <label className="label">
         {errors.age?.type === 'required' && <span className="label-text-alt text-red-500">{errors.age.message}</span>}
      </label>


      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span>Age</span>
          </label>
          <input
            type="number"
            placeholder="Your age"
          
            {...register("age", {
              required: {
                value: true,
                message: <h4>Your age is Required</h4>
              }
            })}
          />
         
        </div>
        <div>
          <label htmlFor="gender" className="label">
            <span>Gender:</span>
          </label>

          <select  id="gender" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
           
          </select>
        </div>
        <div >
        <button onClick={() =>navigate("/step2")}>Back</button>
          <input  type="submit" value="Next" />
        </div>

        
      </form>
    </>
  );
};

export default Step3;