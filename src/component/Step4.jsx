import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chooseAdress,choosePhoneNumber  } from "../redux/rootSlice";



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
    <>
      <label>
          {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
       </label>

       <label>
           {errors.adress?.type === 'required' && <span className="label-text-alt text-red-500">{errors.adress.message}</span>}
        </label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span>Phone</span>
          </label>
          <input
            type="number"
            placeholder="Phone number "
          
            {...register("phoneNumber", {
              required: {
                value: true,
                message: <h4>Phone number is Required</h4>
              }
            })}
          />
          
        </div>
        <div>
          <label>
            <span>Adress</span>
          </label>
          <input
            type="text"
            placeholder="Adress"
        
            {...register("adress", {
              required: {
                value: true,
                message: <h4>Adress is Required</h4>
              }
            })}
          />
          
        </div>


        <div>
        <button onClick={() =>navigate("/step2/step3")}>Back</button>
         <input type="submit" value="Next" />
        </div>

        
      </form>
    </>
  );
};

export default Step4;