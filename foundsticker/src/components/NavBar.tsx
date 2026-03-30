import  '../styles/global.css'
import PillButton from "./PillButton.tsx";

function NavBar(){

    return(
        <>
            <nav className="flex justify-between h-64 bg-grey-lighten-4 px-16 border-b-2 border-grey-lighten-3">
                <div  className="nav-content">
                    <img src="/icons/logo_long.svg" alt="logo"/>
                </div>
                <div  className="nav-content">
                    <ul className="nav-list-container">
                        <li className="list-item"><a className={"list-item-content"}>Home</a></li>
                        <li className="list-item"><a className={"list-item-content"}>Trending</a></li>
                        <li className="group list-item">
                            <a className={"list-item-content"}>Categories</a>
                            <img className={"group-hover:rotate-180 list-item-content-select-icon"} src={'./icons/select-down.svg'} alt={"menu_select"}/>
                        </li>
                        <li>
                            <PillButton imgUrl={'/icons/upload.svg'} alt={"test"} onClick={()=>{console.log(1)}}></PillButton>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export  default  NavBar;