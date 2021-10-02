import { useState } from 'react';
import {
    FiltersWrapper,
    SortingArrowsWrapper,
    SortByTitle,
    ArrowDown,
    ArrowUp,
    ClearSortIcon,
    ParkingZonesWrapper,
    AddParkingZoneCard,
    AddIcon,
    AddItem,
    ParkingName,
    DividerUnderFilters
} from './styles';

import ParkingZoneCard from './ParkingZoneCard';

import {
    roles
} from '../../../config/enums';

import {
    parkingZones
} from './mockData';

const sortDownUp = (a, b) => {
    const aPercent = a.takenParkingSpaces / a.parkingSpaces;
    const bPercent = b.takenParkingSpaces / b.parkingSpaces;
    if (aPercent > bPercent) {
        return 1;
    } else {
        if (aPercent < bPercent) {
            return -1;
        }
        return a.parkingName - b.parkingName;
    }
};

const sortUpDown = (a, b) => {
    const aPercent = a.takenParkingSpaces / a.parkingSpaces;
    const bPercent = b.takenParkingSpaces / b.parkingSpaces;
    if (aPercent > bPercent) {
        return -1;
    } else {
        if (aPercent < bPercent) {
            return 1;
        }
        return a.parkingName - b.parkingName;
    }
};

const sortByName = (a, b) => {
    if (a.parkingName >= b.parkingName) {
        return 1;
    }
    return -1;
};

const ParkingZones = () => {
    const [isArrowUpUp, setIsArrowUpUp] = useState(false);
    const [isArrowDownUp, setIsArrowDownUp] = useState(false);

    const user = {
        role: 'ROLE_ADMIN'
    };
    const sortFunc = isArrowUpUp ? sortDownUp : isArrowDownUp ? sortUpDown : sortByName;

    return <>
        <FiltersWrapper>
            <ParkingName>Parking - Debar Maalo</ParkingName>
            <SortingArrowsWrapper>
                <SortByTitle>Sortiraj:</SortByTitle>
                <ArrowUp onClick={() => {
                    if (!isArrowUpUp) {
                        setIsArrowUpUp(true);
                        setIsArrowDownUp(false);
                    }
                }}
                    selected={isArrowUpUp}
                />
                <ArrowDown onClick={() => {
                    if (!isArrowDownUp) {
                        setIsArrowDownUp(true);
                        setIsArrowUpUp(false);
                    }
                }}
                    selected={isArrowDownUp}
                />
                {
                    isArrowUpUp || isArrowDownUp ?
                        <ClearSortIcon
                            onClick={() => {
                                setIsArrowUpUp(false);
                                setIsArrowDownUp(false);
                            }}
                        />
                        :
                        null
                }
            </SortingArrowsWrapper>
        </FiltersWrapper>

        <DividerUnderFilters />

        <ParkingZonesWrapper container spacing={{ xs: 3, md: 5 }}>
            {
                user.role === roles.admin ? (
                    < AddParkingZoneCard item xs={11} sm={6} md={3}>
                        <AddItem>
                            <AddIcon />
                        </AddItem>
                    </AddParkingZoneCard>
                )
                    :
                    null
            }

            {
                parkingZones
                    .sort(sortFunc)
                    .map(parkingLot => <ParkingZoneCard info={parkingLot} key={parkingLot.id} />)
            }
        </ParkingZonesWrapper>
    </>
};

export default ParkingZones;