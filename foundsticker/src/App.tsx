import NavBar from "./components/NavBar.tsx";
import Banner from './components/Banner.tsx';
import TitleMedium from "./components/TitleMedium.tsx";
import CardGroupRec from "./components/CardGroupRec.tsx";
import Test from "./components/Test.tsx";
import './styles/global.css'

function App() {

    // Test area

    // 这份数据是用于测试AI生成的MD3 滚动容器的
    const stickerData = [
        { id: 1, title: '可爱小狗表情包', img: 'https://picsum.photos/id/237/400/300', stickerCount: 91, rating: 4.5, downloads: '34,312' },
        { id: 2, title: '风油精特效包', img: 'https://picsum.photos/id/200/400/300', stickerCount: 12, rating: 5.0, downloads: '12,880' },
        { id: 3, title: '复古像素风', img: 'https://picsum.photos/id/100/400/300', stickerCount: 45, rating: 4.2, downloads: '5,120' },
        { id: 4, title: '打工人语录', img: 'https://picsum.photos/id/300/400/300', stickerCount: 60, rating: 4.8, downloads: '89,000' },
        { id: 6, title: '深夜食堂', img: 'https://picsum.photos/id/400/400/300', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 7, title: '深夜食堂', img: 'https://picsum.photos/id/400/400/300', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 8, title: '深夜食堂', img: 'https://picsum.photos/id/400/400/300', stickerCount: 24, rating: 4.0, downloads: '2,300' },
        { id: 9, title: '深夜食堂', img: 'https://picsum.photos/id/400/400/300', stickerCount: 24, rating: 4.0, downloads: '2,300' },
    ];


    // Test area END

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
                </div>
            </div>
            <Test items={stickerData} visibleCount={3} />
        </>
    )
}

export default App
