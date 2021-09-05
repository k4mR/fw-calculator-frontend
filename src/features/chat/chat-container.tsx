import { Component } from "react";
import { InputFiled } from "./components/input-field";
import { MessagesArea } from "./components/messages-area";

export interface ChatContainerProps {
    messages: string[],
    onSendMessage: Function,
    sender: string,
}

export class ChatContainer extends Component<ChatContainerProps> {
    render() {
        const { messages, sender, onSendMessage } = this.props;
        return (
            <div className="flex flex-col h-screen w-screen bg-gray-200 p-8">
                <MessagesArea
                    messages={messages}
                    sender={sender}
                />
                <InputFiled
                    onSendMessage={onSendMessage}
                />
            </div>
        )
    }
}
