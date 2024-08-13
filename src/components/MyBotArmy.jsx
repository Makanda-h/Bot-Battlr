import React from "react";

const MyBotArmy = ({ myBotArmy,handleReleaseBot, handleDischargeBot }) => {
  return (
    <div className="army-bot-card">
      <h2>My Bot Army</h2>
        {myBotArmy.map((bot) => (
            <div key={bot.id} className="botcard">
                <img src={bot.avatar_url} alt={bot.name} />
                <h3>{bot.name}</h3>
                <button onClick={() => handleDischargeBot(bot.id)}>Discharge</button>
                <button className="release-btn" onClick={() => handleReleaseBot(bot)}>Terminate Army</button>
            </div>
        ))}
    </div>
  );
};
export default MyBotArmy;
