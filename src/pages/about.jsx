import PageImage1 from '../newimages/about/C1.jpg'
import PageImage2 from '../newimages/about/C2.jpg'
import PageImage3 from '../newimages/about/C3.jpg'
import PageImage4 from '../newimages/about/C4.jpg'
import PageImage5 from '../Images/About/5.jpg'
import PageImage6 from '../Images/About/6.jpg'
import PageImage9 from '../Images/About/9.jpg'
import PageImage10 from '../Images/About/10.jpg'
import PageImage12 from '../Images/About/12.jpg'
import PageImage13 from '../Images/About/Volunteer_03.jpeg'


import RedNote from '../Images/SVG/Artboard 2.svg'
import YellowNote from '../Images/SVG/Artboard 3.svg'
import GreenNote from '../Images/SVG/Artboard 4.svg'

import topcon from '../Images/SVG/Top-Con.svg'

import Wave5 from '../Images/SVG/WaveLine.svg'
import Wave6 from '../Images/SVG/wave-left.svg'
import Wave7 from '../Images/SVG/Line.svg'
import Wave3 from '../Images/About/Frame 51.png'
import Wave4 from '../Images/About/Frame 52.png'

import BannerLeft from '../Images/SVG/Vector 3.svg'
import BannerRight from '../Images/SVG/Vector 2.svg'
import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'

import { HelmetProvider } from 'react-helmet-async';

