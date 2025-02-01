export default function SectionSecondCore({imageIcon, name, heading, paragraph}){
    return(
            <div className="content-sectionSecond">
                <img src={imageIcon} alt={name} />
                <div className="indications">
                    <h3>{heading}</h3>
                    <p>{paragraph}</p>
                </div>
            </div>
    )
}
