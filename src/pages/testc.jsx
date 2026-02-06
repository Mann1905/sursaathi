import PageImage11 from '../Images/Website_1a.jpg'
import PageImage12 from '../Images/Website_2.jpg'
import PageImage13 from '../Images/Website_4a.jpg'
import PageImage15 from '../Images/About/5.jpg'
import PageImage16 from '../Images/About/6.jpg'

import { useEffect, useState, useRef } from "react";

export default function DonateInst() { 
    const trackRef = useRef(null);
    const intervalRef = useRef(null);

    const images = [
        PageImage11,
        PageImage12,
        PageImage13,
        PageImage15,
        PageImage16
    ];

    const VISIBLE_COUNT = 3;
    const [index, setIndex] = useState(0);

    const slideNext = () => {
        setIndex((prev) =>
        prev >= images.length - VISIBLE_COUNT ? 0 : prev + 1
        );
    };

    const slidePrev = () => {
        setIndex((prev) =>
        prev === 0 ? images.length - VISIBLE_COUNT : prev - 1
        );
    };  

    useEffect(() => {
        intervalRef.current = setInterval(slideNext, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const VISIBLE_COUNT_M = 1;
    const [index_M, setIndex_M] = useState(0);

    const slideNext_M = () => {
        setIndex_M((prev) =>
        prev >= images.length - VISIBLE_COUNT_M ? 0 : prev + 1
        );
    };

    const slidePrev_M = () => {
        setIndex_M((prev) =>
        prev === 0 ? images.length - VISIBLE_COUNT_M : prev - 1
        );
    };

    useEffect(() => {
        intervalRef.current = setInterval(slideNext_M, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div style={{backgroundColor: '#FFFDF4'}}>
          <div className="donate-slider-slide-container dnt-desk"
              onMouseEnter={() => clearInterval(intervalRef.current)}
              onMouseLeave={() =>
              (intervalRef.current = setInterval(slideNext, 5000))
              }
          >
              <div
              className="donate-slider-track"
              ref={trackRef}
              style={{
                  transform: `translateX(-${index * (115 / VISIBLE_COUNT)}%)`,
              }}
              >
              {images.map((src, i) => (
                  <img key={i} src={src} alt="" />
              ))}
              </div>

              <div className="donate-slider-buttons">
              <span className="dnt-prev" onClick={slidePrev}>&#10094;</span>
              <span className="dnt-next" onClick={slideNext}>&#10095;</span>
              </div>
          </div>
          <div className="donate-slider-slide-container dnt-mob"
              onMouseEnter={() => clearInterval(intervalRef.current)}
              onMouseLeave={() =>
              (intervalRef.current = setInterval(slideNext_M, 5000))
              }
          >
              <div
              className="donate-slider-track"
              ref={trackRef}
              style={{
                  transform: `translateX(-${index_M * (103 / VISIBLE_COUNT_M)}%)`,
              }}
              >
              {images.map((src, i) => (
                  <img key={i} src={src} alt="" />
              ))}
              </div>

              <div className="donate-slider-buttons">
              <span className="dnt-prev" onClick={slidePrev_M}>&#10094;</span>
              <span className="dnt-next" onClick={slideNext_M}>&#10095;</span>
              </div>
          </div>
        </div>
    );
}
  