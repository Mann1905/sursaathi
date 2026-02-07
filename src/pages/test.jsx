import { useEffect, useState } from "react";

import PageImage1 from '../Images/Website_1a.jpg'
import PageImage2 from '../Images/Website_2.jpg'
import PageImage3 from '../Images/Website_4a.jpg'

export default function Home() {
  // Slides per card (different images, same length)
  const slidesByCard = [
    [
      { bg: PageImage1 },
      { bg: PageImage2 },
      { bg: PageImage3 },
    ],
    [
      { bg: PageImage1 },
      { bg: PageImage2 },
      { bg: PageImage3 },
    ],
    [
      { bg: PageImage1 },
      { bg: PageImage2 },
      { bg: PageImage3 },
    ],
    [
      { bg: PageImage1 },
      { bg: PageImage2 },
      { bg: PageImage3 },
    ],
  ];

  // Shared counter (keeps all sliders in sync)
  const [counter_Carl, setCounter_Carl] = useState(0);

  // Auto-slide (syncs everything)
  useEffect(() => {
    const id = setInterval(() => {
      setCounter_Carl(prev =>
        prev === slidesByCard[0].length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFDF4" }}>
      <div className="services-section-second">
        <div className="services-section-second-div">
          <div className="services-section-second-info">

            <ServiceCard
              title="Choir & Vocal Learning"
              text="Each week, our choir classes for kids bring together joyful group singing, vocal warm-ups, and playful musical exploration."
              slides={slidesByCard[0]}
              activeIndex={counter_Carl}
            />

            <ServiceCard
              title="Instrument Exploration"
              text="We introduce instruments through rhythm games and hands-on experiences, encouraging curiosity and coordination."
              slides={slidesByCard[1]}
              activeIndex={counter_Carl}
            />

            <ServiceCard
              title="Public Performances"
              text="Children get the chance to perform at events and the Festival of Choirs — building confidence and community pride."
              slides={slidesByCard[2]}
              activeIndex={counter_Carl}
            />

            <ServiceCard
              title="Emotional Wellbeing"
              text="We perform gentle, mindful music for cancer patients, special-needs and blind children, and residents of old-age homes, creating moments of calm, connection, and confidence."
              slides={slidesByCard[3]}
              activeIndex={counter_Carl}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ title, text, slides, activeIndex }) {
  return (
    <div className="services-section-second-info-Card">
      <Slider slides={slides} activeIndex={activeIndex} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Slider({ slides, activeIndex }) {
  return (
    <div className="slide-container-Cards">
      <div className="slides-Cards">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slidesld-Cards ${
              index === activeIndex ? "active" : ""
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
