import Header from '../components/header'
import Footer from '../components/footer'
import DonateFunds from "../components/donatefunds";
import DonateInst from "../components/donateinstruments";

import { HelmetProvider } from 'react-helmet-async';

export default function Donate() {
    const DFon = () => {
        const DF = document.querySelector(".DonateFundsActivation");
        const DI = document.querySelector(".DonateInstrumentActivation");
        const BTF = document.querySelector("#funds");
        const BTI = document.querySelector("#inst");
        BTI.style.color = "#DB7036"
        BTI.style.background = "#FFFDF4"
        BTF.style.color = "#FFFDF4"
        BTF.style.background = "#DB7036"
        DF.style.display = "block"
        DI.style.display = "none"

    };

    const DIon = () => {
        const DF = document.querySelector(".DonateFundsActivation");
        const DI = document.querySelector(".DonateInstrumentActivation");
        const BTF = document.querySelector("#funds");
        const BTI = document.querySelector("#inst");
        BTF.style.color = "#DB7036"
        BTF.style.background = "#FFFDF4"
        BTI.style.color = "#FFFDF4"
        BTI.style.background = "#DB7036"
        DF.style.display = "none"
        DI.style.display = "block"
    };

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
  