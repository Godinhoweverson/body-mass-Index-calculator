import { useState } from "react";
export default function BmiUi({metric,heightMetric, imperial, inchesImperial}){

    let maxWeightIdeal;
    let minWeightIdeal;
    let statusBmi;
    if(metric){
        if(metric > 18.5 && metric < 24.9){
            minWeightIdeal = (18.5 * (heightMetric * 2)) / 100;
            maxWeightIdeal = (24.9 * (heightMetric * 2)) / 100;
            minWeightIdeal.toFixed(2);
            maxWeightIdeal.toFixed(2);
            statusBmi = 'healthy weight';
        }else if(metric > 25 && metric < 29.9){
            minWeightIdeal = (25 * (heightMetric * 2)) / 100;
            maxWeightIdeal = (29.9 * (heightMetric * 2)) / 100;
            minWeightIdeal.toFixed(2);
            maxWeightIdeal.toFixed(2);
            statusBmi = 'overweight';
        }else if(metric > 30 && metric < 39.9){
            minWeightIdeal = (30 * (heightMetric * 2)) / 100;
            maxWeightIdeal = (39.9 * (heightMetric * 2)) / 100;
            minWeightIdeal.toFixed(2);
            maxWeightIdeal.toFixed(2);
            statusBmi = 'obese';
        }else if(metric > 40){
            maxWeightIdeal = (40 * (heightMetric * 2)) / 100;
            maxWeightIdeal.toFixed(2);
            statusBmi = 'severe obesity';
        }else{
            maxWeightIdeal = (17 * (heightMetric * 2)) / 100;
            maxWeightIdeal.toFixed(2);
            statusBmi = 'underweight';
        }
    }else{
        if(imperial > 18.5 && imperial < 24.9){
            minWeightIdeal = 18.5 * ((inchesImperial ** 2) / 703);
            maxWeightIdeal = 24.9 * ((inchesImperial ** 2) / 703);
            minWeightIdeal = parseFloat(minWeightIdeal.toFixed(2));
            maxWeightIdeal = parseFloat(maxWeightIdeal.toFixed(2));
            statusBmi = 'healthy weight';
        }else if(imperial > 25 && imperial < 29.9){
            minWeightIdeal = (25 * (heightMetric * 2)) / 100;
            maxWeightIdeal = (29.9 * (heightMetric * 2)) / 100;
            minWeightIdeal.toFixed(2);
            maxWeightIdeal.toFixed(2);
            statusBmi = 'overweight';
        }else if(imperial > 30 && imperial < 39.9){
            minWeightIdeal = (30 * (heightMetric * 2)) / 100;
            maxWeightIdeal = (39.9 * (heightMetric * 2)) / 100;
            minWeightIdeal.toFixed(2);
            maxWeightIdeal.toFixed(2);
            statusBmi = 'obese';
        }else if(imperial > 40){
            maxWeightIdeal = (40 * (heightMetric * 2)) / 100;
            maxWeightIdeal.toFixed(2);
            statusBmi = 'severe obesity';
        }else{
            maxWeightIdeal = (17 * (heightMetric * 2)) / 100;
            maxWeightIdeal.toFixed(2);
            statusBmi = 'underweight';
        }
    }
    return(
        <>
            <div className="bmi-result">
                <div className="bmi">
                    <p>Your BMI is...</p>
                    <h2>{metric ? metric : imperial}</h2>
                </div>
                <div className="bmi-suggest">
                    <p>Your BMI suggests you’re a {statusBmi}. Your ideal weight is between {metric && metric < 40 || imperial && imperial < 40
                    ? `${minWeightIdeal} Kgs - ${maxWeightIdeal} Kgs` 
                    : `${maxWeightIdeal} Kgs`}.</p>
                </div>
            </div> 
        </>
    )
}