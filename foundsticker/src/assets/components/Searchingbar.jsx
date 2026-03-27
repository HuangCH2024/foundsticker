import '/public/css/components_main.css';

function SearchingBar() {

    return (
        <div className="search-container">
            {/* 输入框 */}
            <input
                type="text"
                placeholder="Start your searching here"
                className="search-input-pill"
            />

            {/* 右侧图标 */}
            <div className="search-icon-wrapper">
                <svg
                    className="search-icon-svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    );
}

export default SearchingBar;