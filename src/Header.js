import React from "react"
import ReactDOM  from "react"


export default function Header(){
    return(
      <header>
        <nav className="nav">
          <img src='https://blog.atomikod.com/wp-content/uploads/2020/12/reactjs.jpg' alt='' className='nav-logo'/>
          <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  };

 