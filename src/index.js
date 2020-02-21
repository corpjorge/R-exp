import React from 'react';
import ReactDOM from 'react-dom';
import IconBadge from './IconBadge';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IconBadge />, document.getElementById('root'));
serviceWorker.unregister();
