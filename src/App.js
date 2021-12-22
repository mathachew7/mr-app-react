import './App.css'
import './tailwind.css'
import NavigationDrawer from './components/NavigationDrawer';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyAppBar from './components/AppBar'

import Users from './components/UserManagement/Users'
<<<<<<< HEAD
import Category from './components/productManagement/Category'
import GenericName from './components/productManagement/GenericName'
import Product from './components/productManagement/Product';
import MyAppBar from './components/AppBar'
=======
import Stokiest from './components/Stokiest/Stokiest';
import Chemists from './components/Chemist/Chemist';
import Doctor from './components/Doctor/Doctors';
import DailyCallReport from './components/DailyCallReport/DailyCallReport';
import DoctorCall from './components/DoctorCall/DoctorCall';
>>>>>>> a8c866af645b3e4a56b963da38668287efac199e


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
<<<<<<< HEAD
                <Route path="/category">
                  <Category></Category>
                </Route>
                <Route path="/generic">
                  <GenericName></GenericName>
                </Route>
                <Route path="/product">
                  <Product></Product>
=======

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

                <Route path='/doctorCall'>
                  <DoctorCall></DoctorCall>
>>>>>>> a8c866af645b3e4a56b963da38668287efac199e
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
