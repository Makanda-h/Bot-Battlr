import React from 'react';

function MyBotArmy ({MyBotArmy, handleDischargeBot, handleReleaseBot}){
    return(
        <div>
            <h2>My Bot Army</h2>
            <div className="my-army">
                {MyBotArmy.map(bot => (
                    <div key={bot.id} className="botcard">
                        <img src={bot.avatar_url} alt={bot.name} />
                        <h3>{bot.name}</h3>
                        <button onClick={() => handleDischargeBot(bot.id)}>Discharge</button>
                        <button onClick={() => handleReleaseBot(bot)}>Release</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MyBotArmy;