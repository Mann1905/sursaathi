import { useEffect, useRef, useState } from "react";

export default function Slider({ slides, interval = 5000 }) {
  const slidesRef = useRef([]);
  const intervalRef = useRef(null);
  const [active, setActive] = useState(0);

  const slideNext = () => {
    const els = slidesRef.current;

    setActive((prev) => {
      if (!els[prev]) return prev;

      // reset animations
      els[prev].style.animation = "none";
      const next = prev === els.length - 1 ? 0 : prev + 1;
      els[next].style.animation = "none";

      requestAnimationFrame(() => {
        els[prev].style.animation = "next1 0.5s ease-in forwards";
        els[next].style.animation = "next2 0.5s ease-in forwards";
      });

      return next;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(slideNext, interval);
    return () => clearInterval(intervalRef.current);
  }, [interval]);

  return (
    <div
      className="slide-container-Cards"
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={() =>
        (intervalRef.current = setInterval(slideNext, interval))
      }
    >
      <div className="slides-Cards">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className={`slidesld-Cards ${
              index === active ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.bg})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
