import { Route, Switch, Redirect } from 'react-router-dom';

import DestinationComponent from './utils/DestinationComponent';

import AbsoluteLoader from './components/Loaders/AbsoluteLoader';
import AdminHomeScreen from './screens/AdminHomeScreen';
import AuthScreenImported from './screens/AuthScreen';
import Alert from './components/Alert';
import BackgropLoader from './components/Loaders/BackdropLoader';
import { roles } from './config/enums';
import { UserContext } from './context/UserContext';
import { AccessoriesContext } from './context/AccessoriesContext';
import useIsMobile from './hooks/useIsMobile';
import { useState } from 'react';

import useFindUser from './hooks/useFindUser';

const AuthScreen = new DestinationComponent('/', AuthScreenImported, true);
const AdminEmployeeHomeScreen = new DestinationComponent('/', AdminHomeScreen);
// const UserHomeScreen = new DestinationComponent('/', UserHomeScreen); TODO

const publicRoutes = [AuthScreen];

const userRoutes = [
  // UserHomeScreen
];

const adminAndEmployeeRoutes = [AdminEmployeeHomeScreen];

function App(props) {
  const [alertData, setAlertData] = useState({
    type: 'error',
    msg: 'Не Сте Логирани!',
  });
  const setAlert = ({ type, msg }) => {
    setAlertData({ type, msg });
    setIsAlertOpen(true);
  };
  // const { user, setUser, isLoading: isLoadingUser } = useFindUser({ setAlert });
  const { isMobile } = useIsMobile();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isBackdropLoaderOpen, setIsBackdropLoaderOpen] = useState(false);

  const [user, setUser] = useState({
    firstName: 'Виктор',
    lastName: 'Тасевски', //   TOOD DELETE THIS THIS IS FOR MOCKING
    role: 'ROLE_ADMIN',
  });

  const isLoadingUser = false; // TODO DELETE IT NO USE
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
    <UserContext.Provider value={{ user, setUser, isLoadingUser }}>
      <AccessoriesContext.Provider
        value={{ isMobile, setAlert, setIsBackdropLoaderOpen }}
      >
        <BackgropLoader
          isBackdropLoaderOpen={isBackdropLoaderOpen}
          isMobile={isMobile}
        />
        <Alert
          isOpen={isAlertOpen}
          setIsOpen={setIsAlertOpen}
          type={alertData.type}
          msg={alertData.msg}
        />
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
