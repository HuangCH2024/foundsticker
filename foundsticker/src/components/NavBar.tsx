import type { JSX } from "react";
import '../styles/global.css';
import PillButton from "./PillButton.tsx";
import MenuHover from "./MenuHover.tsx";

function NavBar(): JSX.Element {
    // 2. 定义传给 MenuHover 的数据对象
    const categoryData = [
        { label: 'Test', onClick: () => console.log('menuhover') },
        { label: 'Test with Very LOOOOOOOOG string', onClick: () => console.log('menuhover') },
        { label: 'okokokokokok', onClick: () => console.log('menuhover') },
    ];

    return (
        <nav className="flex justify-between items-center h-64 bg-grey-lighten-4 px-16 border-b-2 border-grey-lighten-3">
            <div className="nav-content">
                <img src="/icons/logo_long.svg" alt="logo"  />
            </div>

            <div className="nav-content h-full">
                <ul className="nav-list-container flex flex-row items-center  h-full">
                    <li className="list-item"><a className="list-item-content">Home</a></li>
                    <li className="list-item"><a className="list-item-content">Trending</a></li>
                    <li className="group relative px-16 flex items-center h-full cursor-pointer">
                        <a className="list-item-content flex items-center gap-4">
                            Categories
                        </a>
                        <img
                            className="transition-transform duration-300 group-hover:rotate-180 list-item-content-select-icon w-16"
                            src={'./icons/select-down.svg'}
                            alt="menu_select"
                        />
                        <div className="absolute top-[64px] right-0 hidden group-hover:block z-50 min-w-[160px] pt-4">
                            <div className={"min-w-max"}>
                                <MenuHover items={categoryData}/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <PillButton imgUrl={'/icons/upload.svg'} alt="upload" onClick={() => { console.log('upload') }} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;