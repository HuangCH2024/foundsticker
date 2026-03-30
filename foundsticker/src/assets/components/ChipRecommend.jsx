


function ChipRecommend({ tagName, tagPic, handleFunction }) {
    return (
        <div className="tag-chip-container" onClick={handleFunction}>
            <img src={tagPic} alt={tagName} className="tag-chip-icon" />
            <span className="tag-chip-text">{tagName}</span>
        </div>
    );
}

export default ChipRecommend;



