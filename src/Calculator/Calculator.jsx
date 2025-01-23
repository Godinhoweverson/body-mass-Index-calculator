import { useState} from "react"
import Metric from "../Metric/Metric";
import Imperial from "../Imperial/Imperial";
import Result from "../Result/Result";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Calculator(){
   
    const [formDataImperial, setFormDataImperial] = useState({
        ft:'',
        in:'',
        st:'',
        ibs:''

    });
    const [formDataMetric, setFormDataMetric] = useState({
        cm:null,
        kg:null,
    });
    const [timer, setTimer] = useState(null);
    const [measurement, setMeasurement] = useState('metric');

    const size = useWindowSize();

    let updateState = measurement === "imperial" ? setFormDataImperial : setFormDataMetric;
     

    function hangleInput(event){
        const {name, value} = event.target
    
        updateState((prevInput) =>({
            ...prevInput,
            [name]: value
        }));
        clearTimeout(timer)
        const newTimer = setTimeout(() =>{
        },500)
        setTimer(newTimer)

    }
 
 
    console.log(formDataMetric)
   
    

    return(
        <form 
        className="calculator-form" 
        style={{ 
          height: measurement === "metric" ? "420px" : "500px",
          top: size.width > 1200 
            ? (measurement === "metric" ? "166px" : "210px") 
            : (size.width < 440  ? "-100px" : "-210px")
        }}
      >
            <h2 className="calculator-heading-two">Enter your details below</h2>
            <div className="calculator-radio">
                <div className="calculator-metric">
                    <input 
                        type="radio"
                        name="calculator-radio"
                        id="metric" 
                        value="metric"
                        checked={measurement === "metric"}
                        onChange={(e) =>setMeasurement(e.target.value)
                        }
                    />
                    <label htmlFor="metric" className="label-radio">Metric</label>
                </div>
                <div className="calculator-imperial">
                    <input 
                        type="radio"
                        name="calculator-radio"
                        id="imperial" 
                        value="imperial"
                        checked={measurement === "imperial"}
                        onChange={(e) =>setMeasurement(e.target.value)
                        }
                        />
                    <label htmlFor="imperial" className="label-radio">Imperial</label>
                </div>
            </div>
            {measurement === "imperial" ? <Imperial value={formDataImperial} inputValue={hangleInput}/> : <Metric value={formDataMetric} inputValue={hangleInput}/>}
            <div className="calculator-results">
                <div className="result">
                    <h3>Welcome!</h3>
                    <p>Enter your height and weight and you’ll see your BMI result here</p>
                    {measurement === 'metric' ? <Result metric={formDataMetric}/> : <Result imperial={formDataImperial} />}
                </div>
            </div>
        </form>
    )
}