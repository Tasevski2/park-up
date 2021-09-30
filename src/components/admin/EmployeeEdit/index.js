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
    SaveChangesButton
} from './styles';

import {
    employeeStatus,
    accountStatus
} from '../../../config/enums';

const EmployeeEdit = () => {

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



    return <EmployeeEditWrapper>
        <Title variant='h5'>Uredi vraboten</Title>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Ime</Label>
                <StandardInputField />
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
                <Label>Prezime</Label>
                <StandardInputField />
            </LabelAndInputWrapper>
        </RowWrapper>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Email</Label>
                <StandardInputField type='email' />
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
                <Label>Telefon</Label>
                <StandardInputField />
            </LabelAndInputWrapper>
        </RowWrapper>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Lozinka</Label>
                <StandardInputField type="password" />
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
                <Label>Potvrdi lozinka</Label>
                <StandardInputField type="password" />
            </LabelAndInputWrapper>
        </RowWrapper>
        <RowWrapper>
            <LabelAndInputWrapper>
                <Label>Odgovoren za</Label>
                <Dropdown
                    defaultValue={zoneOptions[0].value}
                >
                    {
                        zoneOptions.map(option => <DropdownOption value={option.value} key={option.value}>{option.text}</DropdownOption>)
                    }
                </Dropdown>
            </LabelAndInputWrapper>
            <LabelAndInputWrapper>
                <Label>Status</Label>
                <Dropdown
                    defaultValue={statusOptions[0].value}
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
                <AccountSwitch />
            </SwitchLabelAndInputWrapper>
        </SwitchRowWrapper>
        <RowWrapper>
            <DeleteButton>Izbrisi vraboten</DeleteButton>
            <BackAndSaveChangesButtonsWrapper>
                <BackButton>Vrati se nazad</BackButton>
                <SaveChangesButton>Zacuvaj gi promenti</SaveChangesButton>
            </BackAndSaveChangesButtonsWrapper>
        </RowWrapper>
    </EmployeeEditWrapper>
};

export default EmployeeEdit;