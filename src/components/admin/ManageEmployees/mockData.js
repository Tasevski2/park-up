const enumStatus = {
    working: 'Raboti',
    notWorking: 'Ne raboti',
    vacation: 'Odmor'
};

const accountStatus = {
    enabled: 'Aktiven',
    disabled: 'Neaktiven'
};

export const employees = [
    {
        id: 1,
        email: 'viktor-tasevski@hotmail.com',
        firstName: 'Viktor',
        lastName: 'Tasevski',
        zone: 'Zona 1',
        phoneNumber: '072500000',
        status: enumStatus.vacation,
        accountStatus: accountStatus.enabled
    },
    {
        id: 2,
        email: 'andrejTav@gmail.com',
        firstname: 'Andrej',
        lastName: 'Tavcioski',
        zone: 'Zona 2',
        phoneNumber: '070350123',
        status: enumStatus.working,
        accountStatus: accountStatus.enabled
    },
    {
        id: 3,
        email: 'david.trajkovski@yahoo.com',
        firstName: 'David',
        lastName: 'Trajkovski',
        zone: 'Zona 3',
        phoneNumber: '078123321',
        status: enumStatus.working,
        accountStatus: accountStatus.enabled
    },
    {
        id: 4,
        email: 'poc@gmail.com',
        firstName: 'Nekoj od',
        lastName: 'POC',
        zone: 'Zona 4',
        phoneNumber: '223305',
        status: enumStatus.notWorking,
        accountStatus: accountStatus.enabled
    },
    {
        id: 5,
        email: 'silbo@outlook.com',
        firstName: 'Nekoj od',
        lastName: 'Silbo',
        zone: 'Zona 5',
        phoneNumber: '071206205',
        status: enumStatus.notWorking,
        accountStatus: accountStatus.disabled
    }
];