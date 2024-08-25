import { useCallback, useEffect, useState, useRef } from "react";

interface SwiperProps {
    children: React.ReactNode;
    onSwipe: (deltaX: number) => void;
}
export const Swiper = ({ children, onSwipe }: SwiperProps) => {

    const wrapperRef = useRef<HTMLDivElement>(null);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleTouchStart = useCallback((e: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            return;
        }

        e.preventDefault();

        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
    }, []);

    const handleTouchEnd = useCallback((e: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            return;
        }

        e.preventDefault();

        const endX = e.changedTouches[0].clientX;
        // const endY = e.changedTouches[0].clientY;
        const deltaX = endX - startX;
        // const deltaY = endY - startY;

        onSwipe(deltaX);
    },
        [startX, startY, onSwipe],
    );

    useEffect(() => {
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [handleTouchStart, handleTouchEnd]);

    return <div ref={wrapperRef}>{children}</div>;
}