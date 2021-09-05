import { Component } from "react";
import { FROM_BOT } from "../consts";

export interface MessageProps {
    message: string | string[];
    sender: string;
}

export class Message extends Component<MessageProps> {

    formatMessage(message: string | string[]) {
        if (Array.isArray(message) && message.length > 1) {
            return message.map((text: string) => (
                <p>{text}</p>
            ));
        }
        return message;
    }

    render() {
        const { sender, message } = this.props;
        if (sender === FROM_BOT) {
            return (
                <div className="font-mono sm px-4 py-2 rounded-3xl bg-gray-200">
                    <p className="font-bold">BOT:</p>
                    {this.formatMessage(message)}
                </div>
            );
        } else {
            return (
                <div className="font-mono sm px-4 py-2 rounded-3xl bg-gray-100">
                    <p className="font-bold">USER:</p>
                    {this.formatMessage(message)}
                </div>
            );
        }
    }
}
