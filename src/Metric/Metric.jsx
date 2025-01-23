export default function Metric({formDataMetric,inputValue}){
    return(
            <>
                <div className="calculator-data-in">
                    <div className="calculator-height">
                        <label htmlFor="height">Height</label>
                        <div className="input-container">
                            <input type="text" name="cm" id="cm" value={formDataMetric} onChange={inputValue}/>
                            <span className="unit">cm</span>
                        </div>
                    </div>
                    <div className="calculator-weight">
                        <label htmlFor="weight">Weight</label>
                        <div className="input-container">
                            <input type="text" name="kg" id="kg" value={formDataMetric} onChange={inputValue}/>
                            <span className="unit">Kg</span>
                        </div> 
                    </div>
                </div>
            </>
    )
}


