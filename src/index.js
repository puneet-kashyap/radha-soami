import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './Components/Contact';
import Beas from './Components/Beas';
import Ruhani from './Components/Ruhani';
import Dayalbagh from './Components/Dayalbagh';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter forceRefresh={true}>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/Beas' component={Beas}/>
      <Route exact path='/Ruhani' component={Ruhani}/>
      <Route exact path='/Dayalbagh' component={Dayalbagh}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route path="*" render={() => (<Redirect to="/"/>)} />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
