//TODO: STEP 1 - Import the useState hook.
import React ,{useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
      const [home_score,setHomeScore] = useState(0);
      const [away_score,setAwayScore] = useState(0);
       const  [quarter__value, setQuarter] =useState(1);
      
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home_score}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away_score}</div>
          </div>
        </div>
        <BottomRow quarter__value={quarter__value}/>
      </section>
      <section className="buttons">
        <div className='quarter__value_btn_container'>
          <button onClick={ ()=> setQuarter(quarter__value +1) } className='quarter__value_btn'>Quarter</button>

        </div>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ ()=>setHomeScore(home_score +7) } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ ()=>setHomeScore(home_score + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={ ()=>setAwayScore(away_score +7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ ()=>setAwayScore(away_score +3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
