import  '../styles/global.css'


function RoundButton():any{

    return(
        <>
            <button onClick={()=>console.log("refresh")} className={"roundButton-container"}>
                <img src="/icons/refresh.svg" alt="refresh_button" className={"roundedButton-icon"}/>
            </button>
        </>
    )
}

export default RoundButton;