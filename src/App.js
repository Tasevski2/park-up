import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import DestinationComponent from './utils/DestinationComponent';

import AdminHomeScreen from './screens/AdminHomeScreen';
import AuthScreenImported from './screens/AuthScreen';

import { roles } from './config/enums';

const AuthScreen = new DestinationComponent('/', AuthScreenImported, true);
const AdminEmployeeHomeScreen = new DestinationComponent('/', AdminHomeScreen);
// const UserHomeScreen = new DestinationComponent('/', UserHomeScreen); TODO

const publicRoutes = [AuthScreen];

const userRoutes = [
  // UserHomeScreen
];

const adminAndEmployeeRoutes = [AdminEmployeeHomeScreen];

function App(props) {
  // const user = {
  //   role: 'ROLE_ADMIN',
  // };

  const user = null;

  let routes = publicRoutes;
  if (user) {
    switch (user.role) {
      case roles.user:
        routes = userRoutes;
        break;
      case roles.admin:
      case roles.employee:
        routes = adminAndEmployeeRoutes;
        break;
      default:
        break;
    }
  }
  console.log(publicRoutes);
  return (
    <Switch>
      {routes?.map((route, index) => (
        <Route key={index} path={route.path} component={route.component} />
      ))}
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
