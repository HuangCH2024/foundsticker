import React from 'react';
import Rating from '@mui/material/Rating'; // 导入 MUI Rating
import { styled } from '@mui/material/styles';

// 定义组件 Props 接口
interface StickerTag {
    emoji: string;
    name: string;
}

interface StickerCardProps {
    imageUrl: string;
    title: string;
    stickerCount: number | string;
    rating: number;
    totalReviews: string | number;
    tags?: StickerTag[];
}

// 如果需要微调星星颜色以匹配你的橙色高亮，可以使用 styled
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff9800', // 匹配你之前的橙色高亮
    },
    '& .MuiRating-iconHover': {
        color: '#ed6c02',
    },
});

const Test: React.FC<StickerCardProps> = ({
                                                     imageUrl,
                                                     title,
                                                     stickerCount,
                                                     rating,
                                                     totalReviews,
                                                     tags,
                                                 }) => {
    return (
        <div className="w-full bg-grey-lighten-5 rounded-2xl overflow-hidden shadow-sm border border-grey-lighten-4 hover:shadow-md transition-shadow duration-300">
            {/* Banner 图片 */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 内容区域 */}
            <div className="p-8 flex flex-col gap-2">
                {/* Title */}
                <h3 className="text-20 font-bold font-rem text-grey-darken-3 leading-tight line-clamp-1">
                    {title}
                </h3>

                {/* 变体：Chips/Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 ">
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1 px-2 py-1 border border-grey-lighten-2 rounded-full bg-white text-12 font-rem text-grey-darken-3"
                            >
                                <span>{tag.emoji}</span>
                                <span>{tag.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* 底部数据行 */}
                <div className="flex flex-row items-center justify-start gap-24">
                    {/* Sticker Count Badge */}
                    <div className="flex items-center gap-1.5">
            <span className="bg-gradient-to-tr from-yellow-darken-1 to-yellow-darken-3 text-white text-12 font-righteous px-[6px] rounded-md leading-tight">
              {stickerCount}
            </span>
                        <span className="font-rem text-16 text-grey-darken-2">Stickers</span>
                    </div>

                    {/* 分隔符 */}
                    <div className="h-16 w-[2px] rounded-16 bg-grey-lighten-1" />

                    {/* Rating Section - 已更改为 MUI Rating */}
                    <div className="flex items-center gap-2">
                        <StyledRating
                            value={Number(rating)}
                            readOnly
                            precision={0.5}
                            size="small" // 根据你的 16px 字体，small 或 medium 比较合适
                            sx={{
                                fontSize: '1.25rem', // 也可以直接在这里写死尺寸防止缩放干扰
                            }}
                        />
                        <span className="text-grey-darken-3 font-rem text-16 ml-1">{totalReviews}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;