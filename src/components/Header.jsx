import "./Header.css"
import phone from '../assets/Phone.png'
import Location from '../assets/Location.png'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'

const Header = () => {
  return (
    <div>
      <div className="head-bar">
        <div className="head-bar-1"><p className="head-bar-content">    Mon - Sat 8:00 17:30, Sunday - CLOSED</p></div>
        <div className="head-bar-2">
            
            <p className="head-bar-content"><img src={phone} />+654/4715-167</p>
        <p className="head-bar-content">allsmiles@qodeinteractive.com</p>
        
       <p className="head-bar-content"><img src={Location} />63 Wall St, New York, NY 10005</p></div>
    
      </div>

      <div className="logo-bar">
        <div className="logo-img">
    <img src={logo} /> 
        </div>

        <div className="nav-link">
            <a href="#">HOME</a>
            <a href="#">PAGES</a>
            <a href="#">STAFF</a>
            <a href="#">BLOG</a>
            <a href="#">SHOP</a>
            <a href="#">LANDING</a>
        </div>

        <div className="search-bar">
            <p>SEARCH</p>
            <img src={menu}/>
        </div>
      </div>

      <div className="background-img">
        <p><span>DENTAL PRACTICE</span></p>
        <h1><span>We provide the best </span><br /><span>services out there</span></h1>
      </div>

    </div>
  )
}

export default Header
