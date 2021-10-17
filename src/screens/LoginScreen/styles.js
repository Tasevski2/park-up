import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import PIcon from '@mui/icons-material/Person';
import LIcon from '@mui/icons-material/Lock';
import backgroundImage from '../../resources/login_background.jpg';

export const ScreenWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background.whiteSmoke};
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-image: url(${backgroundImage});
  position: relative;
  border-radius: 10px;

  @media (min-width: 450px) {
    max-height: 750px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const CredentialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px 15px 25px;
`;

export const Input = styled(TextField).attrs({
  fullWidth: true,
  sx: {
    marginTop: '35px',
  },
})`
  > div {
    padding-left: 10px;
  }
  input {
    color: white;
    font-size: 1.2rem;
    padding-left: 10px;
  }

  fieldset {
    border: 0;
    border-bottom: 2px solid white;
    border-radius: 25px;
    padding: 0 10px;
  }
`;

export const LockIcon = styled(LIcon).attrs({
  sx: {
    fontSize: '2rem',
    color: 'white',
  },
})``;

export const PersonIcon = styled(PIcon).attrs({
  sx: {
    fontSize: '2rem',
    color: 'white',
  },
})``;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
`;
export const SignInButton = styled(Button).attrs((props) => ({
  variant: 'contained',
  size: 'large',
  width: '50%',
  sx: {
    width: '70%',
    backgroundColor: 'white',
  },
}))`
  box-shadow: 5px 5px 10px ${(props) => props.theme.palette.background.shadow};
  align-self: center;
  color: ${(props) => props.theme.palette.primary.main};
  border-radius: 15px;
  font-weight: 600;
  :hover {
    background-color: ${(props) => props.theme.palette.background.whiteSmoke};
  }
`;

export const DividerButtons = styled(Divider).attrs({
  sx: {},
})`
  align-items: flex-start;
  margin-bottom: 15px;
  ::before,
  ::after {
    border-top: 2px solid white;
  }
`;

export const DividerText = styled.p`
  color: white;
`;

export const RegisterText = styled.p`
  position: absolute;
  bottom: 0;
  align-self: cetner;
  width: 100%;
  text-align: center;
  color: white;

  a {
    margin-left: 10px;
    text-decoration: none;
    color: #f65026;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
