import styled from 'styled-components';
import { Button } from '@mui/material';
import PhIcon from '@mui/icons-material/Phone';
import TextField from '@mui/material/TextField';
import PIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const CredentialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px 15px 25px;
`;

export const Input = styled(TextField).attrs({
  fullWidth: true,
  sx: {
    marginTop: '25px',
  },
})`
  > div {
    padding-left: 10px;
  }
  input {
    color: white;
    font-size: 1.2rem;
    padding-left: 10px;

    ::placeholder {
      color: white;
      opacity: 0.6;
    }
  }

  fieldset {
    border: 0;
    border-bottom: 4px solid white;
    border-radius: 25px;
    padding: 0 10px;
  }
`;

export const PersonIcon = styled(PIcon).attrs({
  sx: {
    fontSize: '2rem',
    color: 'white',
  },
})``;

export const PhoneIcon = styled(PhIcon).attrs({
  sx: {
    fontSize: '2rem',
    color: 'white',
  },
})``;

export const CarIcon = styled(DirectionsCarIcon).attrs({
  sx: {
    fontSize: '2rem',
    color: 'white',
  },
})``;

export const SignInButton = styled(Button).attrs((props) => ({
  variant: 'contained',
  size: 'large',
  width: '50%',
  sx: {
    width: '70%',
    backgroundColor: 'white',
  },
}))`
  margin-top: 50px;
  box-shadow: 5px 5px 10px ${(props) => props.theme.palette.background.shadow};
  align-self: center;
  color: ${(props) => props.theme.palette.primary.main};
  border-radius: 15px;
  font-weight: 600;
  :hover {
    background-color: ${(props) => props.theme.palette.background.whiteSmoke};
  }
`;

export const LoginText = styled.p`
  position: absolute;
  bottom: 0;
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
