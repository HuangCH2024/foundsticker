import '../styles/global.css'
import React, {type JSX} from "react";

function CardGridContainer({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <article className="
            grid gap-16 px-16 w-full mx-auto

            grid-cols-1

            min-[760px]:grid-cols-2

            min-[1270px]:grid-cols-3

            min-[1440px]:grid-cols-4

            max-w-[1660px]:grid-cols-5
        ">
            {children}
        </article>
    )
}

export default CardGridContainer;