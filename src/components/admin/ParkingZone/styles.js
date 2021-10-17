import styled from 'styled-components';
import { Typography, Divider } from '@mui/material';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

export const NamesWrapper = styled.div`
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 175px;
`;

export const ParkingAndZoneName = styled(Typography).attrs((props) => ({
  fontSize: '2rem',
  fontWeight: '600',
  margin: 0,
  color: `${props.theme.palette.primary.main}`,
}))``;

export const DividerUnderNames = styled(Divider).attrs({
  variant: 'middle',
  sx: {
    margin: '0 160px',
    borderWidth: '2px',
    borderBottomWidth: 'thin',
  },
})``;

export const MapsIcon = styled(MapOutlinedIcon).attrs((props) => ({
  sx: {
    width: props.$isactive ? '60px' : '50px',
    height: props.$isactive ? '60px' : '50px',
    color: props.$isactive ? `${props.theme.palette.primary.main}` : '',
  },
}))``;

export const ComponentIcon = styled(EqualizerOutlinedIcon).attrs((props) => ({
  sx: {
    width: props.$isactive ? '60px' : '50px',
    height: props.$isactive ? '60px' : '50px',
    color: props.$isactive ? `${props.theme.palette.primary.main}` : '',
  },
}))``;

export const NavigationIconsWrapper = styled.div`
  height: 86px;
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const MainSection = styled.div`
  height: 100%;
`;
