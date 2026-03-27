import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './assets/home/head/Navigation.jsx';
// 确保你已经导入了 Home 和 Trending 组件
import Home from './assets/home/Home.jsx';
import Trending from './assets/trending/Trending.jsx';


function App() {
    return (
        // 关键：必须用 BrowserRouter 包裹所有路由相关内容
        // <BrowserRouter>
        //     <Navigation />
        //     <Routes>
        //         <Route path="/Home" element={<Home />} />
        //         <Route path="/trending" element={<Trending />} />
        //     </Routes>
        // </BrowserRouter>

        <Home></Home>

    );
}

export default App;