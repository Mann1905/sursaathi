import Donate1 from '../Images/Donation/01.jpeg'
import Donate2 from '../Images/Donation/02.jpeg'
import Donate3 from '../Images/Donation/03.jpeg'
import Donate5 from '../Images/Donation/04.jpeg'
import Donate6 from '../Images/Donation/05.jpeg'
import Donate7 from '../Images/Donation/06.jpeg'

import RedNote from '../Images/SVG/Artboard 2.svg'
import YellowNote from '../Images/SVG/Artboard 3.svg'
import GreenNote from '../Images/SVG/Artboard 4.svg'

import Wave1 from '../Images/SVG/Artboard 9.svg'
import Wave2 from '../Images/SVG/Artboard 10.svg'

import BannerLeft from '../Images/SVG/Vector 3.svg'
import BannerRight from '../Images/SVG/Vector 2.svg'
import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'

import Card101 from '../newimages/home/Card1/C1.jpg'
import Card102 from '../newimages/home/Card1/C2.jpg'
import Card103 from '../newimages/home/Card1/C3.jpg'

import Card201 from '../newimages/home/Card2/C1.jpg'
import Card202 from '../newimages/home/Card2/C2.jpg'
import Card203 from '../newimages/home/Card2/C3.jpg'

import Card301 from '../newimages/home/Card3/C1.jpg'
import Card302 from '../newimages/home/Card3/C2.jpg'
import Card303 from '../newimages/home/Card3/C3.jpg'

import Card401 from '../newimages/home/Card4/C1.jpg'
import Card402 from '../newimages/home/Card4/C2.jpg'
import Card403 from '../newimages/home/Card4/C3.jpg'

import { useEffect, useRef, useState } from "react";
import { HelmetProvider } from 'react-helmet-async';

