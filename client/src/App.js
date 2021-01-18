import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';



function App() {
  return (
        <BrowserRouter>
          <Switch>
            <Route exact path= '/' component= {Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/createaccount' component={CreateAccount} />
          </Switch>
        </BrowserRouter>
  );
}

export default App;
