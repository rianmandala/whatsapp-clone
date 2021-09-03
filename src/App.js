import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { StateContext } from './provider/StateProvider';

function App() {

  const [{user}, dispatch] = useContext(StateContext)

  return (
    <div className="app">
      {
        user?(
          <div className="app__body">
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Sidebar />
                </Route>
                <Route path="/groups/:id">
                  <Sidebar />
                  <Chat />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        ):(
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
