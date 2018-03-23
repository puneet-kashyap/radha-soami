import React from 'react';
import Card from 'material-ui/Card';
import ReactBotUI from './src';
import './ChatBot.css';

const ChatBot = () => {
  return(
    <div className="container">
        <div className="row" style={{'justifyContent':'center','alignItems':'center'}}>

          <div className="col-md-6 text-center">
            <Card raised style={{'paddingBottom':'15px', 'marginBottom': '20px'}}>
              <ReactBotUI
                id="chat-bot"
                title={'Chat with us.'}
                dialogflow={{accessToken: process.env.REACT_APP_BOT_ID}}
                dialogHeightMax={350}
                isVisible={true}
                isUserHidden={false}
              />
            </Card>
          </div>
      </div>
  </div>
  )
}

export default ChatBot;
