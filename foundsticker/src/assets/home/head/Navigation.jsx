
import NavButton from './NavButton';
import Logo from '../../components/Logo.jsx';
import NavFunctionButton from "../../components/NavFunctionButton.jsx";

import { Link } from 'react-router-dom';


function Navigation() {

    const IconPath = "/icons/";


    return (
        <nav className="navBar flex justify-between items-center px-8 shadow-sm bg-white">
            {/* Logo 区域：点击回到首页 */}
            <Link to="/home" className="navLogoBox">
                <Logo iconPath={`${IconPath}logo.png`} logoName="FOUND STICKER"></Logo>
            </Link>

            {/* 导航菜单与功能区 */}
            <div className="flex items-center h-64">
                <div className="flex flex-row">
                    <NavButton name="Home" goto="Home" />
                    <NavButton name="Trending" goto="Trending" />
                </div>

                {/* 右侧功能区 */}
                <div className="flex items-center gap-4 hover:bg-grey-darken-2 h-64">
                    <NavFunctionButton iconPath={`${IconPath}upload.svg`} iconName="upload" HandleFunction={()=>{console.log("hi")}} />
                </div>
            </div>
        </nav>
    );
}
export default Navigation;