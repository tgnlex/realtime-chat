import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import React from 'react';

const Chats = (props) => {
    const chatProps = useMultiChatLogic('f2021a0a-2c85-4c81-9093-57f266b9ff70', props.user.username, props.user .secret);
    return(
        <div style ={{ height: '100vh'}}className="background">
          <MultiChatSocket {...chatProps}/>
          <MultiChatWindow {...chatProps} styles={{ height: '100%'}} />
        </div>
    )
}

export default Chats;