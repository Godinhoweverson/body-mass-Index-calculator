export default function SectionThirdCore({imageIcon, heading, paragraph, name}){
    return(
        <div className={name}>
            {name === "limitations" ?(
                <>
                    <h2>{heading}</h2>
                    <p>{paragraph}</p>
                </>   
                    ) : (name === "curver-SectionThird" ? (
                        <>
                        <img src={imageIcon} alt={name}/>
                        </>
                    ): (
                    <>
                        <img src={imageIcon} alt={name} />
                        <h2>{heading}</h2>
                        <p>{paragraph}</p>
                    </>
                    )
                    )
             } 
        </div>
    )
}