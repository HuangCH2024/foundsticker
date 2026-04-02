import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Rating from '@mui/material/Rating'; // 引入 MUI Rating 组件

// 这个组件是ai生成的 后期需要手动重构

// --- 类型定义 ---
interface CarouselItemData {
    id: number | string;
    title: string;
    img: string;
    stickerCount: number;
    rating: number;
    downloads: string;
    fireCount?: number; // 新增：控制火苗图标的数量
}

interface M3FinalCarouselProps {
    items: CarouselItemData[];
    visibleCount?: number;
    cardLargeWidth?: number;
    cardSmallWidth?: number;
    padding?: number;
}

// 严格锁定间距为 16px
const GAP = 16;

const FlexibleScrollbar: React.FC<M3FinalCarouselProps> = ({
                                                  items,
                                                  visibleCount = 3,
                                                  cardLargeWidth = 450,
                                                  cardSmallWidth = 40,
                                                  padding = 16
                                              }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isLocked = useRef(false);

    // 容器宽度侦测
    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) setContainerWidth(entry.contentRect.width);
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // 适配逻辑
    const totalExpandedWidth = items.length * cardLargeWidth + (items.length - 1) * GAP;
    const shouldForceExpand = containerWidth > (totalExpandedWidth + padding * 2);
    const effectiveVisibleCount = shouldForceExpand ? items.length : visibleCount;

    // 滚轮交互
    useEffect(() => {
        const container = containerRef.current;
        if (!container || shouldForceExpand) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isLocked.current) return;
            const isNext = e.deltaY > 0 || e.deltaX > 0;
            const isPrev = e.deltaY < 0 || e.deltaX < 0;

            if (isNext && activeIndex < items.length - effectiveVisibleCount) {
                isLocked.current = true;
                setActiveIndex((prev) => prev + 1);
            } else if (isPrev && activeIndex > 0) {
                isLocked.current = true;
                setActiveIndex((prev) => prev - 1);
            }
            setTimeout(() => { isLocked.current = false; }, 400);
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => container.removeEventListener('wheel', handleWheel);
    }, [activeIndex, items.length, effectiveVisibleCount, shouldForceExpand]);

    // 边界对齐逻辑 (防止右侧露白)
    const finalX = useMemo(() => {
        if (shouldForceExpand) return 0;
        const targetOffset = activeIndex * (cardSmallWidth + GAP);
        const currentTrackWidth = (items.length - effectiveVisibleCount) * cardSmallWidth + (effectiveVisibleCount * cardLargeWidth) + (items.length - 1) * GAP;
        const maxScroll = Math.max(0, currentTrackWidth - (containerWidth - padding * 2));
        return -Math.min(targetOffset, maxScroll);
    }, [activeIndex, shouldForceExpand, containerWidth, items.length, effectiveVisibleCount, cardLargeWidth, cardSmallWidth, padding]);

    return (
        <div className="w-full overflow-hidden font-sans">
            <div ref={containerRef} className="relative w-full h-[410px]">
                <motion.div
                    className="absolute flex items-start"
                    style={{ gap: `${GAP}px`, left: padding }}
                    animate={{ x: finalX }}
                    transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                >
                    {items.map((item, index) => {
                        const isActive = shouldForceExpand || (index >= activeIndex && index < activeIndex + effectiveVisibleCount);

                        return (
                            <motion.div
                                key={item.id}
                                onClick={() => {
                                    if (shouldForceExpand) return;
                                    if (index < activeIndex) setActiveIndex(index);
                                    if (index >= activeIndex + effectiveVisibleCount) setActiveIndex(index - effectiveVisibleCount + 1);
                                }}
                                animate={{ width: isActive ? cardLargeWidth : cardSmallWidth }}
                                transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                                className="bg-white rounded-[16px] overflow-hidden flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* 图片区域 */}
                                <div className="relative h-[320px] w-full overflow-hidden bg-[#F2F2F2]">
                                    <img
                                        src={item.img}
                                        className="absolute inset-0 h-full w-[320px] max-w-none object-cover"
                                        alt=""
                                        style={{ transform: 'translateX(-50%)', left: '50%' }}
                                    />
                                </div>

                                {/* 内容区域 */}
                                <div className="p-4 flex flex-col">
                                    <AnimatePresence mode="wait">
                                        {isActive ? (
                                            <motion.div
                                                key="active"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex flex-col w-full"
                                            >
                                                <div className={"flex flex-row justify-between items-center"}>
                                                    <h3 className="px-8 py-8 inline-block text-grey-darken-3 font-bold text-20 font-rem truncate ">
                                                        {item.title}
                                                    </h3>
                                                    <div className={"inline-flex flex-row gap-4 px-8"}>
                                                        {/* 根据传入的 fireCount 动态渲染火苗图标 */}
                                                        {Array.from({ length: item.fireCount || 0 }).map((_, i) => (
                                                            <img key={i} className={"h-[22px]"} src="/imgs/fire_icon.png" alt="fire" />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-row items-center justify-between px-8 pb-8">
                                                    <div className={"flex flex-row gap-8"}>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="bg-gradient-to-tr from-yellow-darken-1 to-yellow-darken-3 text-white text-12 font-righteous px-[6px] rounded-md">
                                                                {item.stickerCount}
                                                            </span>
                                                            <span className="font-rem text-16 text-grey-darken-2">Stickers</span>
                                                        </div>

                                                        {/* 替换为 MUI Rating 组件 */}
                                                        <div className="flex items-center">
                                                            <Rating
                                                                name={`rating-${item.id}`}
                                                                value={item.rating}
                                                                precision={0.1}
                                                                readOnly
                                                                size="small"
                                                                sx={{ color: '#FF9500' }} // 保持原有视觉颜色
                                                            />
                                                            <span className="text-gray-400 ml-1 font-bold text-sm">
                                                                {item.rating}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-end text-grey-darken-3 text-xs gap-8 items-center font-rem text-24">
                                                        <img src="/icons/download_card.svg" alt="download_count"/>
                                                        {item.downloads}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <div className="flex justify-center items-center h-full pt-4 opacity-5">
                                                <div className="w-1 h-20 bg-transparent rounded-full" />
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default FlexibleScrollbar;