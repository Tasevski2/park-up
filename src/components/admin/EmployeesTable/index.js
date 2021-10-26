import { useHistory } from 'react-router';

import {
  TableContainer,
  TableHeaderWrapper,
  TableTitle,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  ButtonTableCell,
  ToggleAccoutStatusButton,
  CreateEmployeeButton,
  AddIcon,
  SearchField,
  IdentityIcon,
} from './styles';

import InputAdornment from '@mui/material/InputAdornment';
import DropdownViewer from '../../DropdownViewer';

import { employeeStatus, accountStatus } from '../../../config/enums';

import { employees } from './mockData';
import { useState } from 'react';

const EmployeesTable = () => {
  let history = useHistory();
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [search, setSearch] = useState('');

  const onRowClick = (id) => {
    history.push(`/employees/${id}`);
  };

  const onAccountStatusClick = (event, id) => {
    event.stopPropagation();
    console.log(`Disable or activate user acc with id: ${id}`);
  };

  const onChangeSearch = (e) => {
    let newSearchValue = e.target.value;
    setSearch(newSearchValue);
    const filteredData = employees.filter((employee) =>
      employee.firstName
        .concat(` ${employee.lastName}`)
        .toLowerCase()
        .includes(newSearchValue.trim().toLowerCase())
    );

    setFilteredEmployees(filteredData);
  };

  return (
    <TableContainer>
      <TableHeaderWrapper>
        <TableTitle variant='h5'>Вработени</TableTitle>
        <SearchField
          value={search}
          onChange={(e) => onChangeSearch(e)}
          placeholder='Пребарај...'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IdentityIcon />
              </InputAdornment>
            ),
          }}
        />
        <CreateEmployeeButton onClick={() => history.push('/employees/create')}>
          <AddIcon />
          Додади вработен
        </CreateEmployeeButton>
      </TableHeaderWrapper>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Емаил</TableCell>
            <TableCell align='center'>Име и Презиме</TableCell>
            <TableCell align='center'>Зона</TableCell>
            <TableCell align='center'>Телефон</TableCell>
            <TableCell align='center'>Статус</TableCell>
            <TableCell align='center'>Акаунт</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredEmployees.map((employeeData) => (
            <TableRow
              key={employeeData.id}
              onClick={() => onRowClick(employeeData.id)}
            >
              <TableCell align='left'>{employeeData.email}</TableCell>
              <TableCell align='center'>
                {employeeData.firstName} {employeeData.lastName}
              </TableCell>
              <TableCell align='center' style={{ padding: 0, width: '200px' }}>
                <DropdownViewer data={employeeData.zones} width='200px' />
              </TableCell>
              <TableCell align='center'>{employeeData.phoneNumber}</TableCell>
              <TableCell align='center'>
                {employeeStatus[employeeData.status]}
              </TableCell>
              <ButtonTableCell align='center'>
                <ToggleAccoutStatusButton
                  onClick={(event) =>
                    onAccountStatusClick(event, employeeData.id)
                  }
                  $enabled={employeeData.accountActive}
                >
                  {/* $ added because https://styled-components.com/docs/api#transient-props*/}
                  {employeeData.accountActive
                    ? accountStatus.enabled
                    : accountStatus.disabled}
                </ToggleAccoutStatusButton>
              </ButtonTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
