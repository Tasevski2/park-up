import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import DestinationComponent from './utils/DestinationComponent';

import AdminHomeScreen from './screens/AdminHomeScreen';
import AuthScreenImported from './screens/AuthScreen';

import { roles } from './config/enums';
import { UserContext } from './context/UserContext';
import { AccessoriesContext } from './context/AccessoriesContext';
import useIsMobile from './hooks/useIsMobile';

const AuthScreen = new DestinationComponent('/', AuthScreenImported, true);
const AdminEmployeeHomeScreen = new DestinationComponent('/', AdminHomeScreen);
// const UserHomeScreen = new DestinationComponent('/', UserHomeScreen); TODO

const publicRoutes = [AuthScreen];

const userRoutes = [
  // UserHomeScreen
];

const adminAndEmployeeRoutes = [AdminEmployeeHomeScreen];

function App(props) {
  const { isMobile } = useIsMobile();

  const user = {
    firstName: 'Виктор',
    lastName: 'Тасевски',
    role: 'ROLE_EMPLOYEE',
  };

  // const user = null;
  console.log(isMobile);
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

  return (
    <UserContext.Provider value={{ user }}>
      <AccessoriesContext.Provider value={{ isMobile }}>
        <Switch>
          {routes?.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
          ))}
          <Redirect to='/' />
        </Switch>
      </AccessoriesContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
