import { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import {
  CredentialsWrapper,
  Input,
  LockIcon,
  PersonIcon,
  PhoneIcon,
  EditButton,
  FullNameWrapper,
  Wrapper,
  ButtonsWrapper,
  SaveButton,
  CancelButton,
} from './styles';

const Register = () => {
  const [isEditActivated, setIsEditActivated] = useState(false);
  const { data, onFormChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  return (
      <Wrapper>
          <CredentialsWrapper>
              <FullNameWrapper>
                  <Input
                      disabled={!isEditActivated}
                      name='firstName'
                      placeholder='Име'
                      style={{
                          width: '49%',
                      }}
                      value={data.firstName}
                      onChange={onFormChange}
                  />
                  <Input
                      disabled={!isEditActivated}
                      name='lastName'
                      placeholder='Презиме'
                      style={{
                          width: '49%',
                      }}
                      value={data.lastName}
                      onChange={onFormChange}
                  />
              </FullNameWrapper>
              <Input
                  disabled={!isEditActivated}
                  name='phoneNumber'
                  placeholder='Телефонски број'
                  value={data.phoneNumber}
                  onChange={onFormChange}
                  InputProps={{
                      startAdornment: <PhoneIcon />,
                  }}
              />
              <Input
                  disabled={!isEditActivated}
                  name='email'
                  placeholder='Емаил адреса'
                  value={data.email}
                  onChange={onFormChange}
                  InputProps={{
                      startAdornment: <PersonIcon />,
                  }}
              />
              <Input
                  disabled={!isEditActivated}
                  name='password'
                  placeholder='Лозинка'
                  value={data.password}
                  onChange={onFormChange}
                  InputProps={{
                      startAdornment: <LockIcon />,
                  }}
                  type='password'
              />
          </CredentialsWrapper>
          {isEditActivated ? (
              <ButtonsWrapper>
                  <CancelButton onClick={() => setIsEditActivated(false)}>
                      Откажи
                  </CancelButton>
                  <SaveButton>Сочувај</SaveButton>
              </ButtonsWrapper>
          ) : (
              <EditButton onClick={() => setIsEditActivated(true)}>
                  Уреди
              </EditButton>
          )}
      </Wrapper>
  );
};

export default Register;
