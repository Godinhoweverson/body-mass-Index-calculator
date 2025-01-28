import { useState} from "react"
import Metric from "../Metric/Metric";
import Imperial from "../Imperial/Imperial";
import Result from "../Result/Result";
import BmiUiInitial from "../BmiUi/BmiUiInitial";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Calculator(){
   
    const [formDataImperial, setFormDataImperial] = useState({
        ft:'',
        in:'',
        st:'',
        lbs:''

    });
    const [formDataMetric, setFormDataMetric] = useState({
        cm:'',
        kg:'',
    });
    
    const [measurement, setMeasurement] = useState('metric');

    const size = useWindowSize();

    let updateState = measurement === "imperial" ? setFormDataImperial : setFormDataMetric;
     
    function handleRadioChange (e){
        setMeasurement(e.target.value);
        setFormDataImperial('');
        setFormDataMetric('');
    }

    function handleInput(event) {
        const { name, value } = event.target;
    
        updateState((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
      }
 
    return(
        <form 
        className="calculator-form" 
        style={{ 
          height:measurement === "metric" ? ( size.width < 440 ? "585px" : "420px") :  ( size.width < 440 ? "585px" : "500px"),
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
                        onChange={handleRadioChange}
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
                        onChange={handleRadioChange}
                        />
                    <label htmlFor="imperial" className="label-radio">Imperial</label>
                </div>
            </div>
            {measurement === "imperial" ? <Imperial value={formDataImperial} inputValue={handleInput}/> : <Metric value={formDataMetric} inputValue={handleInput}/>}
            <div className="calculator-results">
                <div className="result">
                    {measurement === 'metric' ? <Result metric={formDataMetric} active={measurement}/> : <Result imperial={formDataImperial}  active={measurement}/>}
                </div>
            </div>
        </form>
    )
}