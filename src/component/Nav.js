import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { happy } from "./Api";
import siren from "./images/siren.png";
import "./Nav.css"

const NavComponent = () => {
  const [data] = useContext(happy)

  return (
    <div>
      
      
      <img className="image"  src={siren} alt="siren"/>

      <div className='navigation_bar' >
        <Link to="/" className='nav_catogory'>Home</Link>

        {data.filter((value) => value.id === 1).map((val) => (

          <Link to={`/category/${val.name}`} className='nav_catogory'>{val.name}</Link>

        ))}
       
        

      </div>
      <hr className="horizontal1"></hr>

    </div>
  );
};


export default NavComponent;
