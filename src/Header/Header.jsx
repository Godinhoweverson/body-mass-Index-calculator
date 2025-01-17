import headerLogo from '../assets/images/logo.svg'
import Calculator from '../Calculator/Calculator'
export default function Header(){
    return(
        <header>
            <div className="header-box-left">
                <img className="header-logo" src={headerLogo} alt="Header logo" />
                <div className="header-content">
                <h1>
                    Body Mass <br/>
                    Index Calculator
                </h1>
                <p>
                    Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </p>
                </div>
            </div>
            <div className="header-box-right">
                <Calculator/>
            </div>
        </header>
    )
}