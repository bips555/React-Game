import React, { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];
  const handleonclick = (choice) => {
    setUserChoice(choice);
    generateComputeChoice();
  };
  const generateComputeChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };
  const reset = () =>
  {
window.location.reload()
  }
useEffect(()=>
{
  const comboMoves = userChoice + computerChoice
  if(userPoints <= 4 && computerPoints<=4)
  
    if(comboMoves === 'rockscissors' || comboMoves === 'scissorspaper' || comboMoves === 'paperrock')
    {
      const updatedUserPoints = userPoints +1 
      setUserPoints(updatedUserPoints)
      setTurnResult('User gets the point!')
      if (updatedUserPoints === 5)
      {
        setResult('User wins!')
        const gameOFF = true
setGameOver(gameOFF)
      }
    }
    
      if(comboMoves === 'rockpaper' || comboMoves === 'scissorrock' || comboMoves === 'paperscissors')
      {
        const updatedComputerPoints = computerPoints +1 
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5)
        {
          setResult('Computer wins!')
          const gameOFF = true
  setGameOver(gameOFF)
        }
      }

      if(comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors')
      {
setTurnResult('No one gets the point!')
      }
},[computerChoice,userChoice])


  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors</h1>
      <div className="score">
        <h1>{`User has ${userPoints} Points`}</h1>
        <h1>{`Computer has ${computerPoints} Points`}</h1>
      </div>
      <div className="choices">
        <div className="choice-user">
          <img
            className="user-hand"
            src={require(`./images/${userChoice}.png`)}
            style={{ width: "100px", height: "100px" }}
            alt={userChoice}
          />
        </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={require(`./images/${computerChoice}.png`)}
            style={{ width: "100px", height: "100px" }}
            alt={computerChoice}
          />
        </div>
      </div>
      <div className="button-div">
        {choices.map((choice, index) => 
          <button
            className="button"
            key={index}
            onClick={() => handleonclick(choice) 
            }
            disabled={gameOver}
          >{choice}</button>
        )}
      </div>
      <div className="result">
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      <div className="button-div">
       {gameOver && 
       <button className="button" onClick={()=>reset()}>Restart Game ??</button>
       }
      </div>
    </div>
  );
}

export default App;
