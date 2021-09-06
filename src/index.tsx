import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
