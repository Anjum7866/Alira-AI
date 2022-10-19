import React, { Component } from 'react';
  
class Alira extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        height:'150vh',
        marginTop:'-70px',
            };
    return (
      <div style={myStyle}>
        <div className='container'>
        <h1> geeksforgeeks </h1> <div className="App-header">ALIRA</div>
   <div className="App-subheader">THE MOST HUMAN AI</div>
   <hr className="new" width="400" />
   <div className='rowC'>

   <div className="card">
    <div className="text">Join us!</div>
    <div className="text"><h4>What's Next in Conversational AI</h4></div> 
    </div>
    <div className="cardBig">
    <div className="text">Going Live in</div>
    <div className='rowC'>
        <div className="margin">
        <div className='rowC'>
        <div className="cardSmall">
            <div className="text">1</div>
        </div>
        <div className="cardSmall">
            <div className="text">1</div>
        </div>
        </div>
        <p>Days</p>
        </div>
        <div className="margin">
        <div className='rowC'>
        <div className="cardSmall">
            <div className="text">0</div>
        </div>
        <div className="cardSmall">
            <div className="text">6</div>
        </div>
        </div>
        <p>Hours</p>
        </div>
        <div className="margin">
        <div className='rowC'>
        <div className="cardSmall">
            <div className="text">3</div>
        </div>
        <div className="cardSmall">
            <div className="text">3</div>
        </div>
        </div>
        <p>Minutes</p>
        </div>
        <div className="margin">
        <div className='rowC'>
        <div className="cardSmall">
            <div className="text">2</div>
        </div>
        <div className="cardSmall">
            <div className="text">2</div>
        </div>
        </div>
        <p>Seconds</p>
        </div>
        <div className="cardBlank">
          <div className="text">Register for Seminar Today!</div>  
          </div>
        
    </div>
    </div>
  </div>
  </div>
      </div>
    );
  }
}
   
export default Alira;