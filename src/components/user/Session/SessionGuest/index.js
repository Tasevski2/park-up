import {
    SessionInfo,
    Input,
    PersonIcon,
    PhoneIcon,
    PlateAndZoneWrapper,
    ZoneSelectInput,
    DropdownItem,
} from './styles';

import { sessionStatus as enumsSessionStatus } from '../../../../config/enums';

const MenuProps = {
    PaperProps: {
        style: {
            height: 150,
            width: '35px',
        },
    },
};

const SessionGuest = ({
    sessionStatus,
    sessionInfo,
    zones,
    data,
    onFormChange,
}) => {
    return (
        <SessionInfo>
            <Input
                disabled
                name='phoneNumber'
                placeholder='Телефонски број'
                value={sessionInfo.phoneNumber}
                InputProps={{
                    startAdornment: <PhoneIcon />,
                }}
            />
            <Input
                disabled
                name='email'
                placeholder='Емаил адреса'
                value={sessionInfo.email}
                InputProps={{
                    startAdornment: <PersonIcon />,
                }}
            />
            <PlateAndZoneWrapper>
                <Input
                    disabled={
                        sessionStatus === enumsSessionStatus.idle ? false : true
                    }
                    name='plate'
                    placeholder='Таблица...'
                    style={{
                        width: '49%',
                        textAlign: 'center',
                    }}
                    value={data.plate}
                    onChange={onFormChange}
                />
                <ZoneSelectInput
                    MenuProps={MenuProps}
                    name='zone'
                    onChange={onFormChange}
                    value={data.zone}
                    inputProps={{
                        readOnly:
                            sessionStatus === enumsSessionStatus.idle
                                ? false
                                : true,
                    }}
                    $show={sessionStatus === enumsSessionStatus.idle}
                >
                    <DropdownItem value='NONE'>
                        <em>NONE</em>
                    </DropdownItem>
                    {zones.map((z, ind) => (
                        <DropdownItem key={ind} value={z}>
                            {z}
                        </DropdownItem>
                    ))}
                </ZoneSelectInput>
            </PlateAndZoneWrapper>
        </SessionInfo>
    );
};

export default SessionGuest;
