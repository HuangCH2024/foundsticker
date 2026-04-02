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
        <nav>
            <ul className="flex flex-row flex-wrap gap-16 px-16">
                {data.map((item, index) => (
                    <li
                        // 在 map 循环中必须为每个顶级元素提供唯一的key 值
                        key={item.name + index}
                        className="active:shadow-sm active:bg-grey-lighten-3 link-button-border flex flex-row justify-center items-center gap-8 bg-grey-lighten-5 shadow-sm hover:shadow-md hover:bg-grey-lighten-4 rounded-16 transition-all cursor-pointer px-8"
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
                                alt={`${item.name} icon`}
                            />
                            <span className="font-rem text-20 text-grey-darken-4">
                                {item.webSideName}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default LinkButtonGroup;