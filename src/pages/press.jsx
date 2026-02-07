import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'

import G2 from "../Images/gallery/press.jpeg"

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
          <img src={G2} alt="" />
        </div>
        <div className='MainGallery-col' />
        <div className='MainGallery-col' />
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
