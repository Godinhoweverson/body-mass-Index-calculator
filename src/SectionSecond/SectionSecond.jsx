import eating from '../assets/images/icon-eating.svg'
import exercise from '../assets/images/icon-exercise.svg'
import sleep from '../assets/images/icon-sleep.svg'
export default function SectionSecond(){
    return(
        <section  className="box-sectionSecond">
            <div className="subBox-SectionSecond">
                <div className="content-sectionSecond">
                    <img src={eating} alt="icon food"/>
                    <div className='indications'>
                        <h3>Healthy eating</h3>
                        <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
                    </div>
                </div>
                <div className="content-sectionSecond">
                <img src={exercise} alt="icon exercise"/>
                    <div className='indications'>
                        <h3>Regular exercise</h3>
                        <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
                    </div>
                </div>
                <div className="content-sectionSecond">
                    <img src={sleep} alt="icon sleep"/>
                    <div className='indications'>
                        <h3>Adequate sleep</h3>
                        <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}