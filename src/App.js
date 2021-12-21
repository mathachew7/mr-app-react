import './App.css'
import './tailwind.css'
import NavigationDrawer from './components/NavigationDrawer';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyAppBar from './components/AppBar'

import Users from './components/UserManagement/Users'
import Stokiest from './components/Stokiest/Stokiest';
import Chemists from './components/Chemist/Chemist';
import Doctor from './components/Doctor/Doctors';
import DailyCallReport from './components/DailyCallReport/DailyCallReport';

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
                  <div className="dashboard-content rounded-tl-3xl">
                    <Dashboard></Dashboard>
                  </div>
                </Route>

                <Route path="/users">
                  <Users></Users>
                </Route>

                <Route path="/stokiest">
                  <Stokiest></Stokiest>
                </Route>

                <Route path="/chemist">
                  <Chemists></Chemists>
                </Route>

                <Route path="/doctor">
                  <Doctor></Doctor>
                </Route>

                <Route path="/dailyCallReport">
                  <DailyCallReport></DailyCallReport>
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
