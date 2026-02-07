import Header from '../components/header'
import Footer from '../components/footer'
import DonateInst from "../components/donateinstruments";

import { HelmetProvider } from 'react-helmet-async';

export default function Donate() {
    return (
      <div style={{backgroundColor: '#FFFDF4'}}>
          <HelmetProvider>
            <title>Donate</title>
            <meta name="description" content="Danations for Sur Saathi a Mumbai-based music initiative offering free choir, rhythm, and performance opportunities for children to build confidence and joy." />
            <link rel="canonical" href="https://sursaathi.in/donate" />
        </HelmetProvider>
        <Header />
          <div className="Donate-Shifter-Div">
              {/*
              <button onClick={DFon} className="Donate-Shifter" id="funds">Donate Funds</button>
              
              <button onClick={DIon} className="Donate-Shifter" id="inst">Donate Instrument</button>
              */}
          </div>
          {/*
          <div className="DonateFundsActivation">
            <DonateFunds />
          </div>
          */}
          <div className="DonateInstrumentActivation">
            <DonateInst />
          </div>
        <Footer />
      </div>
  );
}
  