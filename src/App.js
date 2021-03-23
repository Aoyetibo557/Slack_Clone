import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import {useStateValue} from './StateProvider'
import EmptyState from './components/EmptyState';
import NotFound from './components/NotFound';
import Chatbot from './components/Chatbot';

function App() {
 
  const[{user}] = useStateValue();


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
            <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                  <Route exact path="/room/:roomId" component="" >
                    <Chat />
                  </Route>

                  <Route exact path="/chatbot" component="" >
                   <Chatbot />
                  </Route>

                  <Route exact path="/" component="" >
                    <EmptyState />
                  </Route>

                  <Route component={NotFound} />
                  
              </Switch>
            </div>
            </>
        )}
        
      </Router>
      
    </div>
  );
}

export default App;
