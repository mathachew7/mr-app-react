import './App.css'
import './tailwind.css'
import NavigationDrawer from './components/NavigationDrawer';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Users from './components/UserManagement/Users'
import MyAppBar from './components/AppBar'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex w-full h-full">
          <NavigationDrawer></NavigationDrawer>

          <div className="content">
            <MyAppBar></MyAppBar>
            <div className="p-5 text-gray-700">
              <Switch>
                <Route exact path="/">
                  <div className="dashboard-content bg-gray-200 rounded-tl-3xl">
                    <Dashboard></Dashboard>
                  </div>
                </Route>

                <Route path="/users">
                  <Users></Users>
                </Route>
              </Switch>
            </div>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
