import { Component } from 'react';
import { InputFiled } from './components/input-field';
import { MessagesArea } from './components/messages-area';
import MessageModel from './models/message.model';

export interface ChatContainerProps {
    models: MessageModel[],
    onSendMessage: Function,
}

export class ChatContainer extends Component<ChatContainerProps> {
    render() {
        const { models, onSendMessage } = this.props;
        return (
            <div className="flex flex-col h-screen w-screen bg-gray-200 p-8">
                <MessagesArea models={models} />
                <InputFiled onSendMessage={onSendMessage} />
            </div>
        )
    }
}
