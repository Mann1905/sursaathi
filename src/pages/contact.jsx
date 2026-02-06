import Footer from "../components/footer";
import Header from "../components/header";
import InstagramLogo from "../Images/SVG/Frame 42.svg"
import LinkedinLogo from "../Images/SVG/Frame 43.svg"
import YoutubeLogo from "../Images/SVG/Frame 44.svg"

import RedNote from '../Images/SVG/Artboard 2.svg'
import GreenNote from '../Images/SVG/Artboard 4.svg'

import topcon from '../Images/SVG/Top-Con.svg'

import { useState } from 'react';
import axios from 'axios';
import { HelmetProvider } from 'react-helmet-async';

export default function Contact() {  
    const [fname, setFname] = useState('');
    const [femail, setFemail] = useState('');
    const [fphone, setFphone] = useState('');
    const [fmessage, setFmessage] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("route", "contact"); // 💡 Add this line
        formData.append("name", fname);
        formData.append("email", femail);
        formData.append("phone", fphone);
        formData.append("message", fmessage);
      
        try {
          const res = await axios.post("https://sursaathi.in/mail.php", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          alert("Success: " + res.data.message);
        } catch (err) {
          alert("Failed: " + (err.response?.data?.error || "Unknown error"));
        }
      };      

    return (
      <div style={{backgroundColor: '#FFFDF4'}}>
        <HelmetProvider>
            <title>Contact</title>
            <meta name="description" content="Contact Sur Saathi a Mumbai-based music initiative offering free choir, rhythm, and performance opportunities for children to build confidence and joy." />
            <link rel="canonical" href="https://sursaathi.in/contact" />
        </HelmetProvider>
        <Header />
        <div className="graphicelements">
            <div className="Contact-Top-Right">
                <img src={topcon} alt="" />
            </div>
            <div className="green-note" id="green11">
                <img src={GreenNote} alt="" />
            </div>
            <div className="red-note" id="red7">
                <img src={RedNote} alt="" />
            </div>
        </div>
        <div className="Contact-Section">
            <div className="Contact-Section-Info">
                <h1>
                Let's Make Music Together
                </h1>
                <p>
                Have a question? Want to volunteer, donate, or support our cause? We'd love to hear from you!
                </p>
                <div className="Contact-Section-Info-Connections">
                    <a href="tel:+919930052169" className="Contact-Links-a">
                    <i class="fas fa-phone"></i>+91 9930 052 169
                    </a>
                    <a href="tel:+919999818009" className="Contact-Links-a">
                    <i class="fas fa-phone"></i>+91 9999 818 009
                    </a>
                    <a href="mailto:sursaathi.music@gmail.com" className="Contact-Links-a">
                    <i class="fas fa-envelope"></i>sursaathi.music@gmail.com
                    </a>
                    <a href="https://maps.google.com/?q=Mumbai,+India" target="_blank" rel="noopener noreferrer" className="Contact-Links-a">
                    <i class="fas fa-map-marker-alt"></i>Mumbai, IN
                    </a>
                </div>
                <div className="Contact-Socials">
                    <a href="https://www.instagram.com/sursaathi.music/" className="Contact-Socials-a"><img src={InstagramLogo} alt="SurSaathi Instagram Page Linked Logo" /></a>
                    <a href="https://www.linkedin.com/company/sur-saathi" className="Contact-Socials-a"><img src={LinkedinLogo} alt="SurSaathi LinkedIn Page Linked Logo" /></a>
                    <a href="https://www.youtube.com/@Sur-Saathi" className="Contact-Socials-a"><img src={YoutubeLogo} alt="SurSaathi YouTube Page Linked Logo" /></a>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="contactform">
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
                <button type="submit">Submit</button>
            </form>
            </div>
        <Footer />
      </div>
  );
}
  