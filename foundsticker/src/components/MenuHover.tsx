import type { JSX } from "react";
import '../styles/global.css';

// 1. 定义单个菜单项的接口
interface MenuItem {
    label: string;           // 菜单显示文字
    onClick: () => void;     // 点击时触发的函数
}

// 2. 定义组件 Props 接口
interface MenuHoverProps {
    items: MenuItem[];       // 菜单数组
}

function MenuHover({ items }: MenuHoverProps): JSX.Element {
    return (
        <ul className="flex flex-col bg-grey-lighten-5 py-[9px] rounded-16  menu-border border-grey-lighten-3 list-none min-w-[120px] shadow-lg">
            {items.map((item, index) => (
                <li
                    key={index}
                    onClick={item.onClick}
                    className="whitespace-nowrap truncate font-rem font-bold text-grey-darken-3 active:bg-grey-lighten-1 hover:bg-grey-lighten-2 px-16 py-8 cursor-pointer transition-colors "
                >
                    {item.label}
                </li>
            ))}
        </ul>
    );
}

export default MenuHover;