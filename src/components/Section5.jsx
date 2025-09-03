import './Section5.css'
import lady from '../assets/lady.png'

const Section5 = () => {
  return (
    <div>
        <div className="discount-panel">

            <div className="discount-content">
                <h1>Discount dental plans save you <span>up to 60%</span></h1>
                <p>Sea te illum euismod, ex dicta noluisse qui, sea an hinc pericula imperdiet sum.</p>
            </div>

            <div className="discount-button">
                <button>LEARN MORE</button>
            </div>

        </div>

        <div className="content-panel">
           
            <div className="nav-links">
            <p>Root Canal Specialist</p>
            <p>Alignment Specialist</p>
            <p>Cosmetic Dentistry</p>
            <p>Live Dental Advisory</p>
            </div>

            <div className="content-image-container">
                
                <div className="content-container">
                    <h1>Fast & professional treatments for <br />every patient</h1>
                    <p>Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd mi auctor.</p>
                    <p>Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.</p>
                </div>

                <div className="image-container">
                <img src={lady} />
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Section5
