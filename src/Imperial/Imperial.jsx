export default function Imperial({formDataImperial, inputValue}){
    return(
        <>
            <div className="imperial-data-in">
                <label htmlFor="imperial-height" className="imperial-label">Height</label>
                <div className="imperial-height">
                    <div className="imperial-input-container">
                        <input type="number" name="ft" id="imperial-height-ft" min='0' value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">ft</span>
                    </div>
                    <div className="imperial-input-container">
                        <input type="number" name="in" id="imperial-height-in" min='0' value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">in</span>
                    </div> 
                </div>
                <label htmlFor="Weight" className="imperial-label">Weight</label>
                <div className="imperial-weight">
                    <div className="imperial-input-container">
                        <input type="number" name="st" id="imperial-weight-st" min='0' value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">st</span>
                    </div>
                    <div className="imperial-input-container">
                        <input type="number" name="lbs" id="imperial-weight-ibs"  min='0' value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">lbs</span>
                    </div> 
                </div>
            </div>
        </>
    )
}

