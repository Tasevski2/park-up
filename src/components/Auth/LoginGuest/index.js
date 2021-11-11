import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

import {
  CredentialsWrapper,
  Input,
  PersonIcon,
  PhoneIcon,
  CarIcon,
  SignInButton,
  LoginText,
} from './styles';

const LoginGuest = () => {
  const { data, onFormChange } = useForm({
    phoneNumber: '',
    email: '',
    registerPlate: '',
  });
  return (
    <>
      <CredentialsWrapper>
        <Input
          name='phoneNumber'
          placeholder='Телефонски број'
          value={data.phoneNumber}
          onChange={onFormChange}
          InputProps={{
            startAdornment: <PhoneIcon />,
          }}
        />
        <Input
          name='email'
          placeholder='Емаил адреса'
          value={data.email}
          onChange={onFormChange}
          InputProps={{
            startAdornment: <PersonIcon />,
          }}
        />
        <Input
          name='registerPlate'
          placeholder='Таблица...SK-8190-AV'
          value={data.password}
          onChange={onFormChange}
          InputProps={{
            startAdornment: <CarIcon />,
          }}
        />
      </CredentialsWrapper>
      <SignInButton onClick={() => console.log(data)}>
        НАЈАВА КАКО ГОСТИН
      </SignInButton>
      <LoginText>
        Имате Профил? <Link to='/login'>Најавете се!</Link>
      </LoginText>
    </>
  );
};

export default LoginGuest;
