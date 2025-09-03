import './Section3.css'
import doctor from '../assets/doctor-video.png'
import signature from '../assets/signature.png'

const section3 = () => {
  return (
    <div className='section3-container'>

        <div className="section3-content-container">
          <div className="section3-content-contain">
        <p><span>DENTAL PRATICE</span></p>
        <h1>Fully dedicated to your <br />dental health</h1>
        <p>Te veritus tractatos delicatissimi qui, justo diceret mentitum ut sit. Qui sed reque dicam, qui veri nullam vituperatoribus in. Tibique maiestatis sum quod sum ut alienum nec et, summo possim persequeris vix mea. Adhuc quodsi qui, sit no tale essent electram. Mei sum prodesset in pro, quo scripta feugait vidisse.</p>
        <img src={signature}/>
        </div>
        </div>

        <div className="section3-image-container">
            <img src={doctor}  />
        </div>
      
    </div>
  )
}

export default section3
