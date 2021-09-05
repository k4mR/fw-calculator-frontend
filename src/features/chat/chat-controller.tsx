import { Component } from "react";
import { getHistoryAction } from "./actions/get-history.action";
import { sendOperationAction } from "./actions/send-operation.action";
import { ChatContainer } from "./chat-container";
import { FROM_BOT, FROM_USER, WRONG_COMMAND_ERROR } from "./consts";

export class ChatController extends Component {
    state = {
        waiting: false,
        sender: FROM_USER,
        messages: [],
    }

    constructor(props: {}) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    async showOperationResult(value: number) {
        this.setState({
            messages: [value.toString()],
            sender: FROM_BOT,
            waiting: false,
        });
    }

    async showHistory(values: number[]) {
        this.setState({
            messages: values.map(value => value.toString()),
            sender: FROM_BOT,
            waiting: false,
        });
    }

    async showCommand(command: string) {
        this.setState({
            messages: [command],
            sender: FROM_USER,
            waiting: false,
        });
    }

    async showMessageError() {
        this.setState({
            messages: [WRONG_COMMAND_ERROR],
            sender: FROM_BOT,
            waiting: false,
        });
    }

    async sendMessage(message: string) {
        this.setState({
            waiting: true,
        });
        if (message.toLowerCase() === 'history') {
            const history = await getHistoryAction(10);
            this.showHistory(history);
        } else if (/[\+\-\*\/\^\%0-9]/g.test(message)) {
            this.showCommand(message);
            const result = await sendOperationAction(message);
            this.showOperationResult(result);
        } else {
            // wrong command
            this.showMessageError();
        }
    }

    render() {
        const { waiting } = this.state;
        if (waiting) {
            return (<div>LOADING...</div>);
        }

        return (
            <ChatContainer
                messages={this.state.messages}
                sender={this.state.sender}
                onSendMessage={this.sendMessage}
            />
        );
    }
}
