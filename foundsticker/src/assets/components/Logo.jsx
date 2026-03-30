

function Logo({iconPath,logoName}){

    return (
        <>
            <img src={`${iconPath}`} alt="logo" className="navButton navLogoImage"/>
            <span className="navLogoText">{logoName}</span>
        </>
    )
}

export default Logo;