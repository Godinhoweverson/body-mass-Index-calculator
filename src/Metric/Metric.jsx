export default function Metric({formDataMetric,inputValue}){
    return(
            <>
                <div className="calculator-data-in">
                    <div className="calculator-height">
                        <label htmlFor="height">Height</label>
                        <div className="input-container">
                            <input type="number" name="cm" id="cm" min="0" step="0.1" value={formDataMetric} onChange={inputValue}/>
                            <span className="unit">cm</span>
                        </div>
                    </div>
                    <div className="calculator-weight">
                        <label htmlFor="weight">Weight</label>
                        <div className="input-container">
                            <input type="number" name="kg" id="kg" min="0" value={formDataMetric} onChange={inputValue}/>
                            <span className="unit">Kg</span>
                        </div> 
                    </div>
                </div>
            </>
    )
}


