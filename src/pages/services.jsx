import PageImage1 from '../newimages/programs/B1.jpg'
import PageImage2 from '../newimages/programs/C1.jpg'
import PageImage3 from '../newimages/programs/C2.jpg'
import PageImage4 from '../newimages/programs/C3.jpg'
import PageImage5 from '../newimages/programs/C4.jpg'

import RedNote from '../Images/SVG/Artboard 2.svg'
import YellowNote from '../Images/SVG/Artboard 3.svg'
import GreenNote from '../Images/SVG/Artboard 4.svg'

import Topcon from '../Images/SVG/Top-Con.svg'
import Wave1 from '../Images/SVG/Line.svg'
import Wave2 from '../Images/SVG/WaveLine.svg'
import Wave3 from '../Images/SVG/Artboard 9.svg'
import Wave4 from '../Images/SVG/wave-left.svg'

import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'

import { HelmetProvider } from 'react-helmet-async';

export default function Services() {  
    return (
      <div style={{backgroundColor: '#FFFDF4'}}>
        <HelmetProvider>
            <title>Education</title>
            <meta name="description" content="Education Services Provided by Sur Saathi is a Mumbai-based music initiative offering free choir, rhythm, and performance opportunities for children to build confidence and joy." />
            <link rel="canonical" href="https://sursaathi.in/services" />
        </HelmetProvider>
        <Header />
            <div className='graphicelements'>
            <div className="Contact-Top-Right">
                <img src={Topcon} alt="" />
            </div>
            <div className="Services-Wave-Left">
                <img src={Wave4} alt="" />
            </div>
            <div id='SVG-Services-Hero-Wave'>
            <img src={Wave3} alt="" />
            </div>
            <div className="Services-Line-Left">
                <img src={Wave1} alt="" />
            </div>
            <div className="Services-WaveLine-Right">
                <img src={Wave2} alt="" />
            </div>
            <div className="green-note" id="green8">
                <img src={GreenNote} alt="" />
            </div>
            <div className="green-note" id="green9">
                <img src={GreenNote} alt="" />
            </div>
            <div className="green-note" id="green10">
                <img src={GreenNote} alt="" />
            </div>
            <div className="red-note" id="red6">
                <img src={RedNote} alt="" />
            </div>
            <div className="yellow-note" id="yellow3">
                <img src={YellowNote} alt="" />
            </div>
            <div className="yellow-note" id="yellow4">
                <img src={YellowNote} alt="" />
            </div>
            </div>
        <div className="Services-Hero">
            <h1>Explore Our Music Programs</h1>
            <p>
                Sur Saathi offers free, engaging music sessions for children — blending fun, learning, and performance. See what your child can discover with us!
            </p>
            <div id="service-donate">
            <a href="/donate">Donate for a Dream</a>
            </div>
        </div>
        <div className="Services-Hero-Img">
            <img src={PageImage1} alt="Sur Saathi's Kids singind and practicing duing workshop by Navya Mundhra and Kanika Jain"/>
        </div>
        <div className="Services-Section">
            <div className="Services-Section-div">
                <div className="Services-Section-img">
                    <img src={PageImage2} alt="Children in choir practice"/>
                </div>
                <div className="Services-Section-Info-left">
                    <div>
                        <h2>
                            Choir & Vocal Learning
                        </h2>
                        <p>
                            Each week, our choir classes for kids bring together joyful group singing, vocal warm-ups, and playful musical exploration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Services-Section">
            <div className="Services-Section-div" id="rev">
                <div className="Services-Section-Info-right">
                    <div>
                        <h2>
                            Instrument Exploration
                        </h2>
                        <p>
                            We introduce instruments through rhythm games and hands-on experiences, encouraging curiosity and coordination.
                        </p>
                    </div>
                </div>
                <div className="Services-Section-img">
                    <img src={PageImage3} alt="Sur Saathi's Kids Playing keyboard duing workshop by Navya Mundhra and Kanika Jain"/>
                </div>
            </div>
        </div>
        <div className="Services-Section">
            <div className="Services-Section-div">
                <div className="Services-Section-img">
                    <img src={PageImage4} alt="Music theory on blackboard" id="Public-Image-Offset"/>
                </div>
                <div className="Services-Section-Info-left">
                    <div>
                        <h2>Public Performances</h2>
                        <p>
                            Children get the chance to perform at events and the Festival of Choirs — building confidence and community pride.
                        </p>     
                    </div>
                </div>
            </div>
        </div>
        <div className="Services-Section">
            <div className="Services-Section-div" id="rev">
                <div className="Services-Section-Info-right">
                    <div>
                        <h2>
                            Emotional Wellbeing
                        </h2>
                        <p>
                            We perform gentle, mindful music for cancer patients, special-needs and blind children, and residents of old-age homes, creating moments of calm, connection, and confidence.
                        </p>
                    </div>
                </div>
                <div className="Services-Section-img">
                    <img src={PageImage5} alt="Sheet Music in a book"/>
                </div>
            </div>
        </div>
        <div>
            <div className="Newsletter-Section">
                <h2>
                    Stay in Tune with Sur Saathi
                </h2>
                <p>
                    Get updates on upcoming events, workshops, and ways you can support free music education in our community.
                </p>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  );
}
  