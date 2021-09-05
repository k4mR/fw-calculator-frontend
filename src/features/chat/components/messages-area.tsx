import { Component } from "react";
import { Message } from "./message";

export interface MessagesProps {
    messages: Array<string | string[]>,
    sender: string,
}

export class MessagesArea extends Component<MessagesProps> {
    state = {
        messages: [],
        sender: '',
    }

    static getDerivedStateFromProps(props: MessagesProps, state: any) {
        const { messages } = state;
        if (props.messages.length > 0) {
            return {
                messages: [props.messages, ...messages],
                sender: props.sender
            };
        }
        return null;
    }

    render() {
        const { messages, sender } = this.state;
        return (
            <ul className="flex flex-col-reverse flex-grow overflow-auto overscroll-contain shadow-lg shadow-inner w-full bg-white font-mono sm p-5 border-4 rounded-3xl border-black">
                {messages.map((message: string | string[], i: number) => (
                    <li key={i} className="w-min"><Message sender={sender} message={message} /></li>
                ))}
            </ul>
        );

    }
}
