import { useState, useEffect} from "react";
import BmiUiInitial from "../BmiUi/BmiUiInitial";
import BmiUi from "../BmiUi/BmiUi";

export default function Result({metric, imperial}){

  const [bmiMetric, setBmiMetric] = useState(null);
  const [bmiImperial, setBmiImperial] = useState(null);
  
  useEffect(() => {
    if(imperial){
      const pounds = ((Number(imperial.st) * 14) + Number(imperial.lbs));
      const inches = (Number(imperial.ft) * 12) + Number(imperial.in);
      if(pounds > 0 && inches > 0){
        const calculateBmi = (pounds * 703)/(inches ** 2)
        setBmiImperial(calculateBmi.toFixed(1));
        setBmiMetric(null);
      }else{
        setBmiImperial(null);
      }
    }else if(metric){
      let cm = metric.cm && !metric.cm.includes(".") ? metric.cm / 100 : metric.cm;
      let calculateBmi = metric.kg / (cm * cm);
      if(cm > 0 && metric.kg > 0){
        setBmiMetric(calculateBmi.toFixed(1));
        setBmiImperial(null);
      }else{
        setBmiMetric(null);
      }
     
    }},[metric, imperial]);

  return (
    
    <>
      {bmiMetric && <BmiUi metric={bmiMetric}/>}
      {bmiImperial && <BmiUi imperial={bmiImperial}/>}
      {!bmiMetric && !bmiImperial && <BmiUiInitial/>}
    </>
    
   )
}