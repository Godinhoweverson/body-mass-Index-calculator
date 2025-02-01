import {SECTION_THIRD}from "../data"
import SectionThirdCore from "./SectionThirdCore"

export default function SectionThird(){
    return(
        <>
            <section className="box-SectionThird">
                <div className="subBox-SectionThird">
                    {SECTION_THIRD.map((info) =>(
                        <SectionThirdCore key={info.id} {...info}/>
                    ))}
                </div>
            </section>
        </>
    )
}