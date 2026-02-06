import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import RedNote from '../Images/SVG/Artboard 2.svg';
import YellowNote from '../Images/SVG/Artboard 3.svg';
import GreenNote from '../Images/SVG/Artboard 4.svg';
import Wave1 from '../Images/SVG/Donate-LeftWave.svg';
import Wave2 from '../Images/SVG/wave-right.svg';
import Wave3 from '../Images/SVG/WaveLine.svg';

import InstagramLogo from '../Images/SVG/Frame 42.svg';
import LinkedinLogo from '../Images/SVG/Frame 43.svg';
import YoutubeLogo from '../Images/SVG/Frame 44.svg';

import { HelmetProvider } from 'react-helmet-async';

export default function Volunteer() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [grade, setGrade] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend when ready
    alert('Thank you for your interest in volunteering! We will get in touch soon.');
  };

  return (
    <div style={{ backgroundColor: '#FFFDF4' }}>
      <HelmetProvider>
        <title>Become a Volunteer | Sur Saathi</title>
        <meta name="description" content="Become a volunteer with Sur Saathi – a Mumbai-based music initiative offering free choir, rhythm, and performance opportunities for children." />
        <link rel="canonical" href="https://sursaathi.in/volunteer" />
      </HelmetProvider>
      <Header />

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
            <div className="red-note" id="red8">
              <img src={RedNote} alt="" />
            </div>
          </div>

          <div className="Donate-Instrument-Section-Info">
            <h2>
              Become a Volunteer
            </h2>
            <p>
              Sur Saathi is a community-driven initiative that uses the power of music to create a safe, inclusive space where every child feels heard and celebrated. Through singing, instrument training, and workshops, we help children discover their voices and build confidence through creative expression.
            </p>
            <div className="Donate-Instrument-Section-Info-Connections">
              <a href="tel:+918591952169" className="Donate-Instrument-Links-a">
                <i className="fas fa-phone"></i>+91 8591952169
              </a>
              <a href="tel:+917400030602" className="Donate-Instrument-Links-a">
                <i className="fas fa-phone"></i>+91 7400030602
              </a>
              <a href="mailto:sursaathi.music@gmail.com" className="Donate-Instrument-Links-a">
                <i className="fas fa-envelope"></i>sursaathi.music@gmail.com
              </a>
              <a href="https://maps.google.com/?q=Mumbai,+India" target="_blank" rel="noopener noreferrer" className="Donate-Instrument-Links-a">
                <i className="fas fa-map-marker-alt"></i>Mumbai, IN
              </a>
            </div>
            <div className="Donate-Instrument-Socials">
              <a href="https://www.instagram.com/sursaathi.music/" className="Donate-Instrument-Socials-a" aria-label="Instagram">
                <img src={InstagramLogo} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/sur-saathi" className="Donate-Instrument-Socials-a" aria-label="LinkedIn">
                <img src={LinkedinLogo} alt="" />
              </a>
              <a href="https://www.youtube.com/@Sur-Saathi" className="Donate-Instrument-Socials-a" aria-label="YouTube">
                <img src={YoutubeLogo} alt="" />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="donateform">
              <div className="form-input">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div className="form-input">
                <label>Age</label>
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
              </div>
              <div className="form-input">
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div className="form-input">
                <label>Grade</label>
                <input type="text" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
              </div>
              <div className="form-input">
                <label>Phone No</label>
                <input type="tel" placeholder="Phone No" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="form-input">
                <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-input">
                <label>Parent Name</label>
                <input type="text" placeholder="Parent Name" value={parentName} onChange={(e) => setParentName(e.target.value)} />
              </div>
              <div className="form-input">
                <label>Parent Phone Number</label>
                <input type="tel" placeholder="Parent Phone Number" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
