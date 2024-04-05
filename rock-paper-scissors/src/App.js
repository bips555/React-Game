import React, { useState, useEffect } from "react";
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
  const reset = () => {
    window.location.reload();
  };
  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4)
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "scissorspaper" ||
        comboMoves === "paperrock"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User gets the point!");
        if (updatedUserPoints === 5) {
          setResult("User wins!");
          const gameOFF = true;
          setGameOver(gameOFF);
        }
      }

    if (
      comboMoves === "rockpaper" ||
      comboMoves === "scissorrock" ||
      comboMoves === "paperscissors"
    ) {
      const updatedComputerPoints = computerPoints + 1;
      setComputerPoints(updatedComputerPoints);
      setTurnResult("Computer gets the point!");
      if (updatedComputerPoints === 5) {
        setResult("Computer wins!");
        const gameOFF = true;
        setGameOver(gameOFF);
      }
    }

    if (
      comboMoves === "paperpaper" ||
      comboMoves === "rockrock" ||
      comboMoves === "scissorsscissors"
    ) {
      setTurnResult("No one gets the point!");
    }
  }, [computerChoice, userChoice]);

  return (
    <div className="App  bg-white flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl my-10 font-bold ">Rock Paper Scissors</h1>
      <div className="score flex justify-between ">
        <h1  className=" text-xl  font-bold mx-3" >{`User has ${userPoints} Points`}</h1>
        <h1  className="text-xl  font-bold ">{`Computer has ${computerPoints} Points`}</h1>
      </div>
      <div className="choices flex mt-10 justify-center">
        <div className="choice-user mr-8">
          <img
            className="user-hand"
            src={require(`./images/${userChoice}.png`)}
            style={{ width: "100px", height: "100px" }}
            alt={userChoice}
          />
        </div>
        <div className="choice-computer ml-8">
          <img
            className="computer-hand"
            src={require(`./images/${computerChoice}.png`)}
            style={{ width: "100px", height: "100px" }}
            alt={computerChoice}
          />
        </div>
      </div>
      <div className="button-div mt-10 bg-[#171816] hover:bg-white p-3">
        {choices.map((choice, index) => (
          <button
            className=" text-black hover:bg-[#000] hover:text-white bg-[#f7f9f9] font-bold py-2 px-4 rounded mr-2"
            key={index}
            onClick={() => handleonclick(choice)}
            disabled={gameOver}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="result mt-10">
        <h1 className="font-bold text-2xl">Turn Result: {turnResult}</h1>
        <h1 className="font-bold text-2xl">Final Result: {result}</h1>
      </div>
      <div className="button-div mt-10">
        {gameOver && (
          <button className="text-white hover:text-black hover:bg-[#d1d1d1] bg-[#18191a] font-bold text-2xl hover:text-4xl py-2 px-4 rounded mr-2" onClick={() => reset()}>
            Restart Game ??
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
