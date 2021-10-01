import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import DestinationComponent from './utils/DestinationComponent';

import AdminHomeScreen from './screens/AdminHomeScreen';

import { roles } from './config/enums';

// const LoginScreen = new DestinationComponent('/', LoginScreen); TODO
const AdminEmployeeHomeScreen = new DestinationComponent('/', AdminHomeScreen);
// const UserHomeScreen = new DestinationComponent('/', UserHomeScreen); TODO

const publicRoutes = [
  // LoginScreen
];

const userRoutes = [
  // UserHomeScreen
];

const adminAndEmployeeRoutes = [
  AdminEmployeeHomeScreen
];

function App(props) {
  const user = {
    role: 'ROLE_ADMIN'
  };

  let routes = [];

  switch (user.role) {
    case roles.user:
      routes = userRoutes;
      break;
    case roles.admin:
    case roles.employee:
      routes = adminAndEmployeeRoutes;
      break;
    default:
      routes = publicRoutes;
  };

  return <Switch>
    {
      routes?.map((route, index) => <Route
        key={index}
        path={route.path}
        component={route.component}
      />)
    }
    <Redirect to='/' />
  </Switch>
}

export default App;
