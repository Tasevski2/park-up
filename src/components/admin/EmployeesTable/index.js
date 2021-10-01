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
    IdentityIcon
} from './styles';

import InputAdornment from '@mui/material/InputAdornment';

import {
    employeeStatus,
    accountStatus
} from '../../../config/enums';

import {
    employees
} from './mockData';
import { useState } from 'react';

const EmployeesTable = () => {
    let history = useHistory();
    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [search, setSearch] = useState('');

    const onRowClick = (id) => {
        history.push(`/employees/${id}`);
    }

    const onAccountStatusClick = (event, id) => {
        event.stopPropagation();
        console.log(`Disable or activate user acc with id: ${id}`);
    }

    const onChangeSearch = (e) => {
        let newSearchValue = e.target.value;
        setSearch(newSearchValue);
        const filteredData = employees.filter(
            employee => employee.firstName.concat(` ${employee.lastName}`).toLowerCase().includes(newSearchValue.trim().toLowerCase())
        );

        setFilteredEmployees(filteredData);
    }

    return (
        <TableContainer>
            <TableHeaderWrapper>
                <TableTitle variant='h5'>Vraboteni</TableTitle>
                <SearchField
                    value={search}
                    onChange={(e) => onChangeSearch(e)}
                    placeholder="Prebaraj..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IdentityIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <CreateEmployeeButton onClick={() => history.push('/employees/create')}>
                    <AddIcon />
                    Dodadi vraboten
                </CreateEmployeeButton>
            </TableHeaderWrapper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="center">Ime i Prezime</TableCell>
                        <TableCell align="center">Zona</TableCell>
                        <TableCell align="center">Telefon</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Akaunt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredEmployees.map((employeeData) => (
                        <TableRow
                            key={employeeData.id}
                            onClick={() => onRowClick(employeeData.id)}
                        >
                            <TableCell align="left">{employeeData.email}</TableCell>
                            <TableCell align="center">{employeeData.firstName} {employeeData.lastName}</TableCell>
                            <TableCell align="center">{employeeData.zone}</TableCell>
                            <TableCell align="center">{employeeData.phoneNumber}</TableCell>
                            <TableCell align="center">{employeeStatus[employeeData.status]}</TableCell>
                            <ButtonTableCell align="center" >
                                <ToggleAccoutStatusButton
                                    onClick={(event) => onAccountStatusClick(event, employeeData.id)}
                                    $enabled={employeeData.accountActive}>{/* $ added because https://styled-components.com/docs/api#transient-props*/}
                                    {employeeData.accountActive ? accountStatus.enabled : accountStatus.disabled}
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
