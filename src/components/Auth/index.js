import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthWrapper } from './styles';

import Login from './Login';
import LoginGuest from './LoginGuest';
import Register from './Register';

const Auth = () => {
  return (
    <AuthWrapper>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/login-guest' component={LoginGuest} />
        <Route exact path='/register' component={Register} />
        <Redirect to='/maps' />
      </Switch>
    </AuthWrapper>
  );
};

export default Auth;
