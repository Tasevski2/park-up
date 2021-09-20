import {
    FiltersWrapper,
    ParkingLotsWrapper,
    AddParkingLotCard,
    AddIcon,
    AddItem,
    SearchBarTextField,
    AutocompleteSearchBar
} from './styles';

import Box from '@mui/material/Box';

import ParkingLotCard from './ParkingLotCard';

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


const ParkingLots = () => {
    console.log(searchBarOptions);
    return <>
        <FiltersWrapper>
            <SearchBar />
            <h1 style={{ margin: 0 }}>Debar Maalo</h1>
            <h4 style={{ margin: 0, width: '220px' }}></h4> {/* TODO DropList */}
        </FiltersWrapper>

        <ParkingLotsWrapper container spacing={{ md: 5 }}>
            <AddParkingLotCard item md={3}>
                <AddItem>
                    <AddIcon />
                </AddItem>
            </AddParkingLotCard>
            {
                parkingLots.map(parkingLot => <ParkingLotCard info={parkingLot} key={parkingLot.id} />)
            }
        </ParkingLotsWrapper>
    </>
};

export default ParkingLots;