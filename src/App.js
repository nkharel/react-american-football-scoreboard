//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [homeTotal, sethomeTotal] = useState(0);
  const [awayTotal, setawayTotal] = useState(0);
  // const [msState, setMsState] = useState(0);
  // const [secState, setSecState] = useState(0);
  // const [minTensState, setMinTensState] = useState("");
  // const [minOnesState, setMinOnesState] = useState(10);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeTotal}</div>
          </div>
          <div className="timer">{minTensState}{minOnesState}:{secState}{msState}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTotal}</div>
          </div>
        </div>
        <BottomRow />
      </section>

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" 
          onClick={() => {
            sethomeTotal(homeTotal + 7);
          }}>
            Home Touchdown
            </button>
          <button className="homeButtons__fieldGoal"
          onClick={() => {
            sethomeTotal(homeTotal + 3);
          }}>
          Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"
          onClick={() => {
            setawayTotal(awayTotal + 7);
          }}>
            Away Touchdown
            </button>
          <button className="awayButtons__fieldGoal"
          onClick={() => {
            setawayTotal(awayTotal + 3);
          }}>
            Away Field Goal
            </button>
        </div>
      </section>
    </div>
  );
  // useEffect(() => {
  //   let stop = false;
  //   function timer(){
  //     clearInterval(timer);
  //     let thisTimer = setInterval(() => {
  //       if (stop === false){
  //         if (msState === 0){
  //           clearInterval(thisTimer);
            
  //           setSecState("");
  //           setMsState(59)
            
  //         } else if (msState < 11 && msState > 0){
  //           clearInterval(thisTimer);
            
  //           setSecState(0);
  //           setMsState(msState-1);
  //         } else {
  //           clearInterval(thisTimer);
  //           setMsState(msState -1);
            
  //         }
  //       } 
  //       else {
  //         clearInterval(thisTimer);
  //       } 
        
  //       let thatTimer = setInterval(() => {
  //         if (stop === false){
  //           if (minOnesState > 10){
  //             clearInterval(thatTimer);
  //             setMinOnesState(minOnesState-1);
              
  //           } else if (minOnesState < 11 && minOnesState > 0){
  //             // console.log("please");
  //             setMinTensState(0); 
  //             clearInterval(thatTimer);
  //             setMinOnesState(minOnesState-1);
              
              
            
  //           } else {
  //             clearInterval(thatTimer);
  //             stop = true;
  //           }
            
  
  //         }
  //       },10000)

  //     }, 1000);

   

  //   }
    
  //   timer();
    

  // })



}


export default App;
