import "/Asset/Styles/header.css";
import "../style.css"
import logo from "../Asset/Images/logo.jpg"
import {Link} from "react-router-dom"
import About from "./About";
import Contacts from "./Contacts";

const Header =()=>(

       <div className="flex-Container">
            <div className="flex-Items header-Left">
                <img src={logo} className="logo-Image"/>
            </div>
            <div className="flex-Items header-Middle">
            
               <input className="inputHeaderSearch" type="text" />
               <div className="inputSearchButton">Search</div>
            </div>
            <div className="flex-Items header-Right">
            
               <div className="headerUserInfo"></div>
                <ul className="headerNavLinks">
                    
                <li className="haederLinks"><Link to="/">Home</Link></li>
                <li className="haederLinks"><Link to="/mission">Mission</Link></li>
                <li className="haederLinks"><Link to="/about" >About us</Link></li>
                <li className="haederLinks"><Link to="/contact">Contacts</Link> </li>
                    
                </ul>
                
            </div>
       </div>

)

export default Header;