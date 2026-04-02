import  '../styles/global.css';

interface PillButtonProps{
    imgUrl: string;
    alt: string;
    onClick: ()=> void;
}

// 需要增添handleClick函数 后端写完再说

function PillButton({imgUrl,alt,onClick}: PillButtonProps):any{
    
    return(
        <>
            <button className={"pill-button"} onClick={onClick} >
                <img className={"h-16"} src={imgUrl} alt={alt}/>
            </button>
        </> 
    )
}

export default PillButton;