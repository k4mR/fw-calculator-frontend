import { Component } from 'react';
import MessageModel from '../models/message.model';
import { Message } from './message';

export interface MessagesProps {
    models: MessageModel[],
}

export class MessagesArea extends Component<MessagesProps> {
    state = {
        models: [],
    }

    static getDerivedStateFromProps(props: MessagesProps, state: any) {
        const { models } = state;
        if (props.models.length > 0) {
            return {
                models: [...props.models, ...models],
            };
        }
        return null;
    }

    render() {
        const { models } = this.state;
        return (
            <ul className="flex flex-col-reverse flex-grow overflow-auto overscroll-contain shadow-lg shadow-inner w-full bg-white font-mono sm p-5 border-4 rounded-3xl border-black">
                {models.map((model: MessageModel, i: number) => (
                    <li key={i} className="w-min"><Message model={model} /></li>
                ))}
            </ul>
        );

    }
}