export default function About() {  
    return (
      <div style={{backgroundColor: '#FFFDF4'}}>
        <HelmetProvider>
            <title>about Us</title>
            <meta name="description" content="About the founders and childen of Sur Saathi a Mumbai-based music initiative offering free choir, rhythm, and performance opportunities for children to build confidence and joy." />
            <link rel="canonical" href="https://sursaathi.in/about" />
        </HelmetProvider>
        <Header />
        <div className='graphicelements'>
        <div className="About-Top-Wave">
        <img src={topcon} alt="" />
        </div>
        <div className="green-note" id="green5">
            <img src={GreenNote} alt="" />
        </div>
        <div className="About-Wave-Left-Page">
        <img src={Wave5} alt="" />
        </div>
        <div className="About-Wave-Right-Page">
            <img src={Wave6} alt="" />
        </div>
        <div className="About-Line-Left">
            <img src={Wave7} alt="" />
        </div>
        <div className="green-note" id="green6">
            <img src={GreenNote} alt="" />
        </div>
        {/*
        <div className="green-note" id="green7">
            <img src={GreenNote} alt="" />
        </div>
        */}
        <div className="red-note" id="red4">
            <img src={RedNote} alt="" />
        </div>
        {/*
        <div className="red-note" id="red5">
            <img src={RedNote} alt="" />
        </div>
        */}
        <div className="yellow-note" id="yellow2">
            <img src={YellowNote} alt="" />
        </div>
        </div>
        <div className="About-Hero">
            <div className="About-Hero-div">
                <div className="About-Hero-div-info">
                    <h1>
                        Sound. Soul. Saathi.
                    </h1>
                    <p>
                        Our goal is to create a safe, inclusive space where every child feels heard, seen, and celebrated through the universal language of music!
                    </p>
                    <a href="/services">Our Education</a>
                </div>

                <div className="About-Hero-Image" > 
                    <div className="About-Hero-Image-Card">
                        <img src={PageImage1} alt="Sur Saathi's Kids singind and practicing duing workshop by Navya Mundhra and Kanika Jain"/>
                    </div>
                    <div className="About-Hero-Image-Card">
                        <img src={PageImage2} alt="Sur Saathi's Kids Playing keyboard duing workshop by Navya Mundhra and Kanika Jain"/>
                    </div>
                    <div className="About-Hero-Image-Card">
                        <img src={PageImage3} alt="group of Sur Saathi's students by Navya Mundhra and Kanika Jain"/>
                    </div>
                    <div className="About-Hero-Image-Card">
                        <img src={PageImage4} alt="Navya Mundhra and Kanika Jain teaching and coducting workshop for Sur Saathi kids"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="Commnity">
            <div className='graphicelements'>
            <div className="About-Wave-Left">
                <img src={BannerLeft} alt="" />
            </div>
            <div className="About-Wave-Right">
                <img src={BannerRight} alt="" />
            </div>
            <div className="green-note" id="green13">
                <img src={GreenNote} alt="" />
            </div>
            <div className="red-note" id="red9">
                <img src={RedNote} alt="" />
            </div>
            </div>
            <div className="Commnity-div">
                <h2>
                    Music That Builds Community
                </h2>
                <p>
                    At Sur Saathi, we believe music is more than melodies and
                    rhythms—it's a bridge that connects hearts, cultures, and
                    communities. Through our comprehensive programs, we create spaces
                    where children discover their voices, build confidence, and form
                    lasting friendships.
                </p>
            </div>
        </div>
        <div className="About-Info-Section">
        <div className="About-Info-Section-div">
            <div className="About-Info-Section-Images">
                <div>
                    <img src={PageImage6} alt="Navya Mundhra Founder of Sur Saathi a Music Initiative in Mumbai"/>
                </div>
            </div>
            <div className="About-Info-Section-Info">
                <div className="About-Info-Section-Info-div">
                    <h2>Navya Mundhra</h2>
                    <h3>Founder</h3>
                    <p>
                        I believe music can inspire change, yet access to it is limited. Trained in violin, piano, and composition, I’m committed to sharing this passion with those who lack the opportunity.
                    </p>
                </div>
                <div className="About-Info-Section-Info-internal">
                    <img src={Wave3} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="About-Info-Section">
        <div className="About-Info-Section-div-r">
            <div className="About-Info-Section-Info-r">
                <div className="About-Info-Section-Info-r-div">
                    <h2>Kanika Jain</h2>
                    <h3>Co-Founder</h3>
                    <p>
                        Music has given me identity, belonging, and a way to connect with others. Trained in Western and Hindustani Classical singing, I see it as a tool for expression, healing, and unity—and I hope to share these experiences where they’re most needed.
                    </p>
                </div>
                <div className="About-Info-Section-Info-r-internal">
                    <img src={Wave4} alt="" />
                </div>
            </div>
            <div className="About-Info-Section-Images">
                <div>
                    <img src={PageImage5} alt="Kanika Jain Founder of Sur Saathi a Music Initiative in Mumbai"/>  
                </div>
            </div>
        </div>
    </div>
    <div className="About-Info-Section">
        <div className="About-Info-Section-div">
            <div className="About-Info-Section-Images">
                <div>
                    <img src={PageImage9} alt="Navya Mundhra Founder of Sur Saathi a Music Initiative in Mumbai"/>
                </div>
            </div>
            <div className="About-Info-Section-Info">
                <div className="About-Info-Section-Info-div">
                    <h2>Sarthak Kukreja</h2>
                    <h3>Music Lead</h3>
                    <p>
                        I’ve loved music since starting piano at five, and now I’m inspired to share that joy and passion by helping young aspirants pursue their musical dreams.
                    </p>
                </div>
                <div className="About-Info-Section-Info-internal">
                    <img src={Wave3} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="About-Info-Section">
        <div className="About-Info-Section-div-r">
            <div className="About-Info-Section-Info-r">
                <div className="About-Info-Section-Info-r-div">
                    <h2>Aarav Bhargava</h2>
                    <h3>Rhythm Percussion Specialist</h3>
                    <p>
                        I am a musician. From banging away on boxes and pots as a baby, to learning bongos and congas since the age of six to drums, guitar, bass, and music production today, my music journey has gone from strength to strength.
                    </p>
                </div>
                <div className="About-Info-Section-Info-r-internal">
                    <img src={Wave4} alt="" />
                </div>
            </div>
            <div className="About-Info-Section-Images">
                <div>
                    <img src={PageImage12} alt="Kanika Jain Founder of Sur Saathi a Music Initiative in Mumbai"/>  
                </div>
            </div>
        </div>
    </div>
    <div className='Volunteers-Section-Main'>
        <h2>Our Team</h2>
        <div className='Volunteers-Section-Flex'>
            <div className='Volunteers-Section-Flex-Card'>
                <img src={PageImage10} alt="Sarthak Kukreja Music Facilitator of Sur Saathi a Music Initiative in Mumbai" />
                <h2>Parnikha Mishra</h2>
                <h3>Lead Vocalist</h3>
                <p>
                    I grew from a shy student to a confident performer, exploring music as my true form of expression. Now, at Sur Saathi, my mission is to help new singers find their voice, confidence, and the feeling behind every note.
                </p>
            </div>
            <div className='Volunteers-Section-Flex-Card Volunteers-Section-Flex-Card-Four'>
                <img src={PageImage13} alt="Aarav Bhargava Music Facilitator of Sur Saathi a Music Initiative in Mumbai" />
                <h2>Elyssa Dsouza</h2>
                <h3>Vocalist</h3>
                <p>
                    I've loved singing since I was 7 years old. For me, singing isn't just a hobby, it's a way to express my feelings. And here at Sur Saathi Mumbai, my aim is to help everyone find their voice and experience the joy of singing.
                </p>
            </div>
        </div>
    </div>
    {/*
    <div className="About-Info-Section">
        <div className="About-Info-Section-div-r">
            <div className="About-Info-Section-Info-r">
                <div className="About-Info-Section-Info-r-div">
                    <h2>
                        Creativity Meets Compassion
                    </h2>
                    <p>
                        At Sur Saathi, sessions are more than just singing. They're about expression, listening, and playing together. Our method blends musical learning with emotional growth — where mistakes are welcome, and every voice matters.
                    </p>
                </div>
                <div className="About-Info-Section-Info-r-internal">
                    <img src={Wave4} alt="" />
                </div>
            </div>
            <div className="About-Info-Section-Images">
                <div>
                    <img src={PageImage7}/>
                </div>
                <div>
                    <img src={PageImage8} alt="Children practicing"/>
                </div>
            </div>
        </div>
    </div>
    */}
    {/*
    <div className="Founders-Section">
        <div className="Founders-Section-div">
            <div className="Founders-Section-Info">
                <h2>
                    Meet the Sur Saathi Team
                </h2>
            </div>
            <div className="Founders-Section-Images">
                <div>
                    <img src={PageImage11} alt="Team member" />
                </div>
                <div>
                    <img src={PageImage12} alt="Team member" />
                </div>
            </div>
        </div>
    </div>
    */}
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
  