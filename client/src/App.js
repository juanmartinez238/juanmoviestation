import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import UserHome from './pages/UserHome';
import { AppContextProvider } from '../src/context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import Browse from './pages/Browse';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <AppContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path= '/' component= {Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/createaccount' component={CreateAccount} />
            <PrivateRoute exact path='/userhome' component={UserHome}/>
            <PrivateRoute exact path='/browse' component={Browse}/>
            <PrivateRoute exact path='/search' component={SearchPage}/>
          </Switch>
        </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
