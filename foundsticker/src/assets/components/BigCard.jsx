import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


function BigCard({
                     imageUrl,
                     title,
                     fireIconUrl,
                     fireNum,
                     stickerNum,
                     stickerTagText,
                     reviewNum,
                     ratingStarNum,
                     downloadNum
                 }) {
    return (
        <div className="sticker-card">
            {/* 1. 图片区域 */}
            <div className="sticker-card-image-box">
                <img src={imageUrl} alt={title} className="sticker-card-image"/>
            </div>

            {/* 2. 文本区域 */}
            <div className="sticker-card-body">
                {/* 第一行：标题和火 */}
                <div className="sticker-card-title-row">
                    <h3 className="sticker-card-title">{title}</h3>

                    {/* 这里实现：输入数字就展示对应数量的火 */}
                    <div className="sticker-card-fires">
                        {[...Array(fireNum || 0)].map((_, index) => (
                            <img
                                key={index}
                                src={fireIconUrl}
                                alt="fire"
                                className="sticker-card-fire-icon"
                            />
                        ))}
                    </div>
                </div>

                {/* 第二行：贴纸数、星星区域 */}
                <div className="sticker-card-meta-row">
                 {/* 贴纸数标签 */}
                    <div className="sticker-card-left">
                        <div className="sticker-card-tag">
                            <span className="sticker-card-tag-num">{stickerNum}</span>
                        </div>
                        <span className="sticker-card-tag-text">{stickerTagText}</span>

                        {/* 这里实现：星星那边还先空着 */}
                        <div className="sticker-card-stars">
                            {/* 你可以在这里填充五角星逻辑，例如用一个简单的 div 占位 */}
                            <div className="flex items-center">
                                <Rating
                                    name="read-only"
                                    value={ratingStarNum}         // 传入当前的评分数字
                                    precision={0.5}       // 设置精度为 0.5 星 (允许显示半星)
                                    readOnly              // 关键属性：设置为只读
                                    // 2. 自定义星星的颜色
                                    icon={<StarIcon fontSize="inherit" style={{ color: '#FAAF00' }} />} // 填充色 (金色)
                                    emptyIcon={<StarIcon fontSize="inherit" style={{ color: '#E0E0E0' }} />} // 空心色 (浅灰)
                                    // 3. 调整星星的大小 (small, medium, large)
                                    size="medium"
                                />
                            </div>
                        </div>
                        <span className="sticker-card-rating">{reviewNum}</span>
                    </div>
                    <div className="sticker-card-right">
                        <div className="sticker-card-downloads">
                           <img src="/icons/download.svg" alt="downloadedCount"/>
                            {downloadNum}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigCard;