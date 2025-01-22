export default function Imperial(){
    return(
        <div className="imperial-data-in">
            <label htmlFor="imperial-height">Height</label>
            <div className="imperial-height">
                <div className="imperial-input-container">
                {/* <input type="text" name="height" id="height" value={formData.height} onChange={hangleInput} /> */}
                    <input type="text" name="height" id="imperial-height"/>
                    <span className="unit">ft</span>
                </div>
                <div className="imperial-input-container">
                    <input type="text" name="height" id="imperial-height"/>
                    <span className="unit">in</span>
                </div> 
            </div>
            <label htmlFor="Weight">Weight</label>
            <div className="imperial-weight">
                <div className="imperial-input-container">
                    <input type="text" name="weight" id="imperial-weight"/>
                    <span className="unit">st</span>
                </div>
                <div className="imperial-input-container">
                    <input type="text" name="weight" id="imperial-weight"/>
                    <span className="unit">ibs</span>
                </div> 
            </div>
        </div>
    )
}

