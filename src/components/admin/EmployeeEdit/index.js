import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
  BackAndSaveChangesButtonsWrapper,
  DeleteButton,
  BackButton,
  SaveChangesButton,
  VisibilityIcon,
  VisibilityOffIcon,
} from './styles';

import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import AbsoluteLoader from '../../Loaders/AbsoluteLoader';

import { employeeStatus } from '../../../config/enums';
import useGetData from '../../../hooks/useGetData';
import useUpdateEmployee from '../../../hooks/useUpdateEmployee';
import useDeleteEmployee from '../../../hooks/useDeleteEmployee';

import { employees } from '../EmployeesTable/mockData';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 220,
    },
  },
};

const EmployeeEdit = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  let history = useHistory();
  let { employeeId } = useParams();
  const { updateEmployee } = useUpdateEmployee();
  const { deleteEmployee } = useDeleteEmployee();
  const { data: employeeData, isLoading: isLoadingEmployeeData } = useGetData({
    url: `/users/${employeeId}`,
  }); // TODO  RENAME THE VARIABLES AND CHANGE THE URL
  const { data: zonesData, isLoading: isLoadingZonesData } = useGetData({
    url: `/albums`,
  }); // TODO RENAME THE VARIABLES AND CHANGE THE URL
  employeeId = parseInt(employeeId);
  console.log(employeeData, isLoadingEmployeeData);
  console.log(zonesData, isLoadingZonesData);

  const employee = employees.find((e) => e.id === employeeId);
  const { data: employeeEditableData, onFormChange: setEmployeeEditableData } =
    useForm({ ...employee });
  const [accStatus, setAccStatus] = useState(
    employee ? employee.accountActive : false
  );
  const {
    data: { confirmPassword },
    onFormChange: setConfirmPassword,
  } = useForm({
    confirmPassword: employee.password,
  });
  const [zones, setZones] = useState(employee.zones); // TODO RENAME ZONE TO ZONES

  const zoneOptions = ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5']; // TODO THIS WILL BE DYNAMIC

  const statusOptions = Object.keys(employeeStatus).map((key) => {
    return {
      text: employeeStatus[key],
      value: key,
    };
  });

  const onSaveChanges = () => {
    if (zones.length === 1 && zones[0] === 'NONE') {
      zones.shift();
    }
    console.log(`Confirm password: ${confirmPassword}`);
    const changedEmployee = {
      ...employeeEditableData,
      accountActive: accStatus,
      zones: zones,
    };
    updateEmployee({ employee: changedEmployee });
  };

  const onDeleteEmployee = () => {
    deleteEmployee({ id: employee.id });
  };

  const handleZonesChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value.length > 1 && value[0] === 'NONE') {
      value.shift();
    }
    setZones(
      typeof value === 'string'
        ? value.split(', ')
        : value.length === 0
        ? ['NONE']
        : value
    );
  };

  return (
    <EmployeeEditWrapper>
      <Title variant='h5'>Уреди Вработен</Title>
      {isLoadingEmployeeData ? (
        <AbsoluteLoader
          containerStyle={{
            width: '200px',
            height: '200px',
            margin: 'auto',
          }}
        />
      ) : (
        <>
          <RowWrapper>
            <LabelAndInputWrapper>
              <Label>Име</Label>
              <StandardInputField
                value={employeeEditableData?.firstName ?? ''}
                name='firstName'
                onChange={setEmployeeEditableData}
              />
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
              <Label>Презиме</Label>
              <StandardInputField
                value={employeeEditableData?.lastName ?? ''}
                name='lastName'
                onChange={setEmployeeEditableData}
              />
            </LabelAndInputWrapper>
          </RowWrapper>
          <RowWrapper>
            <LabelAndInputWrapper>
              <Label>Емаил</Label>
              <StandardInputField
                value={employeeEditableData?.email ?? ''}
                name='email'
                type='email'
                onChange={setEmployeeEditableData}
              />
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
              <Label>Телефон</Label>
              <StandardInputField
                value={employeeEditableData?.phoneNumber ?? ''}
                name='phoneNumber'
                onChange={setEmployeeEditableData}
              />
            </LabelAndInputWrapper>
          </RowWrapper>
          <RowWrapper>
            <LabelAndInputWrapper>
              <Label>Лозинка</Label>
              <StandardInputField
                value={employeeEditableData?.password ?? ''}
                name='password'
                type={isPasswordVisible ? 'text' : 'password'}
                onChange={setEmployeeEditableData}
              />
            </LabelAndInputWrapper>
            <IconButton
              sx={{ marginTop: '23px' }}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
            <LabelAndInputWrapper>
              <Label>Потврди Лозинка</Label>
              <StandardInputField
                value={confirmPassword}
                name='confirmPassword'
                type={isPasswordVisible ? 'text' : 'password'}
                onChange={setConfirmPassword}
              />
            </LabelAndInputWrapper>
          </RowWrapper>
          <RowWrapper>
            {isLoadingZonesData ? (
              <AbsoluteLoader
                containerStyle={{
                  position: 'absolute',
                  left: '310px',
                  bottom: '5px',
                  width: '40px',
                  height: '40px',
                }}
              />
            ) : null}
            <LabelAndInputWrapper>
              <Label>Одговорен за:</Label>
              <Dropdown
                multiple
                value={zones}
                onChange={handleZonesChange}
                renderValue={(selected) => {
                  return selected.join(', ');
                }}
                MenuProps={MenuProps}
              >
                {zoneOptions.map((zone) => (
                  <DropdownOption value={zone} key={zone}>
                    <Checkbox checked={zones.indexOf(zone) > -1} />
                    <ListItemText primary={zone} />
                  </DropdownOption>
                ))}
              </Dropdown>
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
              <Label>Статус</Label>
              <Dropdown
                value={
                  employeeEditableData?.status !== ''
                    ? employeeEditableData?.status
                    : statusOptions[0].value
                }
                name='status'
                onChange={setEmployeeEditableData}
                MenuProps={MenuProps}
              >
                {statusOptions.map((option) => (
                  <DropdownOption value={option.value} key={option.value}>
                    {option.text}
                  </DropdownOption>
                ))}
              </Dropdown>
            </LabelAndInputWrapper>
          </RowWrapper>
          <SwitchRowWrapper>
            <SwitchTitle>Акаунт</SwitchTitle>
            <SwitchLabelAndInputWrapper>
              <Label>Активен:</Label>
              <AccountSwitch
                checked={accStatus}
                value={accStatus}
                name='accountActive'
                onClick={() => setAccStatus(!accStatus)}
              />
            </SwitchLabelAndInputWrapper>
          </SwitchRowWrapper>
          <RowWrapper>
            <DeleteButton onClick={onDeleteEmployee}>
              Избриши Вработен
            </DeleteButton>
            <BackAndSaveChangesButtonsWrapper>
              <BackButton onClick={() => history.push('/employees')}>
                Врати се Назад
              </BackButton>
              <SaveChangesButton onClick={onSaveChanges}>
                Зачувај ги Промените
              </SaveChangesButton>
            </BackAndSaveChangesButtonsWrapper>
          </RowWrapper>
        </>
      )}
    </EmployeeEditWrapper>
  );
};

export default EmployeeEdit;
