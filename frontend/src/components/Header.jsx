import React from "react";
 import reactDOM from "react-dom";

 function Header() {
     return (<header>

         <nav class="navbar navbar-expand-md sticky-top">
         <a class="navbar-brand" href="#">   
          <img src="logo.png"  alt="Logo" class="logo" width="200" height="200"/>
          </a>
         <ul class="navbar-nav ms-auto">

           <li class="nav-item">
             <a class="nav-link" href="#">Resources</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Notifications</a>
           </li>
           <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#">My Account</a>
           </li>
         </ul>
     </nav>
    </header>);
 }

 export default Header; 