export default function Home() {  
  const slidesRef = useRef([]);
  const intervalRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const slideNext = () => {
    const slides = slidesRef.current;
    if (!slides[counter]) return;

    slides[counter].style.animation = "next1 0.5s ease-in forwards";

    const nextIndex = counter === slides.length - 1 ? 0 : counter + 1;

    setCounter(nextIndex);

    requestAnimationFrame(() => {
      if (slides[nextIndex]) {
        slides[nextIndex].style.animation =
          "next2 0.5s ease-in forwards";
      }
    });
  };

  const slidePrev = () => {
    const slides = slidesRef.current;
    if (!slides[counter]) return;

    slides[counter].style.animation = "prev1 0.5s ease-in forwards";

    const prevIndex = counter === 0 ? slides.length - 1 : counter - 1;

    setCounter(prevIndex);

    requestAnimationFrame(() => {
      if (slides[prevIndex]) {
        slides[prevIndex].style.animation =
          "prev2 0.5s ease-in forwards";
      }
    });
  };

  // CARD AUTO SLIDER START

    const slidesByCard = [
        [ { bg: Card101 }, { bg: Card102 }, { bg: Card103 } ],
        [ { bg: Card201 }, { bg: Card202 }, { bg: Card203 } ],
        [ { bg: Card301 }, { bg: Card302 }, { bg: Card303 } ],
        [ { bg: Card401 }, { bg: Card402 }, { bg: Card403 } ],
    ];

    const [counter_Carl, setCounter_Carl] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
        setCounter_Carl(prev =>
            prev === slidesByCard[0].length - 1 ? 0 : prev + 1
        );
        }, 5000);

        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  // CARD AUTO SLIDER END

  // Auto slide (ONCE)
  useEffect(() => {
    if (slidesRef.current.length === 0) return;

    intervalRef.current = setInterval(slideNext, 3000);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const trackRef = useRef(null);
    const intervalRefD = useRef(null);

    const images = [
        Donate1,
        Donate2,
        Donate3,
        Donate5,
        Donate6,
        Donate7
    ];

    const VISIBLE_COUNT = 3;
    const [index, setIndex] = useState(0);

    const slideNextD = () => {
        setIndex((prev) =>
        prev >= images.length - VISIBLE_COUNT ? 0 : prev + 1
        );
    };

    const slidePrevD = () => {
        setIndex((prev) =>
        prev === 0 ? images.length - VISIBLE_COUNT : prev - 1
        );
    };  

    useEffect(() => {
        intervalRefD.current = setInterval(slideNextD, 5000);
        return () => clearInterval(intervalRefD.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        intervalRefD.current = setInterval(slideNext_M, 5000);
        return () => clearInterval(intervalRefD.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const slidesData = [
  {
    title: "Sing, Learn, and Grow Together",
    description:
      "Through joyful group singing, children build language and memory skills while expressing emotions in a fun, safe, and confidence-boosting environment.",
  },
  {
    title: "Rhythm, Movement, and Teamwork",
    description:
      "Through fun rhythmic games and movement, children learn timing, coordination, and cooperation while staying active, focused, and engaged.",
  },
  {
    title: "Exploring Percussion",
    description:
      "Children discover shakers, tambourines, and maracas through hands-on play, building fine motor skills and a strong sense of rhythm in a fun, engaging way.",
  },
  {
    title: "Active Music Listening",
    description:
      "Children explore music from different cultures, learning to listen closely while enjoying calm, focused moments that inspire imagination and a love of music.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Children build confidence through supportive performances, celebrating progress while connecting with peers, families, and the wider community.",
  },
];


    return (
      <div style={{backgroundColor: '#FFFDF4'}}>
        <HelmetProvider>
            <title>Home page</title>
            <meta name="description" content="Sur Saathi is a Mumbai-based music initiative offering free choir, rhythm, and performance opportunities for children to build confidence and joy." />
            <link rel="canonical" href="https://sursaathi.in/" />
        </HelmetProvider>
        <Header />
        <div className='graphicelements'>
            {/*
        <div className="NT">
            <img src={NT} alt="" />
        </div>
        <div className="KT">
            <img src={KT} alt="" />
        </div>
        */}
        <div id="SVG-Home-Hero-Wave">
          <img src={Wave1} alt="" />
        </div>
        <div className="Home-SVG-Wave">
          <img src={Wave2} alt="" />
        </div>
        <div className="green-note" id="green1">
          <img src={GreenNote} alt="" />
        </div>
        <div className="green-note" id="green3">
            <img src={GreenNote} alt="" />
        </div>
        <div className="green-note" id="green4">
            <img src={GreenNote} alt="" />
        </div>
        <div className="red-note" id="red1">
            <img src={RedNote} alt="" />
        </div>
        <div className="red-note" id="red2">
            <img src={RedNote} alt="" />
        </div>
        <div className="red-note" id="red3">
            <img src={RedNote} alt="" />
        </div>
        <div className="yellow-note" id="yellow1">
            <img src={YellowNote} alt="" />
        </div>
        </div>        
        <div className="Hero">
            <div className="Hero-Div">
                <h1>
                    Discover the Joy of Music with Sur Saathi
                </h1>
                <p>
                Sur Saathi is a collaborative initiative by passionate musicians focused on celebrations and emotional well-being through music. Currently active across Mumbai, with a mission to go nationwide, we support the mental well-being of special-needs children through free group singing, rhythm activities, and performances—nurturing confidence, expression, and connection.
                </p>
                <div className="center-button">
                    <a id="hero-btn" href="/donate">Contribute in Kind</a>
                </div>
            </div>
        </div>
        <div
            className="slide-container"
            onMouseEnter={() => clearInterval(intervalRef.current)}
            onMouseLeave={() =>
            (intervalRef.current = setInterval(slideNext, 5000))
            }
        >
        <div className="slides">
            {slidesData.map((slide, index) => (
            <div
                key={index}
                className={`slidesld slide${index + 1} ${
                index === counter ? "active" : ""
                }`}
                ref={(el) => (slidesRef.current[index] = el)}
            >
                <span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                </span>
            </div>
            ))}
        </div>
            <div className="buttons">
            <span className="prev" onClick={slidePrev}>
                &#10094;
            </span>
            <span className="next" onClick={slideNext}>
                &#10095;
            </span>
            </div>
        </div>
        <div className="services-section">
            <div className="services-section-div">
            <div className='graphicelements'> 
            <div className="green-note" id="green2">
                <img src={GreenNote} alt="" />
                </div>                
                    <div className="ban-con" id="ban-con-r">
                        <img src={BannerRight} alt="" />
                    </div>
                    <div className="ban-con" id="ban-con-l">
                        <img src={BannerLeft} alt="" />
                    </div>
                </div>              
                <div className="services-section-info">
                    <h2>Why Music with Sur Saathi?</h2>
                    <p>
                        We believe music belongs to every child. Our programs are designed to be accessible, joyful, and transformative — empowering children from all backgrounds to express, connect, and thrive.
                    </p>
                </div>
                <div className="services-section-contribute">
                    <a href="/">Contribute in Time</a>
                    <a href="/donate">Contribute in Kind</a>
                </div>
            </div>
            <div className="impact-section">
                <div className="impact-section-box"> 
                    <h4>50+</h4>
                    <p>Community Programs</p>
                </div>
                <div className="impact-section-box">
                    <h4>300+</h4>
                    <p>students reached</p>
                </div>
                <div className="impact-section-box">
                    <h4>130+</h4>
                    <p>hours of Music education delivered</p>
                </div>
                <div className="impact-section-box">
                    <h4>20+</h4>
                    <p>Instruments donated</p>
                </div>
            </div>  
            <div className="About-Info-Section">
        {/*
        <div className="About-Info-Section-div">
            <div className="About-Info-Section-Images">
                <div>
                    <div>
                        <img src={PageImage6} alt="Navya Mundhra Founder of Sur Saathi a Music Initiative in Mumbai"/>
                        <h3>Founder</h3>
                    </div>
                   <div>
                        <img src={PageImage5} alt="Kanika Jain Founder of Sur Saathi a Music Initiative in Mumbai"/> 
                        <h3>Co-Founder</h3>
                   </div>
                </div>
            </div>
            <div className="About-Info-Section-Info">
                <div className="About-Info-Section-Info-div">
                    <h2>Navya Mundhra</h2>
                    
                    <p>
                        I believe music can inspire change, yet access to it is limited. Trained in violin, piano, and composition, I’m committed to sharing this passion with those who lack the opportunity.
                    </p>
                </div>
                <div className="About-Info-Section-Info-internal">
                    <img src={Wave3} alt="" />
                </div>
            </div>
        </div>
        */}
    </div>
    <div className="About-Info-Section-div" id="About-Info-Section-div-home">
        <div className="About-Info-Section-Info-Iframe">
            <div className="About-Info-Section-Info-div-Iframe-Info">
                <h2>
                    The People Behind the Passion
                </h2>
                <iframe className='About-Info-Section-Info-Div-Iframe' src="https://www.youtube.com/embed/W1AiFotn_vQ?si=I7cQbNK8ge2JIzhC&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <a href="/about">Know more</a>
            </div>
        </div>
    </div>
    {/*
    <div className="About-Info-Section-div" id="About-Info-Section-div-home">
        <div className="About-Info-Section-Images">
            <div>
                <img src={PageImage5} id="About-Info-Section-Images-home" alt="Kanika Jain Founder of Sur Saathi a Music Initiative in Mumbai"/>
                <p>— Our Team</p>
            </div>
        </div>
        <div className="About-Info-Section-Info">
            <div className="About-Info-Section-Info-div">
                <div>
                    <h2>
                        The People Behind the Passion
                    </h2>
                    <p>
                        It began with a group of musicians and a shared dream: to turn music into a bridge — one that connects children to themselves, to others, and to a sense of joy. With years of experience in music education and community building, we’re here to bring rhythm and empathy into every session.
                    </p>
                </div>
                <div className="About-Info-Section-Info-div-direct">
                    <a href="#">Know more</a>
                </div>
            </div>
            <div className="About-Info-Section-Info-internal">
                <img src={Wave3} alt="" />
            </div>
        </div>
    </div>
    */}
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
        {/*
        <div>
            <div className="About-Section-Img">
                <img src={PageImage3} alt="Navya Mundhra and Kanika Jain teaching and coducting workshop for Sur Saathi kids" id="About-Section-Img"/>
            </div>
            
            <div className="About-Section">
                <div className="About-Section-div">
                    <h2>
                        Music as a Companion, Not a Privilege
                    </h2>
                    <div className="About-Section-div-info">
                        <p>
                            Sur Saathi means "sound companion." We're on a mission to make music education free and accessible to all children, so that they see music as a companion that can help them build confidence, connection and joy.
                        </p>
                        <a href="/about" className="About-Section-div-info-a">Know more about us</a>
                    </div>
                </div>
            </div>
            
        </div>
        */}
        {/*
        <div className="About-Sec-Main-Section">
            <div className="About-Sec">
                <div className="About-Sec-Main">
                    <h2>
                    Our Work,Our Passion
                    </h2>
                    <p>
                    Every beat we teach is rooted in empathy, community, and
                    performance.
                    </p>
                </div>
                <div className="About-Sec-Info">
                    <div className="About-Sec-Info-Card">
                    <h3>
                        Who We Are:
                    </h3>
                    <p>
                        सुर Saathi was founded by two passionate musicians united by a shared vision - community. 
                    </p>
                    </div>
                    <div className="About-Sec-Info-Card">
                    <h3>
                        What We Do:
                    </h3>
                    <p>
                        We run weekly music workshops for kids aged 5 to 15, focusing on bilingual singing lessons, instrument exposure, music listening, pulse/rhythm building activities, exposure to music theory and performance opportunities, to help them gain a holistic understanding of music.
                    </p>
                    </div>
                    <div className="About-Sec-Info-Card">
                    <h3>
                        How We Do It:
                    </h3>
                    <p>
                        Through collaboration, consistency, and compassion — creating
                        safe, playful spaces where music helps children grow.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        */}
        <div className="donate-slider-slide-container dnt-desk"
                    onMouseEnter={() => clearInterval(intervalRefD.current)}
                    onMouseLeave={() =>
                    (intervalRefD.current = setInterval(slideNextD, 5000))
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
                    <span className="dnt-prev" onClick={slidePrevD}>&#10094;</span>
                    <span className="dnt-next" onClick={slideNextD}>&#10095;</span>
                    </div>
        </div>
        <div className="donate-slider-slide-container dnt-mob"
            onMouseEnter={() => clearInterval(intervalRefD.current)}
            onMouseLeave={() =>
            (intervalRefD.current = setInterval(slideNext_M, 5000))
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
        <div>
            <div className="Newsletter-Section">
                <h2>
                  Stay in Tune with Sur Saathi
                </h2>
                <p>
                    Get updates on upcoming events, workshops, and ways you can support music education for children across Mumbai.
                </p>
            </div>
        </div>
        <Newsletter />
        <Footer />
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