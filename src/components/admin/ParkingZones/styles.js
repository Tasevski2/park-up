import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { ParkingZoneWrapper, Container } from './ParkingZoneCard/styles';

export const FiltersWrapper = styled.div`
    background-color: ${props => props.theme.palette.secondary.main};
    margin: 0 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    padding: 10px 15px;
`;

export const ParkingZonesWrapper = styled(Grid)`
    margin: 0;
    height: 100%;
    width: 100%;
    padding: 0 40px 0 0;
`;

export const AddParkingZoneCard = styled(ParkingZoneWrapper)``;

export const AddItem = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: middle;
`;

export const AddIcon = styled(Add).attrs({
    sx: {
        fontWeight: 500
    }
})`
    width: 100%;
    height: 100%;
    color: ${props => props.theme.palette.secondary.dark}
`;

export const AutocompleteSearchBar = styled(Autocomplete)`
    width: 220px;
`;

export const SearchBarTextField = styled(TextField)`
    background-color: ${props => props.theme.palette.primary.main}
`;