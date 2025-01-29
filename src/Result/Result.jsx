import { useState, useEffect} from "react";
import BmiUiInitial from "../BmiUi/BmiUiInitial";
import BmiUi from "../BmiUi/BmiUi";

export default function Result({metric, imperial, active}){

  const [bmiMetric, setBmiMetric] = useState(null);
  const [bmiImperial, setBmiImperial] = useState(null);
  const [showInitial, setShowInitial] = useState(true);

  let inches;
  let pounds;
  let cm;

  if(imperial){
    inches = (Number(imperial.ft) * 12) + Number(imperial.in)
    pounds = ((Number(imperial.st) * 14) + Number(imperial.lbs));
  }else if(metric){
    cm = metric.cm && !metric.cm.includes(".") ? metric.cm / 100 : metric.cm;
  };

  useEffect(() => {
    if(active){
      setShowInitial(true);
      setBmiImperial(null);
      setBmiMetric(null);
    }
    if(imperial){
     
      if(pounds > 0 && inches > 0){
        const calculateBmi = (pounds * 703)/(inches ** 2)
        setShowInitial(false)
        setBmiImperial(calculateBmi.toFixed(1));

      
      }else{
        setBmiImperial(null);
      }
    }else if(metric){
      console.log(cm)
      if(cm < 3.00 &&  metric.kg < 350){
        let calculateBmi = metric.kg / (cm * cm);
        if(cm > 0 && metric.kg > 0){
          setShowInitial(false)
          setBmiMetric(calculateBmi.toFixed(1));
         
        }else{
          setBmiMetric(null);
        }
      }else{
        alert("Height must be between 0 and 3.00 meters, and weight must not exceed 300 kg.")
      }
    }},[metric, imperial]);
  return ( 
    <>
    {showInitial && <BmiUiInitial/>}
    {bmiMetric && <BmiUi metric={bmiMetric} heightMetric={cm}/>}
    {bmiImperial && <BmiUi imperial={bmiImperial} inchesImperial={inches}/>}
    </>
    
   )
}