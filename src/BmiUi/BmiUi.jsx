export default function BmiUi({metric, imperial}){
    return(
        <>
            <div className="bmi">
                <p>Your BMI is...</p>
                <h2>{metric ? metric : imperial}</h2>
            </div>
        </>
    )
}