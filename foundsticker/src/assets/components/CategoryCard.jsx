
function CategoryCard({iconPath, iconAlt, titleName, handleFunction}) {

    return (
        <>
            <div className="generalBox select-none inline-block p-16" onClick={handleFunction}>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <img src={iconPath} alt={iconAlt} className="h40 w-40"/>
                    <span className="font-rem text-24 text-grey-darken-4">{titleName}</span>
                </div>
            </div>
        </>
    )
}

export default CategoryCard;
