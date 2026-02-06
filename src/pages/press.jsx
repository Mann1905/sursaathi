import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'

import G2 from "../Images/gallery/press.jpeg"
import G3 from "../Images/gallery/3.jpg"
import G4 from "../Images/gallery/4.jpg"
import G5 from "../Images/gallery/5.jpg"
import G6 from "../Images/gallery/6.jpg"
import G7 from "../Images/gallery/7.jpg"
import G8 from "../Images/gallery/8.jpg"
import G9 from "../Images/gallery/9.jpg"
import G10 from "../Images/gallery/10.jpg"
import G11 from "../Images/gallery/11.jpg"
import G12 from "../Images/gallery/12.jpg"
import G13 from "../Images/gallery/13.jpg"
import G14 from "../Images/gallery/14.jpg"
import G15 from "../Images/Chris/1.jpeg"
import G16 from "../Images/Chris/2.jpeg"
import G17 from "../Images/Chris/3.jpeg"
import G18 from "../Images/Chris/4.jpeg"
import G19 from "../Images/Chris/5.jpeg"
import G20 from "../Images/Chris/6.jpeg"
import G21 from "../Images/Chris/7.jpeg"

import G22 from "../Images/gallery/16.jpg"
import G23 from "../Images/gallery/17.jpg"
import G24 from "../Images/gallery/18.jpg"

import G25 from "../Images/gallery/19.jpg"
import G26 from "../Images/gallery/20.jpg"

import { HelmetProvider } from 'react-helmet-async';

export default function Press() {
  return (
    <div style={{backgroundColor: '#FFFDF4'}}>
      <HelmetProvider>
        <title>Press</title>
        <meta name="description" content="Press and media coverage of Sur Saathi – a Mumbai-based music initiative offering free choir, rhythm, and performance opportunities for children to build confidence and joy." />
        <link rel="canonical" href="https://sursaathi.in/press" />
      </HelmetProvider>
      <Header />
      <h1>Press</h1>
      <div className='MainGallery'>
        <div className='MainGallery-col'>
          {/* <img src={G7} alt="" /> */}
          <img src={G2} alt="" />
          {/* <img src={G3} alt="" />
          <img src={G10} alt="" />
          <img src={G15} alt="" />
          <img src={G19} alt="" />
          <img src={G20} alt="" />
          <img src={G25} alt="" /> */}
        </div>
        <div className='MainGallery-col'>
          {/* <img src={G11} alt="" />
          <img src={G8} alt="" />
          <img src={G9} alt="" />
          <img src={G5} alt="" />
          <img src={G16} alt="" />
          <img src={G18} alt="" />
          <img src={G22} alt="" />
          <img src={G26} alt="" /> */}
        </div>
        <div className='MainGallery-col'>
          {/* <img src={G6} alt="" />
          <img src={G12} alt="" />
          <img src={G13} alt="" />
          <img src={G14} alt="" />
          <img src={G4} alt="" />
          <img src={G17} alt="" />
          <img src={G21} alt="" />
          <img src={G24} alt="" />
          <img src={G23} alt="" /> */}
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
