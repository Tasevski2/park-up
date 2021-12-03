import { useState } from 'react';

import {
    Wrapper,
    GoogleMapsWrapper,
    ZoneSelectInput,
    DropdownItem,
    ZoneInfoWrapper,
    KeyValueWrapper,
    Key,
    Value,
    FreeParkingSpacesText,
} from './styles';

import GoogleMaps from '../../GoogleMaps';
import useGetData from '../../../hooks/useGetData';

const mockDropdownZones = ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5'];

const mockParkingSpaces = [
    {
        zone: 'Zona 1',
        lat: '41.938271',
        lng: '21.512380',
        parkingSpaceNumber: 'A21',
        isTaken: true,
    },
    {
        zone: 'Zona 2',
        lat: '41.938284',
        lng: '21.512387',
        parkingSpaceNumber: 'A1',
        isTaken: false,
    },
    {
        zone: 'Zona 1',
        lat: '41.938292',
        lng: '21.512365',
        parkingSpaceNumber: 'B55',
        isTaken: false,
    },
    {
        zone: 'Zona 1',
        lat: '41.938279',
        lng: '21.512359',
        parkingSpaceNumber: 'C20',
        isTaken: false,
    },
];

const mockZonesInfo = [
    {
        zoneName: 'Zona 1',
        parkingSpacesNumber: 69,
        takenParkingSpaces: 34,
        zoneColor: '#FFD700',
        workingHours: {
            from: 5,
            to: 24,
        },
        hourlyRate: 30,
        location: {
            center: {
                lat: 41.937907,
                lng: 21.51213,
            },
            coords: [
                { lat: 41.937749, lng: 21.511095 },
                { lat: 41.936971, lng: 21.511534 },
                { lat: 41.93834, lng: 21.51407 },
                { lat: 41.939031, lng: 21.511914 },
            ],
        },
    },
    {
        zoneName: 'Zona 2',
        parkingSpacesNumber: 100,
        takenParkingSpaces: 99,
        zoneColor: '#FF0000',
        workingHours: {
            from: '1',
            to: '24',
        },
        hourlyRate: 50,
        location: {
            center: {
                lat: 42.007105,
                lng: 20.976534,
            },
            coords: [
                { lat: 41.937749, lng: 21.511095 },
                { lat: 41.936971, lng: 21.511534 },
                { lat: 41.93834, lng: 21.51407 },
                { lat: 41.939031, lng: 21.511914 },
            ],
        },
    },
];

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 150,
            width: '35px',
        },
    },
};

const defaultZoneInfo = {
    location: {
        coords: [],
        center: {
            lat: 42.00120992770302,
            lng: 21.42053372084796,
        },
    },
    zoneColor: null,
};

const MapUsers = () => {
    // const {data: fetchedParkingSpaces, isLoadingParkingSpaces} = useGetData('url to ping'); TODO
    // const { data: fetchedSelectZones, isLoading: isLoadingSelectZones } = useGetData('url to ping'); TODO
    // const { data: fetchedZonesInfo, isLoading: isLoadingZonesInfo } = useGetData('url to ping'); TODO

    const [selectedZone, setSelectedZone] = useState('NONE');
    const [zoneInfo, setZoneInfo] = useState({ ...defaultZoneInfo });
    const [parkingSpaces, setParkingSpaces] = useState([...mockParkingSpaces]);
    const [freeParkingSpaces, setFreeParkingSpaces] = useState(
        () => parkingSpaces.filter((p) => !p.isTaken).length
    );
    const handleSelectZone = (e) => {
        const _selectedZone = e.target.value;
        let zone;
        let _parkingSpaces;
        let _freeParkingSpaces;
        if (_selectedZone === 'NONE') {
            zone = { ...defaultZoneInfo };
            _parkingSpaces = [...mockParkingSpaces];
            _freeParkingSpaces = mockParkingSpaces.filter(
                (p) => !p.isTaken
            ).length;
        } else {
            zone = mockZonesInfo.find((z) => z.zoneName === _selectedZone);
            _parkingSpaces = mockParkingSpaces.filter(
                (p) => p.zone === _selectedZone
            );
            _freeParkingSpaces = _parkingSpaces.filter(
                (p) => !p.isTaken
            ).length;
        }
        setParkingSpaces(_parkingSpaces);
        setFreeParkingSpaces(_freeParkingSpaces);
        setZoneInfo({ ...zone });
        setSelectedZone(_selectedZone);
    };
    return (
        <Wrapper>
            <FreeParkingSpacesText>
                Слободни места: {freeParkingSpaces}
            </FreeParkingSpacesText>
            <GoogleMapsWrapper>
                <GoogleMaps
                    location={zoneInfo.location}
                    parkingSpaces={parkingSpaces}
                    zoneAreaColor={zoneInfo.zoneColor}
                    zoom={selectedZone === 'NONE' ? 15 : 16}
                />
            </GoogleMapsWrapper>
            <ZoneSelectInput
                MenuProps={MenuProps}
                name='zone'
                onChange={handleSelectZone}
                value={selectedZone}
            >
                <DropdownItem value='NONE'>
                    <em>NONE</em>
                </DropdownItem>
                {mockDropdownZones.map((z, ind) => (
                    <DropdownItem key={ind} value={z}>
                        {z}
                    </DropdownItem>
                ))}
            </ZoneSelectInput>
            {selectedZone !== 'NONE' ? (
                <ZoneInfoWrapper>
                    <KeyValueWrapper>
                        <Key>Цена(час):</Key>
                        <Value>{zoneInfo.hourlyRate ?? ''} ден.</Value>
                    </KeyValueWrapper>
                    <KeyValueWrapper>
                        <Key>Работни часови:</Key>
                        <Value>
                            {zoneInfo?.workingHours?.from ?? ''} -{' '}
                            {zoneInfo?.workingHours?.to ?? ''}
                        </Value>
                    </KeyValueWrapper>
                </ZoneInfoWrapper>
            ) : null}
        </Wrapper>
    );
};

export default MapUsers;
