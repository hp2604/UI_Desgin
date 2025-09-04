import './Section7.css'
import doctor2 from '../assets/doctor2.png'
import block from '../assets/block.png'

const Section7 = () => {
  return (
    <div>
        <div className="img-content-container">

        <div className="img-container">
        <img src={doctor2}  />
        </div>
        
        {/* <div className="block-img">
        <img src={block}  />
        </div> */}

        <div className="content-form-container">
        <div>
            <h1>Request An Appointment</h1>
            <p>Proin gravida nibh vel velit auctor aliquet justo.</p>
            <form action="sumbit">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/><br />
                <input type="text" placeholder='Email Address'/>
                <input type="text" placeholder='Phone No.'/><br />
                <input type="textarea" placeholder='Message' className='msg'/><br />
                <button>Send Request</button>
            </form>
            </div>
        </div>


        </div>
      
    </div>
  )
}

export default Section7
