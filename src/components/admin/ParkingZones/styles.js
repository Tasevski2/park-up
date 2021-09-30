import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography, Divider } from '@mui/material';

import { ParkingZoneWrapper, Container } from './ParkingZoneCard/styles';

export const FiltersWrapper = styled.div`
    box-sizing: border-box;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 175px;
`;
export const DividerUnderFilters = styled(Divider).attrs({
    variant: 'middle',
    sx: {
        margin: '0 160px',
        borderWidth: '2px',
        borderBottomWidth: 'thin'
    }
})``;


export const ParkingName = styled(Typography).attrs(props => ({
    fontSize: '2rem',
    fontWeight: '600',
    margin: 0,
    color: `${props.theme.palette.primary.main}`
}))``;

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
    color: ${props => props.theme.palette.primary.main}
`;

export const AutocompleteSearchBar = styled(Autocomplete).attrs({
    sx: {
        display: 'inline-block',
        bgcolor: 'white',
    }
})`
    width: 220px;
    
`;

export const SearchBarTextField = styled(TextField).attrs({

})`
    input {
        color: ${props => props.theme.palette.primary.main};
    }
    fieldset {
        border-color: ${props => props.theme.palette.primary.main};
    }
`;