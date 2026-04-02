import type { JSX } from "react";
import '../styles/global.css';

// 1. 定义单个链接的数据结构
interface LinkItem {
    webIconUrl: string;
    webSideName: string;
    name: string;
    url?: string;
}

// 2. 定义组件接收的 Props 接口：包含一个 LinkItem 数组
interface LinkButtonGroupProps {
    data: LinkItem[];
}

function LinkButtonGroup({ data }: LinkButtonGroupProps): JSX.Element {
    return (
        <nav className={"flex flex-row flex-nowrap justify-between gap-16 px-16"}>
            <ul className="flex flex-row flex-nowrap gap-16 overflow-x-auto ">
                {data.map((item, index) => (
                    <li
                        // 在 map 循环中必须为每个顶级元素提供唯一的key 值
                        key={item.name + index}
                        className="link-button-container active:bg-grey-lighten-3 bg-grey-lighten-5 hover:bg-grey-lighten-4 "
                    >
                        <a
                            href={item.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-8 w-full h-full p-2"
                        >
                            <img
                                className="w-[20px] h-[20px] object-contain"
                                src={item.webIconUrl}
                                alt={`${item.name}_icon`}
                            />
                            <span className="font-rem text-16 text-grey-darken-4">
                                {item.webSideName}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <button className={"link-button-container flex  w-[480px] hover:bg-orange-accent-4 !border-orange-accent-4 active:bg-orange-darken-4 group"}>
                <div className={"flex flex-row justify-center  items-center gap-8 w-full h-full p-2"}>
                    <span className={"font-rem text-16 group-hover:text-white"}>CHECK FOR ALL STICKERS </span>
                    <img
                        className="w-[20px] h-[20px] object-contain"
                        src={'/icons/arrow_right_button.svg'}
                        alt={`ClickForMore_icon`}
                    />
                </div>
            </button>
        </nav>
    );
}

export default LinkButtonGroup;