

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
    AddIcon
} from './styles';


const accountStatus = {
    enabled: 'Aktiven',
    disabled: 'Neaktiven'
};

const EmployeesTable = ({ employeesData }) => {
    return (
        <TableContainer>
            <TableHeaderWrapper>
                <TableTitle variant='h5'>Vraboteni</TableTitle>
                <CreateEmployeeButton>
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
                    {employeesData.map((employeeData) => (
                        <TableRow
                            key={employeeData.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">{employeeData.email}</TableCell>
                            <TableCell align="center">{employeeData.firstName} {employeeData.lastName}</TableCell>
                            <TableCell align="center">{employeeData.zone}</TableCell>
                            <TableCell align="center">{employeeData.phoneNumber}</TableCell>
                            <TableCell align="center">{employeeData.status}</TableCell>
                            <ButtonTableCell align="center" >
                                <ToggleAccoutStatusButton $enabled={employeeData.accountStatus === accountStatus.enabled}>{/* $ added because https://styled-components.com/docs/api#transient-props*/}
                                    {employeeData.accountStatus}
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
