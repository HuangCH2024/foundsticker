import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 类型定义 ---
interface CarouselItemData {
    id: number | string;
    title: string;
    img: string;
    stickerCount: number;
    rating: number;
    downloads: string;
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

const Test: React.FC<M3FinalCarouselProps> = ({
                                                             items,
                                                             visibleCount = 2,
                                                             cardLargeWidth = 320,
                                                             cardSmallWidth = 80,
                                                             padding = 40
                                                         }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isLocked = useRef(false);

    // 容器宽度侦测
    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) setContainerWidth(entry.contentRect.width);
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
        <div className="w-full py-12 bg-[#FBFBFB] overflow-hidden font-sans">
            <div ref={containerRef} className="relative w-full h-[550px]">
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
                                {/* 图片区域 - 维持 16px 圆角观感 */}
                                <div className="relative h-[320px] w-full overflow-hidden bg-[#F2F2F2]">
                                    <img
                                        src={item.img}
                                        className="absolute inset-0 h-full w-[320px] max-w-none object-cover"
                                        alt=""
                                        style={{ transform: 'translateX(-50%)', left: '50%' }}
                                    />
                                </div>

                                {/* 内容区域 */}
                                <div className="p-4 flex flex-col min-h-[140px]">
                                    <AnimatePresence mode="wait">
                                        {isActive ? (
                                            <motion.div
                                                key="active"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex flex-col w-full"
                                            >
                                                <h3 className="px-8 py-12 text-grey-darken-4 font-bold text-20 font-rem truncate ">
                                                    {item.title}
                                                </h3>

                                                <div className="flex items-center justify-between px-8">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="bg-gradient-to-tr from-yellow-darken-1 to-yellow-darken-3 text-white text-12 font-righteous  px-[6px] rounded-md">91</span>
                                                        <span className="font-rem text-16 text-grey-darken-2">Stickers</span>
                                                    </div>
                                                    <div className="flex text-[#FF9500] text-sm items-center">
                                                        {'★'.repeat(Math.floor(item.rating))}
                                                        <span className="text-gray-400 ml-1 font-bold">{item.rating}</span>
                                                    </div>
                                                    <div className="mt-8 flex justify-end text-gray-400 text-xs gap-1.5 items-center font-semibold">
                                                        <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                        {item.downloads}
                                                    </div>
                                                </div>


                                            </motion.div>
                                        ) : (
                                            <div className="flex justify-center items-center h-full pt-4 opacity-5">
                                                <div className="w-1 h-20 bg-black rounded-full" />
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

export default Test;