import React from 'react';
import MyBotCard from './MyBotCard';

function BotCollection({bots, handleAddBot}){
    return(
        <div>
            <h2>Bot Collection</h2>
            <div className="bot-collection">
                {bots.map(bot => (<MyBotCard key={bot.id} bot={bot} handleAddBot={handleAddBot}/>
                ))}
            </div>
        </div>
    );
};
export default BotCollection;