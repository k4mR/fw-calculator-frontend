import { FROM_BOT, FROM_USER } from '../consts';

export default class MessageModel {
    private constructor(
        public readonly sender: string,
        public readonly messages: string[],
    ) { }

    public static createBotMessageModel(value: string | number | number[]) {
        return new MessageModel(
            FROM_BOT,
            Array.isArray(value)
                ? value.map(entry => entry.toString())
                : [value.toString()]
        );
    }

    public static createUserMessageModel(value: string | number | number[]) {
        return new MessageModel(
            FROM_USER,
            Array.isArray(value)
                ? value.map(entry => entry.toString())
                : [value.toString()]
        );
    }
}