import {
    FiltersWrapper,
    ParkingZonesWrapper,
    AddParkingZoneCard,
    AddIcon,
    AddItem,
    SearchBarTextField,
    AutocompleteSearchBar
} from './styles';

import Box from '@mui/material/Box';

import ParkingZoneCard from './ParkingZoneCard';

import {
    parkingLots
} from './mockData';

const searchBarOptions = parkingLots.map(p => {
    return {
        person: p.responsiblePerson
    }
});


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
            <SearchBar />
            <h1 style={{ margin: 0 }}>Debar Maalo</h1>
            <div style={{ margin: 0, width: '220px' }} /> {/* TODO DropList */}
        </FiltersWrapper>

        <ParkingZonesWrapper container spacing={{ md: 5 }}>
            <AddParkingZoneCard item md={3}>
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