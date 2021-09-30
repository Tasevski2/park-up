import {
    employeeStatus,
    accountStatus
} from '../../../config/enums';

export const employees = [
    {
        id: 1,
        email: 'viktor-tasevski@hotmail.com',
        firstName: 'Viktor',
        lastName: 'Tasevski',
        zone: 'Zona 1',
        phoneNumber: '072500000',
        status: employeeStatus.vacation,
        accountStatus: accountStatus.enabled
    },
    {
        id: 2,
        email: 'andrejTav@gmail.com',
        firstName: 'Andrej',
        lastName: 'Tavcioski',
        zone: 'Zona 2',
        phoneNumber: '070350123',
        status: employeeStatus.working,
        accountStatus: accountStatus.enabled
    },
    {
        id: 3,
        email: 'david.trajkovski@yahoo.com',
        firstName: 'David',
        lastName: 'Trajkovski',
        zone: 'Zona 3',
        phoneNumber: '078123321',
        status: employeeStatus.working,
        accountStatus: accountStatus.enabled
    },
    {
        id: 4,
        email: 'poc@gmail.com',
        firstName: 'Nekoj od',
        lastName: 'POC',
        zone: 'Zona 4',
        phoneNumber: '223305',
        status: employeeStatus.notWorking,
        accountStatus: accountStatus.enabled
    },
    {
        id: 5,
        email: 'silbo@outlook.com',
        firstName: 'Nekoj od',
        lastName: 'Silbo',
        zone: 'Zona 5',
        phoneNumber: '071206205',
        status: employeeStatus.notWorking,
        accountStatus: accountStatus.disabled
    }
];