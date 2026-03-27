import '/public/css/components_main.css';
import  SearchingBar from '/src/assets/components/Searchingbar.jsx'
import ChipRecommend from '/src/assets/components/ChipRecommend.jsx'
import ChipRecommendFreshButton from '/src/assets/components/ChipRecommendFreshButton.jsx'
import Preg from '/src/assets/components/Preg.jsx'
import GeneralContainer from "/src/assets/components/GeneralContainer.jsx";
import CategoryCardCard from "/src/assets/components/CategoryCard.jsx";
import BigCard from "/src/assets/components/BigCard.jsx";

function Banner() {


    const testImgPath = '/public/icons/test.png';
    return (
        <>
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
            <Preg titleName={"Trending Categories"}></Preg>
            <div className="flex flex-row gap-4 ml-24 mr-24">
                <GeneralContainer>
                    <CategoryCardCard titleName="This is a test" iconPath={testImgPath} iconAlt={"test"} />
                </GeneralContainer>
                <GeneralContainer>
                    <CategoryCardCard titleName="This is a test" iconPath={testImgPath} iconAlt={"test"} />
                </GeneralContainer>
            </div>
            <Preg titleName={"Popular Stickers"}></Preg>
            <div>
                <BigCard downloadNum={114312} fireNum={3} fireIconUrl={"/public/icons/rating_fire.png"} reviewNum={114} stickerTagText={"Stickers"} stickerNum={12} title={"This is a test"} imageUrl={"/public/imgs/test.png"} ratingStarNum={4.5}></BigCard>
            </div>
        </>
    )
}

export default Banner;