import styled from 'styled-components';
import T from '@mui/material/Table';
import TH from '@mui/material/TableHead';
import TContainer from '@mui/material/TableContainer';
import TR from '@mui/material/TableRow';
import TB from '@mui/material/TableBody';
import TC from '@mui/material/TableCell';

import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export const TableContainer = styled(TContainer).attrs({
    component: Paper
})`
    max-width: 1000px;
`;

export const TableHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    border: 1px solid grey;
    border-bottom: none;
    padding: 10px 16px;
    background-color: ${props => props.theme.palette.grey[400]};
    box-sizing: border-box;
`;

export const TableTitle = styled(Typography).attrs({
    variant: 'h4'
})`
    font-size: 2rem;
    font-weight: 600;
    
`;

export const CreateEmployeeButton = styled(Button).attrs({
    variant: 'contained',
    size: 'large'
})`
    padding-left: 11px;
`;

export const AddIcon = styled(AddCircleOutlineIcon)`
    margin-right: 11px;
`;

export const Table = styled(T).attrs({

})``;

export const TableHead = styled(TH).attrs({

})`
    tr {
        background-color: ${props => `${props.theme.palette.grey[900]}`};
        th {
            color: white;
        }
    }
`;

export const TableRow = styled(TR).attrs({

})``;

export const TableBody = styled(TB).attrs({

})`
    tr:nth-of-type(odd) {
        background-color: ${props => `${props.theme.palette.grey[400]}`};
        :hover {
            cursor: pointer;
            background-color: ${props => `${props.theme.palette.grey[500]}`};
        }
        
    }
    tr:nth-of-type(even) {
        background-color: ${props => `${props.theme.palette.grey[200]}`};
        :hover {
            cursor: pointer;
            background-color: ${props => `${props.theme.palette.grey[300]}`};
        }
    }
`;

export const TableCell = styled(TC).attrs({

})``;

export const ButtonTableCell = styled(TC).attrs({
    sx: {
        padding: 0
    }
})``;

export const ToggleAccoutStatusButton = styled(Button).attrs(props => ({
    variant: 'contained',
    size: 'medium',
    sx: {
        backgroundColor: props.$enabled ? `${props.theme.palette.success.main}` : `${props.theme.palette.error.main}`,
    }
})
)`
    :hover {
        background-color: ${props => props.$enabled ? `${props.theme.palette.success.light}` : `${props.theme.palette.error.light}`}
    }
`;