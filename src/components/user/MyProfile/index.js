import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import useGetUserPassword from '../../../hooks/useGetUserPassword';
import useUpdateUserProfile from '../../../hooks/useUpdateUserProfile';

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
    LockOpenIcon,
} from './styles';
import { IconButton } from '@mui/material';

import { UserContext } from '../../../context/UserContext';

import { mockProfileData } from './mockData';

const fakePassword = '********';

const Register = () => {
    const { user } = useContext(UserContext);
    const [isEditActivated, setIsEditActivated] = useState(false);
    const { data, onFormChange, setNewData } = useForm({
        ...mockProfileData,
    });
    const [password, setPassword] = useState(fakePassword);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { isLoading: isLoadingUserPassword, getUserPassword } =
        useGetUserPassword();
    const { updateUserProfile } = useUpdateUserProfile();

    const handleEditButton = () => {
        setIsEditActivated(true);
        getUserPassword({ id: user.id, setPassword });
    };

    const handleOnCancel = () => {
        setIsEditActivated(false);
        setNewData({ ...mockProfileData });
        setPassword(fakePassword);
    };

    const handleOnSave = () => {
        const updatedUserData = {
            ...data,
            password,
        };
        updateUserProfile({
            userData: updatedUserData,
            id: user.id,
            setIsEditActivated,
        });
    };

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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <IconButton
                                style={{ padding: 0 }}
                                onClick={() =>
                                    setIsPasswordVisible(
                                        !isPasswordVisible && isEditActivated
                                    )
                                }
                            >
                                {isPasswordVisible ? (
                                    <LockOpenIcon />
                                ) : (
                                    <LockIcon />
                                )}
                            </IconButton>
                        ),
                    }}
                    type={
                        isPasswordVisible && isEditActivated
                            ? 'text'
                            : 'password'
                    }
                />
            </CredentialsWrapper>
            {isEditActivated ? (
                <ButtonsWrapper>
                    <CancelButton onClick={handleOnCancel}>Откажи</CancelButton>
                    <SaveButton onClick={handleOnSave}>Сочувај</SaveButton>
                </ButtonsWrapper>
            ) : (
                <EditButton onClick={handleEditButton}>Уреди</EditButton>
            )}
        </Wrapper>
    );
};

export default Register;
