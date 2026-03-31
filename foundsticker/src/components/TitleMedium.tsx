import  '../styles/global.css'

interface titleName{
    name: string;
    onClick: ()=>void;
}

function TitleMedium({name}: titleName):any{

    return(
        <>
            <div className={"flex justify-center"}>
                <h2 className={"px-16 py-24 text-32 font-rem font-normal text-grey-darken-4 max-w-[1660px] min-w-[360px] w-full"}>{name}</h2>
            </div>
        </>
    )
}

export default TitleMedium;