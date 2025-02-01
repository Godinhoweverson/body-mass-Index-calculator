import { SECTION_SECOND } from "../data"
import SectionSecondCore from "./SectionSecondCore"
export default function SectionSecond(){
    return(
        <section  className="box-sectionSecond">
            <div className="subBox-SectionSecond">
                {SECTION_SECOND.map((info) =>(
                    <SectionSecondCore key={info.id} {...info}/>
                ))}
            </div>
        </section>
    )
}
