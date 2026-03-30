

function ChipRecommendFreshButton({handleOnclick}) {
    const iconPath = "/icons/";
    return (
        <button className="refresh-btn" onClick={handleOnclick} aria-label="Refresh">
            <img src={`${iconPath}refresh.svg`} alt="Refresh"/>
        </button>
    );
}

export default ChipRecommendFreshButton;