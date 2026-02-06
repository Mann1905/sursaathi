import YellowNote from '../Images/SVG/Artboard 3.svg'
import GreenNote from '../Images/SVG/Artboard 4.svg'

import Wave1 from '../Images/SVG/Donate-LeftWave.svg'
import Wave2 from '../Images/SVG/wave-right.svg'

export default function DonateFunds() {  
    return (
      <div style={{backgroundColor: '#FFFDF4'}}>
          <div className="Donate-Funds-Section">
                <div className='graphicelements'>
                <div className="Donate-Wave-Left">
                  <img src={Wave1} alt="" />
              </div>
              <div className="Donate-Wave-Right">
                  <img src={Wave2} alt="" />
              </div>
              <div className="green-note" id="green12">
                  <img src={GreenNote} alt="" />
              </div>
              <div className="yellow-note" id="yellow5">
                  <img src={YellowNote} alt="" />
              </div>
                </div>
              <div className="Donate-Funds-Section-Info">
                  <h2>Your Contribution Can Change a Child's Tune</h2>
                  <h3>
                      Every rupee brings us closer to a louder, kinder world.
                  </h3>
                  <p>
                      Support free, inclusive music education programs for underprivileged children in Mumbai. Your donation helps us provide weekly classes, instruments, performance opportunities and creative expression.
                  </p>
                  <div>
                      <button className="Donate-Button">Click here to Donate</button>
                  </div>
              </div>
          </div>
      </div>
  );
}
  