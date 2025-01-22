import { useState} from "react"
import Metric from "../Metric/Metric";
import Imperial from "../Imperial/Imperial";
export default function Calculator(){
   
    const [formData, setFormData ] = useState({
        height:'',
        weight:''

    });

    const [timer, setTimer] = useState(null);

    function hangleInput(event){
        const {name, value} = event.target
        setFormData((prevInput) =>({
            ...prevInput,
            [name]: value
        }));

        clearTimeout(timer)
        const newTimer = setTimeout(() =>{
        },500)
        setTimer(newTimer)
    }

    return(
        <form className="calculator-form">
            <h2 className="calculator-heading-two">Enter your details below</h2>
            <div className="calculator-radio">
                <div className="calculator-metric">
                    <input type="radio" name="calculator-radio" id="metric" />
                    <label htmlFor="metric" className="label-radio">Metric</label>
                </div>
                <div className="calculator-imperial">
                    <input type="radio" name="calculator-radio" id="imperial" />
                    <label htmlFor="imperial" className="label-radio">Imperial</label>
                </div>
            </div>
            <Imperial/>
            <div className="calculator-results">
                <div className="result">
                    <h3>Welcome!</h3>
                    <p>Enter your height and weight and you’ll see your BMI result here</p>
                </div>
            </div>
        </form>
    )
}