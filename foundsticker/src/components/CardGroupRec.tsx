import  '../styles/global.css'
import CardMedium from "./CardMedium.tsx";

function CardGroupRec():any{

    return(
        <>
            <div className={"flex flex-nowrap gap-16 mx-16 overflow-x-auto"}>
                <CardMedium iconUrl={"/imgs/placeholder.png"} title={"this is a test"} Onclick={()=>console.log("card-md")}/>
                <CardMedium iconUrl={"/imgs/placeholder.png"} title={"this is a test"} Onclick={()=>console.log("card-md")}/>
                <CardMedium iconUrl={"/imgs/placeholder.png"} title={"this is a test"} Onclick={()=>console.log("card-md")}/>
                <CardMedium iconUrl={"/imgs/placeholder.png"} title={"this is a test"} Onclick={()=>console.log("card-md")}/>
                <CardMedium iconUrl={"/imgs/placeholder.png"} title={"this is a test"} Onclick={()=>console.log("card-md")}/>
                <CardMedium iconUrl={"/imgs/placeholder.png"} title={"this is a test"} Onclick={()=>console.log("card-md")}/>
                <CardMedium iconUrl={"/imgs/placeholder.png"} title={"this is a test"} Onclick={()=>console.log("card-md")}/>
            </div>
        </>
    )
}

export default CardGroupRec;