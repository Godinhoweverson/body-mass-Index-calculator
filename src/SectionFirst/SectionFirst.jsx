import manEating from '../assets/images/image-man-eating.webp'
import curvedLine from '../assets/images/pattern-curved-line-left.svg'
export default function(){

    return(
        <>
        <section className="box-sectionFirst">
            <img className="curved-line" src={curvedLine} alt="Curved line" />
            <div className="img-sectionFirst">
                <img src={manEating} alt="Man Eating" />
            </div>
            <div className="content-sectionFirst">
                <h2>What your BMI result means</h2>
                <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
            </div>
        </section>
        </>
    )
}