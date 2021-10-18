import { Switch, Route, Redirect } from 'react-router-dom';
import { ScreenWrapper, AuthWrapper, Logo, LogoWrapper } from './styles';

import logo from '../../resources/logo.jpg';
import Login from '../../components/Login';
import LoginGuest from '../../components/LoginGuest';
import Register from '../../components/Register';

const AuthScreen = () => {
  return (
    <ScreenWrapper>
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
    </ScreenWrapper>
  );
};

export default AuthScreen;
