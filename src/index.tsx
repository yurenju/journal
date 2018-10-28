import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { loadFontAwesome } from './utils';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

loadFontAwesome();
ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
