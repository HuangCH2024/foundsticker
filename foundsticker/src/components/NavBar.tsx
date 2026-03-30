import  '../styles/global.css'

function NavBar({left, right}: any){

    return(
        <>
            <div className="flex justify-between h-64 bg-red-300">
                <div  className="nav-content">{left}test</div>
                <div  className="nav-content">{right}</div>
            </div>
        </>
    )
}

export  default  NavBar;