import  '../styles/global.css'

interface CardMediumProps{
    iconUrl: string;
    title : string;
    Onclick: ()=> void;
}

function CardMedium({iconUrl,title}: CardMediumProps):any{

    return(
        <>
            <article className={"card-medium-container"}>
                <img src={iconUrl} alt={`${title}_icon`} className={"card-medium-icon"}/>
                <h4 className={"card-medium-title"}>{title}</h4>
            </article>
        </>
    )
}

export default CardMedium;