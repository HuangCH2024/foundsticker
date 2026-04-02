import '../styles/global.css'
import React, {type JSX} from "react";

function CardGridContainer({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <article className="
            grid gap-16 px-16 w-full mx-auto
            /* 360-540: 1列 */
            grid-cols-1

            /* 540-1280: 2列 */
            min-[540px]:grid-cols-2

            /* 1280-1660: 3列 */
            min-[1280px]:grid-cols-3

            /* 1660-1920+: 4列 */
            min-[1660px]:grid-cols-4

            /* 限制最大宽度防止 1920 以上无限拉伸 */
            max-w-[1920px]
        ">
            {children}
        </article>
    )
}

export default CardGridContainer;