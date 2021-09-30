import {
    FiltersWrapper,
    ParkingZonesWrapper,
    AddParkingZoneCard,
    AddIcon,
    AddItem,
    SearchBarTextField,
    AutocompleteSearchBar,
    ParkingName,
    DividerUnderFilters
} from './styles';

import Box from '@mui/material/Box';

import ParkingZoneCard from './ParkingZoneCard';

import {
    parkingLots
} from './mockData';

const searchBarOptions = parkingLots
    .flatMap(p => p.responsiblePersons)
    .map(person => ({
        person
    }));


const SearchBar = () => {
    return (
        <AutocompleteSearchBar
            id="parking-zone-select"
            options={searchBarOptions}
            autoHighlight
            getOptionLabel={(option) => option.person}
            renderOption={(props, option) => (
                <Box component="li" {...props}>
                    {option.person}
                </Box>
            )}
            renderInput={(params) => (
                <SearchBarTextField
                    {...params}
                    label="Prebaraj spored licnost"
                    inputProps={{
                        ...params.inputProps
                    }}
                />
            )}
        />
    );
}


const ParkingZones = () => {
    console.log(searchBarOptions);
    return <>
        <FiltersWrapper>
            <ParkingName>Parking - Debar Maalo</ParkingName>
            <SearchBar />
        </FiltersWrapper>

        <DividerUnderFilters />

        <ParkingZonesWrapper container spacing={{ xs: 3, md: 5 }}>
            <AddParkingZoneCard item xs={11} sm={6} md={3}>
                <AddItem>
                    <AddIcon />
                </AddItem>
            </AddParkingZoneCard>
            {
                parkingLots.map(parkingLot => <ParkingZoneCard info={parkingLot} key={parkingLot.id} />)
            }
        </ParkingZonesWrapper>
    </>
};

export default ParkingZones;