import { Link } from 'react-router-dom';

import {
  ScreenWrapper,
  LoginWrapper,
  Logo,
  LogoWrapper,
  CredentialsWrapper,
  DividerButtons,
  DividerText,
  Input,
  LockIcon,
  PersonIcon,
  SignInButton,
  ButtonsWrapper,
  RegisterText,
} from './styles';

import InputAdornment from '@mui/material/InputAdornment';

import logo from '../../resources/logo.jpg';

const LoginScreen = () => {
  return (
    <ScreenWrapper>
      <LoginWrapper>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <CredentialsWrapper>
          <Input
            InputProps={{
              startAdornment: <PersonIcon />,
            }}
          />
          <Input
            InputProps={{
              startAdornment: <LockIcon />,
            }}
            type='password'
          />
        </CredentialsWrapper>
        <ButtonsWrapper>
          <SignInButton>НАЈАВА</SignInButton>
          <DividerButtons>
            <DividerText>ИЛИ</DividerText>
          </DividerButtons>
          <SignInButton>НАЈАВА КАКО ГОСТИН</SignInButton>
        </ButtonsWrapper>
        <RegisterText>
          Немате Сметка?
          <Link to='#'>Регистрирај се!</Link>
        </RegisterText>
      </LoginWrapper>
    </ScreenWrapper>
  );
};

export default LoginScreen;
