import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

import {
    EmployeeEditWrapper,
    Title,
    RowWrapper,
    LabelAndInputWrapper,
    Label,
    StandardInputField,
    Dropdown,
    DropdownOption,
    SwitchRowWrapper,
    SwitchTitle,
    SwitchLabelAndInputWrapper,
    AccountSwitch,
    BackButton,
    SaveChangesButton,
    VisibilityIcon,
    VisibilityOffIcon
} from './styles';

import IconButton from '@mui/material/IconButton';

import {
    employeeStatus
} from '../../../config/enums';

import {
    defaultUser
} from '../../../config/defaultUser';

const EmployeeCreate = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    let history = useHistory();


    const { data: employeeEditableData, onFormChange: setEmployeeEditableData } = useForm({ ...defaultUser, confirmPassword: defaultUser.password });
    const [accStatus, setAccStatus] = useState(defaultUser.accountActive);

    const zoneOptions = [
        {
            text: 'Nitu edna zona',
            value: 'none'
        },
        {
            text: 'Zona 1',
            value: 'zone1'
        },
        {
            text: 'Zona 2',
            value: 'zone2'
        },
        {
            text: 'Zona 3',
            value: 'zone3'
        },
        {
            text: 'Zona 4',
            value: 'zone4'
        },
        {
            text: 'Zona 5',
            value: 'zone5'
        }
    ];

    const statusOptions = Object.keys(employeeStatus).map(key => {
        return {
            text: employeeStatus[key],
            value: key
        }
    });

    const onCreateEmployee = () => {
        const changedEmployee = {
            ...employeeEditableData,
            accountActive: accStatus
        }
        console.log('Created employee: ', changedEmployee);
    }

    return <EmployeeEditWrapper>
        <Title variant='h5'>Kreiraj vraboten</Title>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Ime</Label>
                <StandardInputField
                    value={employeeEditableData.firstName}
                    name='firstName'
                    onChange={setEmployeeEditableData}
                />
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
                <Label>Prezime</Label>
                <StandardInputField
                    value={employeeEditableData.lastName}
                    name='lastName'
                    onChange={setEmployeeEditableData}
                />
            </LabelAndInputWrapper>
        </RowWrapper>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Email</Label>
                <StandardInputField
                    value={employeeEditableData.email}
                    name='email'
                    type='email'
                    onChange={setEmployeeEditableData}
                />
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
                <Label>Telefon</Label>
                <StandardInputField
                    value={employeeEditableData.phoneNumber}
                    name='phoneNumber'
                    onChange={setEmployeeEditableData}
                />
            </LabelAndInputWrapper>
        </RowWrapper>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Lozinka</Label>
                <StandardInputField
                    value={employeeEditableData.password}
                    name='password'
                    type={isPasswordVisible ? 'text' : 'password'}
                    $autoComplete={true}
                    onChange={setEmployeeEditableData}
                />
            </LabelAndInputWrapper>
            <IconButton sx={{ marginTop: '23px' }} onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                {
                    isPasswordVisible ?
                        <VisibilityIcon />
                        :
                        <VisibilityOffIcon />
                }
            </IconButton>
            <LabelAndInputWrapper>
                <Label>Potvrdi lozinka</Label>
                <StandardInputField
                    value={employeeEditableData.confirmPassword}
                    name='confirmPassword'
                    type={isPasswordVisible ? 'text' : 'password'}
                    onChange={setEmployeeEditableData}
                />
            </LabelAndInputWrapper>
        </RowWrapper>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Odgovoren za</Label>
                <Dropdown
                    value={employeeEditableData.zone}
                    name='zone'
                    onChange={setEmployeeEditableData}
                >
                    {
                        zoneOptions.map(option => <DropdownOption value={option.value} key={option.value}>{option.text}</DropdownOption>)
                    }
                </Dropdown>
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
                <Label>Status</Label>
                <Dropdown
                    value={employeeEditableData.status}
                    name='status'
                    onChange={setEmployeeEditableData}
                >
                    {
                        statusOptions.map(option => <DropdownOption value={option.value} key={option.value}>{option.text}</DropdownOption>)
                    }
                </Dropdown>
            </LabelAndInputWrapper>
        </RowWrapper>
        <SwitchRowWrapper>
            <SwitchTitle>Akaunt</SwitchTitle>
            <SwitchLabelAndInputWrapper>
                <Label>Aktiven:</Label>
                <AccountSwitch
                    checked={accStatus}
                    value={accStatus}
                    name='accountActive'
                    onClick={() => setAccStatus(!accStatus)}
                />
            </SwitchLabelAndInputWrapper>
        </SwitchRowWrapper>
        <RowWrapper>
            <BackButton onClick={() => history.push('/employees')}>
                Vrati se nazad
            </BackButton>
            <SaveChangesButton onClick={onCreateEmployee}>
                Kreiraj vraboten
            </SaveChangesButton>
        </RowWrapper>
    </EmployeeEditWrapper>
};

export default EmployeeCreate;