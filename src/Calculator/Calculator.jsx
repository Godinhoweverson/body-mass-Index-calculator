import { useState } from "react"

export default function Calculator(){
    const [formData, setFormData ] = useState({
        height:'',
        weight:''

    });

    function hangleInput(event){
        const {name, value} = event.target
        setFormData((prevInput) =>({
            ...prevInput,
            [name]: value
        }));
        console.log(formData)
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
            <div className="calculator-data-in">
                <div className="calculator-height">
                    <label htmlFor="height">Height</label>
                    <div className="input-container">
                        <input type="text" name="height" id="height" value={formData.height} onChange={hangleInput} />
                        <span className="unit">cm</span>
                    </div>
                </div>
                <div className="calculator-weight">
                    <label htmlFor="weight">Weight</label>
                    <div className="input-container">
                        <input type="text" name="weight" id="weight" value={formData.weight} onChange={hangleInput} />
                        <span className="unit">Kg</span>
                    </div> 
                </div>
            </div>
            <div className="calculator-results">
                <div className="result">
                    <h3>Welcome!</h3>
                    <p>Enter your height and weight and you’ll see your BMI result here</p>
                </div>
            </div>
        </form>
    )
}