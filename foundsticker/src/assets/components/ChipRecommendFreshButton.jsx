import '/public/css/components_main.css';

function ChipRecommendFreshButton({handleOnclick}) {
    const iconPath = "/public/icons/";
    return (
        <button className="refresh-btn" onClick={handleOnclick} aria-label="Refresh">
            <img src={`${iconPath}refresh.svg`} alt="Refresh"/>
        </button>
    );
}

export default ChipRecommendFreshButton;