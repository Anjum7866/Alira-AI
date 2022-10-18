import React from "react";
import Alira from "../img/Alira.png"

function Interview() {
    
  return (
    <div className="container">
    <div className="rowC" >
        <div>
        <div className="App-header">ALIRA</div>
        <div className="App-subheader">Interview</div>
        <hr className="new" width="150" />
        <h4>Launch your journey to the Future of Work!</h4>
        <div className="mt-3">
        <p> Interview Alira's, the market leading conversational AI solution, to <br/>
            see the kind of roles and task that she can take on for your<br/>
            company, no matter the industry. Once you hire Alira in to your<br/>
            organisation, you're on a path to build a hybrid workspace, where <br/>
            digital and human worker collaborate for greater business value.</p>
        </div>
        
        <button>Interview Alira</button>;
        </div>
        <div >
        <img src={Alira} className="Alira" alt="logo" />
        
        </div>
        
    </div>
    </div>  
  )
}

export default Interview;

