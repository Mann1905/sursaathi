import Logo from "../Images/SVG/Logo_colored.svg"

import InstagramLogo from "../Images/SVG/Frame 42.svg"
import LinkedinLogo from "../Images/SVG/Frame 43.svg"
import YoutubeLogo from "../Images/SVG/Frame 44.svg"

export default function Footer() {  
    return (
      <div style={{backgroundColor: '#FFFDF4'}}>
        <div className="Footer-Main">
        <div className="Footer-Div">
            <div className="Footer-Info">
                <div className="Footer-Image">
                    <img src={Logo} alt="" />
                </div>
                <div className="Footer-Links">
                    <div className="Footer-Links-Div">
                        <a href="/" className="Footer-Links-a">Home</a>
                        <a href="/services" className="Footer-Links-a">Education</a>
                        <a href="/blogs" className="Footer-Links-a">Blog</a>
                        {/*
                        <a href="/events" className="Footer-Links-a">Events</a>
                        */}
                    </div>
                    <div className="Footer-Links-Div">
                        <a href="/donate" className="Footer-Links-a">Donate</a>
                        <a href="/about" className="Footer-Links-a">About Us</a>
                        <a href="/contact" className="Footer-Links-a">Contact Us</a>
                    </div>
                    <div className="Footer-Links-Div">
                        <a href="tel:+919930052169" className="Footer-Links-a"><i className="fas fa-phone"></i>+91 9930 052 169 </a>
                        <a href="tel:+919999818009" className="Footer-Links-a"><i className="fas fa-phone"></i>+91 9999 818 009</a>
                        <a href="mailto:sursaathi.music@gmail.com" className="Footer-Links-a"><i className="fas fa-envelope"></i>sursaathi.music@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="Footer-Socials">
                <a href="https://www.instagram.com/sursaathi.music/" className="Footer-Socials-a"><img src={InstagramLogo} alt="SurSaathi Instagram Page Linked Logo" /></a>
                <a href="https://www.linkedin.com/company/sur-saathi" className="Footer-Socials-a"><img src={LinkedinLogo} alt="SurSaathi LinkedIn Page Linked Logo" /></a>
                <a href="https://www.youtube.com/@Sur-Saathi" className="Footer-Socials-a"><img src={YoutubeLogo} alt="SurSaathi YouTube Page Linked Logo" /></a>
            </div>
        </div>
    </div>
      </div>
  );
}
  