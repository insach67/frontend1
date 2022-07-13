import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import siren from "../images/siren.png";
function Nav() {
  return (
    <>
      <div>
       
          <img className="image"  src={siren} alt="siren"/>
          <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
              <i class="fas fa-bars"></i>
            </label>
            <ul>
              <li>
                <Link to="/homes">Home</Link>
              </li>
              <li>
                <Link to="/bollywood">Bollywood</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
              <li>
                <Link to="/hollywood">Hollywood</Link>
              </li>
              <li>
                <Link to="/Fitness">Fitness</Link>
              </li>
              <li>
                <Link to="/food">Business</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <hr></hr>
            </ul>
           </nav>
          
        </div>
    </> 
  );
}

export default Nav;
