import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Route path="/">
            <Sidebar />
          </Route>
          <Route path="/groups/:id">
            <Chat />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
