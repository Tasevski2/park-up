import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import { LineProgressBar } from '@frogress/line'


export const ParkingLotWrapper = styled(Grid)`
    height: 350px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.palette.primary.dark};
    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
    position: relative;
`;

export const ParkingName = styled(Typography).attrs({
    variant: 'h2'
})`
    font-size: 2rem;
    font-weight: 600;
    margin-top: 30px;
    text-align: center;
`;

export const InfoWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Label = styled(Typography).attrs({
    variant: 'h4'
})`
    font-size: 1rem;
    margin-bottom: 5px;
`;

export const Value = styled(Typography).attrs({
    variant: 'h3'
})`
    font-size: 1.25rem;
    font-weight: 600;
`;

export const ProgressBar = styled(LineProgressBar).attrs({
    stripe: true,
    progressColor: `#52D681`, //`${props => props.theme.palette.primary.main}` NOT WORKING TODO
    height: '30px',
})`
    position: absolute;
    bottom: 5px;
`;

export const ProgressBarLabel = styled.p`
    margin: 0 0 0 15px;
    line-height: 30px;
    position: absolute;
    font-weight: 500;
`;
