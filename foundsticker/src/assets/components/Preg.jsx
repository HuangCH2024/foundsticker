import ChipRecommend from "./ChipRecommend.jsx";

function Preg({titleName, className = ""}) {
    return (
        // We wrap the original container in a flex layout to center the block itself
        <div className={`w-full flex justify-center ${className}`}>
             {/* We use inline styles to override the pl-24 (padding-left) pushing it off center */}
            <div className="pregContainer" style={{ paddingLeft: 0, textAlign: 'center' }}>
                {titleName}
            </div>
        </div>
    )
}

export default Preg;