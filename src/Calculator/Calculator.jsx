export default function Calculator(){
    
    return(
        <form className="calculator-form">
            <h2>Enter your details below</h2>
            <div className="calculator-radio">
                <div className="calculator-metric">
                    <input type="radio" name="metric" id="metric"/>
                    <label htmlFor="metric">Metric</label>
                </div>
                <div className="calculator-imperial">
                    <input type="radio" name="imperial" id="imperial"/>
                    <label htmlFor="imperial">Imperial</label>
                </div>
            </div>
            <div className="calculator-data-in">
                <div className="calculator-height">
                    <label htmlFor="height">Height</label>
                    <input type="number" name="height"/>
                </div>
                <div className="calculator-weight">
                    <label htmlFor="weight">Weight</label>
                    <input type="number" name="weight"/>
                </div>
            </div>
        </form>
    )
}