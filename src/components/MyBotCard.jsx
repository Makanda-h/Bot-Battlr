import React from 'react';

function MyBotCard({bot, handleAddBot}) {
    return (
      <div className="botcard" onClick={() => handleAddBot(bot)}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <div className="bot-desc">
          <p>Armor: {bot.armor}</p>
          <p>Bot Class: {bot.bot_class}</p>
          <p>Damage: {bot.damage}</p>
          <p>Health: {bot.health}</p>
          <h4>Catchphrase {bot.catchphrase}</h4>
          <button onClick={()=> handleAddBot(bot)}>Add to Army</button>
        </div>
      </div>
    );
} 

export default MyBotCard;