import { Component } from "react";
import { ChatContainer } from "./chat-container";

export class ChatController extends Component {

    onSendMessage(message: string) {
        if (message.toLowerCase() === 'history') {
            // ask history
        } else if (/[+-*/^%0-9]/g.test(message)) {
            // send operation
        } else {
            // wrong command
        }
    }

    render() {
        return <ChatContainer />;
    }
}
