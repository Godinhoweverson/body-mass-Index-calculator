export default function Metric(){
    return(
        <div className="calculator-data-in">
            <div className="calculator-height">
                <label htmlFor="height">Height</label>
                <div className="input-container">
                    <input type="text" name="height" id="height"/>
                    <span className="unit">cm</span>
                </div>
            </div>
            <div className="calculator-weight">
                <label htmlFor="weight">Weight</label>
                <div className="input-container">
                    <input type="text" name="weight" id="weight"/>
                    <span className="unit">Kg</span>
                </div> 
            </div>
        </div>
    )
}


