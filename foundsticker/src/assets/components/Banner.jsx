import  SearchingBar from '/src/assets/components/Searchingbar.jsx'
import ChipRecommend from '/src/assets/components/ChipRecommend.jsx'
import ChipRecommendFreshButton from '/src/assets/components/ChipRecommendFreshButton.jsx'
import Preg from '/src/assets/components/Preg.jsx'
import GeneralContainer from "/src/assets/components/GeneralContainer.jsx";
import CategoryCardCard from "/src/assets/components/CategoryCard.jsx";
import BigCard from "/src/assets/components/BigCard.jsx";

function Banner() {

    const testImgPath = '/icons/test.png';
    return (
        <div className="w-full pb-12"> 
            
            <div className="bannerBox">
                <div className="flex flex-col items-center">
                    <span className="bannerBigTitlePrimary">QUALITY & FREE</span>
                    <span className="bannerBigTitleSecondery">Find Any Sticker In Seconds</span>
                    <SearchingBar/>
                    <div className="tagRecommendContainer">
                        <span className="font-rem">Try Those tags</span>
                        <ChipRecommend tagName={"test"} ></ChipRecommend>
                        <ChipRecommend tagName={"test"} ></ChipRecommend>
                        <ChipRecommend tagName={"test"} ></ChipRecommend>
                        <ChipRecommendFreshButton></ChipRecommendFreshButton>
                    </div>
                </div>
            </div>
            
            <Preg 
                titleName={"Trending Categories"} 
                className="!text-center !pl-0" 
            />
            
            <div className="flex flex-row justify-center gap-4 ml-24 mr-24">
                <GeneralContainer>
                    <CategoryCardCard titleName="This is a test" iconPath={testImgPath} iconAlt={"test"} />
                </GeneralContainer>
                <GeneralContainer>
                    <CategoryCardCard titleName="This is a test" iconPath={testImgPath} iconAlt={"test"} />
                </GeneralContainer>
            </div>
            
            <Preg 
                titleName={"Popular Stickers"} 
                className="!text-center !pl-0" 
            />
            
            <div className="flex flex-wrap justify-center gap-6 p-4">
                <BigCard 
                    title="Example Card 1" 
                    imageUrl="/imgs/test.png" 
                />

                <BigCard 
                    title="Example Card 2" 
                    imageUrl="/imgs/test.png" 
                /> 
            </div>
            
        </div>
    )
}

export default Banner;