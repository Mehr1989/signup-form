
import React from "react";
import { Routes,Route } from "react-router-dom";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3";
import Step4 from "./component/Step4";
import Result from "./component/Result";
import Submit from "./component/Submit";


import './App.css'


function App(){


  return(

    
    <div className="App">
      <h3 style={{padding:"2rem",fontWeight:"800"}}>Hello World</h3>
      <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step2/step3" element={<Step3 />} />
          <Route path="/step2/step3/step4" element={<Step4 />} />
          <Route path="/step2/step3/step4/result" element={<Result />} />
          <Route path="/step2/step3/step4/result/submit" element={<Submit />} />
      </Routes>
      
      
   
     
     
      
     
    </div>

  )
}
export default App