export default function Imperial({formDataImperial, inputValue}){
    return(
        <>
            <div className="imperial-data-in">
                <label htmlFor="imperial-height" className="imperial-label">Height</label>
                <div className="imperial-height">
                    <div className="imperial-input-container">
                    {/* <input type="text" name="height" id="height" value={formData.height} onChange={hangleInput} /> */}
                        <input type="text" name="ft" id="imperial-height-ft" value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">ft</span>
                    </div>
                    <div className="imperial-input-container">
                        <input type="text" name="in" id="imperial-height-in" value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">in</span>
                    </div> 
                </div>
                <label htmlFor="Weight" className="imperial-label">Weight</label>
                <div className="imperial-weight">
                    <div className="imperial-input-container">
                        <input type="text" name="st" id="imperial-weight-st" value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">st</span>
                    </div>
                    <div className="imperial-input-container">
                        <input type="text" name="ibs" id="imperial-weight-ibs" value={formDataImperial} onChange={inputValue}/>
                        <span className="unit">ibs</span>
                    </div> 
                </div>
            </div>
        </>
    )
}

