import { ChangeEvent, Component } from "react";

export interface InputFieldProps {
    onSendMessage: Function;
}

export class InputFiled extends Component<InputFieldProps> {
    state = {
        text: ""
    }

    onChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ text: event.target.value });
    }

    onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.setState({ text: "" });
        this.props.onSendMessage(this.state.text);
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <input
                        onChange={e => this.onChange(e)}
                        value={this.state.text}
                        type="text"
                        placeholder="type and press ENTER"
                        autoFocus={true}
                        className="flex-none focus:outline-none shadow-lg shadow-inner w-full font-mono sm p-3 border-4 rounded-full py-3 px-6 border-black"
                    />
                </form>
            </div>
        );
    }
}
