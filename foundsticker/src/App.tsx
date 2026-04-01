import NavBar from "./components/NavBar.tsx";
import Banner from './components/Banner.tsx';
import TitleMedium from "./components/TitleMedium.tsx";
import CardGroupRec from "./components/CardGroupRec.tsx";
import FlexibleScrollbar from "./components/FlexibleScrollbar.tsx";
import './styles/global.css'
import CardGridContainer from "./components/CardGridContainer.tsx";
import ButtonGroup from "./components/ButtonGroupBig.tsx"
import Test from "./components/Test.tsx"
import React from "react";



function App() {

    // FlexibleScrollbar testing data area

    // 这份数据是用于测试AI生成的MD3 滚动容器的
    const stickerData = [
        { id: 1, title: 'This is a test', img: '/imgs/placeholder', stickerCount: 91, rating: 4.5, downloads: '34,312', fireCount: 3},
        { id: 2, title: 'This is a test', img: '/imgs/placeholder', stickerCount: 12, rating: 5.0, downloads: '12,880' , fireCount: 5},
        { id: 3, title: 'Testing with looong string', img: '/imgs/placeholder', stickerCount: 45, rating: 4.2, downloads: '5,120' , fireCount: 2},
        { id: 4, title: 'ahahahha', img: '/imgs/placeholder', stickerCount: 60, rating: 4.8, downloads: '89,000' , fireCount: 3},
        { id: 6, title: 'Test', img: '/imgs/placeholder', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 7, title: 'Test', img: '/imgs/placeholder', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 8, title: 'Test', img: '/imgs/placeholder', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 9, title: 'Test', img: '/imgs/placeholder', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 10, title: 'Test', img: '/imgs/placeholder', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 11, title: 'Test', img: '/imgs/placeholder', stickerCount: 24, rating: 4.0, downloads: '2,300' },
    ];

    // FlexibleScrollbar testing data area END

    // Card data testing area

    const cardData: React.ReactNode =   <Test
        imageUrl="/imgs/placeholder.png"
        title="Sticker Package Title"
        stickerCount={91}
        rating={5}
        totalReviews="4,341"
        tags={[
            { emoji: '😀', name: 'Tag name' },
            { emoji: '😊', name: 'Tag name' }
        ]}
    />

    // Card data testing area END

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"max-w-[1920px] flex flex-col justify-center "}>
                    <Banner/>
                    <TitleMedium name={'Trending Categories'} onClick={() => console.log("title_1")}/>
                    <CardGroupRec></CardGroupRec>
                    <TitleMedium name={'Popular Stickers'} onClick={() => console.log("title_2")}/>
                    <FlexibleScrollbar items={stickerData} visibleCount={3}/>
                    <ButtonGroup/>
                    <CardGridContainer children={cardData}/>
                    <TitleMedium name={'More Websites for getting more stickers'} onClick={() => console.log("title_2")}/>
                </div>

                {/*This container for testing*/}
                <div>

                </div>
            </div>

        </>
    )
}

export default App
