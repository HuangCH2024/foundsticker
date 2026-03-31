import '../styles/global.css'
import PillChipSmall from "./PillChipSmall.tsx";
import RoundButton from "./RoundButton.tsx";

function Banner(): any {

    return (
        <>
            <div className={"banner-container"}>
                <section>
                    <h1 className={"banner-font text-orange-accent-4"}>QUALITY & FREE</h1>
                    <h1 className={"banner-font "}>Find Any Sticker In Seconds </h1>
                </section>
                <div className={"search-container"}>
                    <div className={"search-bar"}>
                        <input type={"text"} className={"search-bar-input"}></input>
                        <button className={" p-16 mr-8 rounded-32"}><img src={"/icons/search.svg"} alt={"search_icon"}/>
                        </button>
                        {/*上面这个button未来替换为mui*/}
                    </div>
                </div>
                <section className={"flex flex-row gap-16"}>
                    <h5 className={"search-recommend-pillChip"}>Try those tags :</h5>
                    <div className={"group-smallPillChip-container"}>
                         <PillChipSmall title={"This is a test"} alt={"test"} iconUrl={"/icons/close.svg"} onClick={()=>{console.log(2)}}></PillChipSmall>
                         <PillChipSmall title={"This is a test"} alt={"test"} iconUrl={"/icons/close.svg"} onClick={()=>{console.log(2)}}></PillChipSmall>
                         <PillChipSmall title={"This is a test"} alt={"test"} iconUrl={"/icons/close.svg"} onClick={()=>{console.log(2)}}></PillChipSmall>
                         <PillChipSmall title={"This is a test"} alt={"test"} iconUrl={"/icons/close.svg"} onClick={()=>{console.log(2)}}></PillChipSmall>
                         <RoundButton></RoundButton>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Banner;