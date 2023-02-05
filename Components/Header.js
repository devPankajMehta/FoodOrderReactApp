import "/Asset/Styles/header.css";
import React, { Children, useContext } from "react";
import "../style.css"
import logo from "../Asset/Images/logo.jpg"
import {json, Link} from "react-router-dom"
import About from "./About";
import Contacts from "./Contacts";
import { useContext } from "react";
import DemoContext from "../Helpers/DemoContext";
import Mission from "./Mission";
import { useSelector } from "react-redux";

const Header =()=> { 

    const d=useContext(DemoContext);
   const cartItems=useSelector((state)=>state.cart.items);

    return ( 
       <div className="flex">

<div class="flex flex-wrap">
  <div class="flex-auto w-14 h-14">
    01
  </div>
  <div class="flex-auto w-64 ...">
    02
  </div>
  <div class="flex-auto w-32 ...">
    03
  </div>
</div>
            <div className="flex flex-initial">
                <img src={logo} className="object-contain h-10 w-2" width="40"/>
            </div>
            <div className="w-7/12 flex-initial">
            
               <input className="inputHeaderSearch" type="text" />
               <div className="inputSearchButton">Search</div>
            </div>
            <div className="w-4/12 flex-initial">
            
               <div className="headerUserInfo"></div>
                <ul className="headerNavLinks">
                    
                <li className="haederLinks"><Link to="/">Home</Link></li>
                <li className="haederLinks"><Link to="/mission">Mission</Link></li>
                <li className="haederLinks"><Link to="/about" >About us</Link></li>
                <li className="haederLinks"><Link to="/contact">Contacts</Link> </li>
                <li className="haederLinks"> <Link to="/cart">Cart</Link></li>
                    
                </ul>
                
            </div>

            <div>{cartItems.length}</div>
            
       </div>
       )
}
export default Header;