import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatController } from './features/chat/chat-controller';

class App extends Component {
  render() {
    return <ChatController />;
  }
}

export default App;
