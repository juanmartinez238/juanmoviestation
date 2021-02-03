import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import UserHome from './pages/UserHome';
import { AppContextProvider } from '../src/context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import Featured from './pages/Featured';
import SearchPage from './pages/SearchPage';
import ContactPage from './pages/ContactPage';
import ForgotPassword from './pages/ForgotPassword';
import UserContactPage from './pages/UserContactPage';


function App() {
  return (
    <AppContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path= '/' component= {Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/createaccount' component={CreateAccount} />
            <Route exact path= '/forgotpassword' component= {ForgotPassword} />
            <PrivateRoute exact path='/userhome' component={UserHome}/>
            <PrivateRoute exact path='/featured' component={Featured}/>
            <PrivateRoute exact path='/search' component={SearchPage}/>
            <Route exact path='/contact' component={ContactPage}/>
            <Route exact path='/usercontact' component={UserContactPage}/>
          </Switch>
        </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
