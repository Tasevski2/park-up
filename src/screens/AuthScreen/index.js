import { Switch, Route, Redirect } from 'react-router-dom';
import { ScreenWrapper, AuthWrapper, Logo, LogoWrapper } from './styles';
import { useContext } from 'react';

import logo from '../../resources/logo.jpg';
import Login from '../../components/Login';
import LoginGuest from '../../components/LoginGuest';
import Register from '../../components/Register';
import AbsoluteLoader from '../../components/Loaders/AbsoluteLoader';
import { UserContext } from '../../context/UserContext';
import { AccessoriesContext } from '../../context/AccessoriesContext';

const AuthScreen = () => {
  const { isLoadingUser } = useContext(UserContext);
  const { isMobile } = useContext(AccessoriesContext);

  return (
    <ScreenWrapper>
      {isLoadingUser ? (
        <AbsoluteLoader
          containerStyle={{
            width: isMobile ? '150px' : '300px',
            height: isMobile ? '150px' : '300px',
            margin: 'auto',
          }}
        />
      ) : (
        <>
          <AbsoluteLoader />
          <AuthWrapper>
            <LogoWrapper>
              <Logo src={logo} />
            </LogoWrapper>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login-guest' component={LoginGuest} />
              <Route exact path='/register' component={Register} />
              <Redirect to='/' />
            </Switch>
          </AuthWrapper>
        </>
      )}
    </ScreenWrapper>
  );
};

export default AuthScreen;
