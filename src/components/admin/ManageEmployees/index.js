import {
    ManageEmployeesWrapper
} from './styles';

import {
    employees
} from './mockData';
import EmployeesTable from '../EmployeesTable';

const ManageEmpoyees = () => {
    return <ManageEmployeesWrapper>
        <EmployeesTable employeesData={employees} />
    </ManageEmployeesWrapper>
};

export default ManageEmpoyees;