import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const SharedCarousel = ({ items = [], renderItem, visibleCount = 3 }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = items.length;

  const [actualVisible, setActualVisible] = useState(visibleCount);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return 1; // mobile
      if (w < 768) return Math.min(2, visibleCount); // sm
      if (w < 1024) return Math.min(3, visibleCount); // md
      return visibleCount; // lg+
    };

    const apply = () => setActualVisible(calc());
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [visibleCount]);

  const maxIndex = Math.max(0, total - actualVisible);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : Math.max(0, i - 1)));
  const next = () =>
    setIndex((i) => (i >= maxIndex ? 0 : Math.min(maxIndex, i + 1)));

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const translateX = -(index * (100 / actualVisible));

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-white/10 shadow hover:scale-110 active:scale-95 transition-all duration-200 shrink-0 text-neutral-700 dark:text-zinc-200"
          aria-label="Anterior"
        >
          <FaChevronLeft size={13} />
        </button>

        <div
          className="flex-1 overflow-hidden min-h-[380px] md:min-h-[420px] lg:min-h-[460px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            className="flex"
            animate={{ x: `${translateX}%` }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            style={{ willChange: "transform" }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="shrink-0 px-2 h-full"
                style={{ width: `${100 / actualVisible}%` }}
              >
                <div className="h-full">{renderItem(item, i)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={next}
          className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-neutral-200 dark:border-white/10 shadow hover:scale-110 active:scale-95 transition-all duration-200 shrink-0 text-neutral-700 dark:text-zinc-200"
          aria-label="Próximo"
        >
          <FaChevronRight size={13} />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 h-2 bg-neutral-800 dark:bg-white"
                : "w-2 h-2 bg-neutral-300 dark:bg-white/30 hover:bg-neutral-400 dark:hover:bg-white/50"
            }`}
            aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SharedCarousel;
