import React, { useEffect, useState } from "react";
import BotCollection from "/src/components/BottCollection.jsx";
import MyBotArmy from "/src/components/MyBotArmy.jsx";
import "/src/index.css";


function App() {
  const [bots, setBots] = useState([]);//state to store the bots
  const [myBotArmy, setMyBotArmy] = useState([]);//state to store the bots in the army

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);


  function handleAddBot(bot) {
    if (!myBotArmy.includes((bot) => bot.id === bot.id)) {
      //check if the bot is already in the army
      setMyBotArmy([...myBotArmy, bot]); //add the bot to the army
    }
  };

  function handleReleaseBot(bot) {
    setMyBotArmy(myBotArmy.filter(bot => bot.id !== bot.id)); //remove the bot from the army
  };

  function handleDischargeBot(botId) {
    setMyBotArmy(myBotArmy.filter((bot) => bot.id !== botId)); //remove the bot from the army
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    });
  };

   return (
    <div className="App">
      <h1>Bott Battlr</h1>
      <div className="container">
        <div className="element1">
          <BotCollection bots={bots} handleAddBot={handleAddBot} />
        </div>
        <div className="element2">
          <MyBotArmy myBotArmy={myBotArmy} handleReleaseBot={handleReleaseBot} handleDischargeBot={handleDischargeBot} />
        </div>
   </div>
    </div>

  );
}

export default App;
