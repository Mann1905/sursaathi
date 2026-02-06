import axios from 'axios';

import RedNote from '../Images/SVG/Artboard 2.svg'
import YellowNote from '../Images/SVG/Artboard 3.svg'
import GreenNote from '../Images/SVG/Artboard 4.svg'

import Wave1 from '../Images/SVG/Donate-LeftWave.svg'
import Wave2 from '../Images/SVG/wave-right.svg'
import Wave3 from '../Images/SVG/WaveLine.svg'

import InstagramLogo from "../Images/SVG/Frame 42.svg"
import LinkedinLogo from "../Images/SVG/Frame 43.svg"
import YoutubeLogo from "../Images/SVG/Frame 44.svg"


import PageImage11 from '../Images/Donation/01.jpeg'
import PageImage12 from '../Images/Donation/02.jpeg'
import PageImage13 from '../Images/Donation/03.jpeg'
import PageImage15 from '../Images/Donation/04.jpeg'
import PageImage16 from '../Images/Donation/05.jpeg'
import PageImage17 from '../Images/Donation/06.jpeg'

import { useEffect, useState, useRef } from "react";

export default function DonateInst() { 
    const [fname, setFname] = useState('');
    const [femail, setFemail] = useState('');
    const [fphone, setFphone] = useState('');
    const [fmessage, setFmessage] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("route", "donation"); // 💡 Add this line
        formData.append("name", fname);
        formData.append("email", femail);
        formData.append("phone", fphone);
        formData.append("message", fmessage);
      
        if (file) {
          formData.append("attachment", file);
        }
      
        try {
          const res = await axios.post("https://sursaathi.in/mail.php", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          alert("Success: " + res.data.message);
        } catch (err) {
          alert("Failed: " + (err.response?.data?.error || "Unknown error"));
        }
      };      

    const trackRef = useRef(null);
    const intervalRef = useRef(null);

    const images = [
        PageImage11,
        PageImage12,
        PageImage13,
        PageImage15,
        PageImage16,
        PageImage17
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
                <div>
                <div className="Donate-Instrument-Section">
                    <div className="graphicelements">
                        <div className="Donate-Wave-Left">
                            <img src={Wave1} alt="" />
                        </div>
                        <div className="Donate-Wave-Right">
                            <img src={Wave2} alt="" />
                        </div>
                        <div className="Donate-Wave-Right-Page">
                            <img src={Wave3} alt="" />
                        </div>
                        <div className="green-note" id="green12">
                            <img src={GreenNote} alt="" />
                        </div>
                        <div className="yellow-note" id="yellow5">
                            <img src={YellowNote} alt="" />
                        </div>
                        <div className="yellow-note" id="yellow5">
                            <img src={YellowNote} alt="" />
                        </div>
                        <div className="red-note" id="red8">
                            <img src={RedNote} alt="" />
                        </div>
                    </div>
                        <div className="Donate-Instrument-Section-Info">
                            <h2>Give Your Old Instrument a New Voice</h2>
                            <h3>
                                Donate an instrument — and give a child the gift of music.
                            </h3>
                            <p>
                                Got a keyboard gathering dust? A violin no one uses? Donate it and watch as instruments find new life through music and creativity. Let us spark creativity, joy, and confidence in children who need it most.
                            </p>
                            <div className="Donate-Instrument-Section-Info-Connections">
                                <a href="tel:+919930052169" className="Donate-Instrument-Links-a">
                                <i className="fas fa-phone"></i>+91 9930 052 169
                                </a>
                                <a href="tel:+919999818009" className="Donate-Instrument-Links-a">
                                <i className="fas fa-phone"></i>+91 9999 818 009
                                </a>
                                <a href="mailto:sursaathi.music@gmail.com" className="Donate-Instrument-Links-a">
                                <i className="fas fa-envelope"></i>sursaathi.music@gmail.com
                                </a>
                                <a href="https://maps.google.com/?q=Mumbai,+India" target="_blank" rel="noopener noreferrer" className="Donate-Instrument-Links-a">
                                <i className="fas fa-map-marker-alt"></i>Mumbai, IN
                                </a>
                            </div>
                            <div className="Donate-Instrument-Socials">
                                <a href="https://www.instagram.com/sursaathi.music/" className="Donate-Instrument-Socials-a"><img src={InstagramLogo} alt="SurSaathi Instagram Page Linked Logo" /></a>
                                <a href="https://www.linkedin.com/company/sur-saathi" className="Donate-Instrument-Socials-a"><img src={LinkedinLogo} alt="SurSaathi LinkedIn Page Linked Logo" /></a>
                                <a href="https://www.youtube.com/@Sur-Saathi" className="Donate-Instrument-Socials-a"><img src={YoutubeLogo} alt="SurSaathi YouTube Page Linked Logo" /></a>
                            </div>
                        </div>
                        <div>
                        <form onSubmit={handleSubmit} className="donateform">
                            <div className="form-input">
                                <label>Your Name</label>
                                <input type="text" name="name" placeholder="Name" value={fname} onChange={(e) => setFname(e.target.value)} required/>
                            </div>
                            <div className="form-input">
                                <label>Your Email</label>
                                <input type="email" name="email" placeholder="Email" value={femail} onChange={(e) => setFemail(e.target.value)}   required/>
                            </div>
                            <div className="form-input">
                                <label>Your Phone No.</label>
                                <input type="tel" name="phone" placeholder="Phone No" value={fphone} onChange={(e) => setFphone(e.target.value)} required/>
                            </div>
                            <div className="form-input">
                                <label>Your Message</label>
                                <input type="textarea" name="Message" placeholder="Message" value={fmessage} rows={4} onChange={(e) => setFmessage(e.target.value)} required/>
                            </div>
                            <div className="form-input" id="uploadfiles">
                                <label>Upload Images
                                <input type="file" name="attachment" multiple onChange={(e) => setFile(e.target.files[0])} />
                                </label>
                            </div>
                            <div className="filesattached">{file ? file.name : 'No file chosen'}</div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                </div>
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
                <div className="How-Donate-Section">
                    <h2>How to Donate:</h2>
                    <div className="How-Donate-Section-Info">
                        <h3>1. Fill out the Instrument Donation Form</h3>
                        <p>
                            Let us know what you're looking to donate and share its history! [Form above]
                        </p>
                    </div>
                    <div className="How-Donate-Section-Info">
                        <h3>2. We'll Coordinate Pickup or Drop-off</h3>
                        <p>
                            Our team will reach out with collection details (Mumbai only for now).
                        </p>
                    </div>
                    <div className="How-Donate-Section-Info">
                        <h3>3. Your Instrument Finds a New Home</h3>
                        <p>
                            We share it with a child or workshop where it's needed most.
                        </p>
                    </div>
                </div>
        </div>
    );
}
  