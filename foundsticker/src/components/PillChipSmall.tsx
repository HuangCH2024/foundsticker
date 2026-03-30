import  '../styles/global.css'

interface PillChip {
    title: string;
    alt: string;
    iconUrl : string;
    onClick: () => void;
}

function PillChipSmall({title,alt,iconUrl}:PillChip):any{

    return(
        <>
            <div className={"smallPillChip-container"}>
                <img className={"smallPillChip-icon"} src={iconUrl} alt={alt}/>
                <div className={"smallPillChip-title"}>{title}</div>
            </div>
        </>
    )
}

export default PillChipSmall;