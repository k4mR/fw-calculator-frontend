import { Component } from 'react';
import { getHistoryAction } from './actions/get-history.action';
import { sendOperationAction } from './actions/send-operation.action';
import { ChatContainer } from './chat-container';
import { FROM_USER, WRONG_COMMAND_ERROR } from './consts';
import MessageModel from './models/message.model';

export class ChatController extends Component {
    state = {
        models: [],
    }

    constructor(props: {}) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    async showOperationResult(value: number) {
        this.setState({
            models: [MessageModel.createBotMessageModel(value)],
        });
    }

    async showHistory(values: number[]) {
        this.setState({
            models: [MessageModel.createBotMessageModel(values)],
        });
    }

    async showCommand(command: string) {
        this.setState({
            models: [MessageModel.createUserMessageModel(command)],
            sender: FROM_USER,
        });
    }

    async showMessageError() {
        this.setState({
            models: [MessageModel.createBotMessageModel(WRONG_COMMAND_ERROR)],

        });
    }

    async sendMessage(message: string) {
        if (message.toLowerCase() === 'history') {
            const history = await getHistoryAction(10);
            this.showHistory(history);
        } else if (/^[\+\-\*\/\^\%\.0-9 e]+$/.test(message)) {
            this.showCommand(message);
            const result = await sendOperationAction(message);
            this.showOperationResult(result);
        } else {
            // wrong command
            this.showMessageError();
        }
    }

    render() {
        return (
            <ChatContainer
                models={this.state.models}
                onSendMessage={this.sendMessage}
            />
        );
    }
}
