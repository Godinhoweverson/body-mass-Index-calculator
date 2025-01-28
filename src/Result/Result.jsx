import { useState, useEffect} from "react";
import BmiUiInitial from "../BmiUi/BmiUiInitial";
import BmiUi from "../BmiUi/BmiUi";

export default function Result({metric, imperial, active}){

  const [bmiMetric, setBmiMetric] = useState(null);
  const [bmiImperial, setBmiImperial] = useState(null);
  const [showInitial, setShowInitial] = useState(true);

  let inches;
  if(imperial){inches = (Number(imperial.ft) * 12) + Number(imperial.in)}
  useEffect(() => {
    if(active){
      setShowInitial(true);
      setBmiImperial(null);
      setBmiMetric(null);
    }
    if(imperial){
      const pounds = ((Number(imperial.st) * 14) + Number(imperial.lbs));
      if(pounds > 0 && inches > 0){
        const calculateBmi = (pounds * 703)/(inches ** 2)
        setShowInitial(false)
        setBmiImperial(calculateBmi.toFixed(1));

      
      }else{
        setBmiImperial(null);
      }
    }else if(metric){
      let cm = metric.cm && !metric.cm.includes(".") ? metric.cm / 100 : metric.cm;
      let calculateBmi = metric.kg / (cm * cm);
      if(cm > 0 && metric.kg > 0){
        setShowInitial(false)
        setBmiMetric(calculateBmi.toFixed(1));
       
      }else{
        setBmiMetric(null);
      }
    }},[metric, imperial]);
  return ( 
    <>
    {showInitial && <BmiUiInitial/>}
    {bmiMetric && <BmiUi metric={bmiMetric} heightMetric={metric.cm}/>}
    {bmiImperial && <BmiUi imperial={bmiImperial} inchesImperial={inches}/>}
    </>
    
   )
}