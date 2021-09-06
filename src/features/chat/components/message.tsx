import { Component } from 'react';
import { FROM_BOT } from '../consts';
import MessageModel from '../models/message.model';

export interface MessageProps {
    model: MessageModel;
}

export class Message extends Component<MessageProps> {

    formatMessage(message: string[]) {
        return message.map((text: string, i: number) => (
            <p key={i}>{text}</p>
        ));
    }

    render() {
        const { sender, messages } = this.props.model;
        if (sender === FROM_BOT) {
            return (
                <div className="font-mono sm px-4 py-2 my-2 rounded-3xl bg-gray-200">
                    <p className="font-bold">BOT:</p>
                    {this.formatMessage(messages)}
                </div>
            );
        } else {
            return (
                <div className="font-mono sm px-4 py-2 my-2 rounded-3xl bg-gray-100">
                    <p className="font-bold">USER:</p>
                    {this.formatMessage(messages)}
                </div>
            );
        }
    }
}
