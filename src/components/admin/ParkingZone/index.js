import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IconButton } from '@mui/material';

import ParkingZoneInfo from '../ParkingZoneInfo';
import ParkingZoneSessions from '../ParkingZoneSessions';
import GoogleMaps from '../../GoogleMaps';

import {
  NamesWrapper,
  ParkingAndZoneName,
  DividerUnderNames,
  NavigationIconsWrapper,
  MainSection,
  MapsIcon,
  ComponentIcon,
} from './styles';

import { roles } from '../../../config/enums';

import { parkingZones } from '../ParkingZones/mockData';

const activeComponentEnum = {
  MAPS: 'maps',
  INFO: 'info',
};

const ParkingZone = () => {
  const { zone_id } = useParams();
  const [activeComponent, setActiveComponent] = useState(
    activeComponentEnum.MAPS
  );

  const user = {
    role: 'ROLE_ADMIN',
  };

  const zone = parkingZones.find((z) => z.id === parseInt(zone_id));
  const Info =
    user.role === roles.admin ? ParkingZoneInfo : ParkingZoneSessions;
  return (
    <>
      <NamesWrapper>
        <ParkingAndZoneName>Паркинг - Дебар Маало</ParkingAndZoneName>
        <ParkingAndZoneName>{zone?.zoneName}</ParkingAndZoneName>
      </NamesWrapper>

      <DividerUnderNames />

      <NavigationIconsWrapper>
        <IconButton
          onClick={() => setActiveComponent(activeComponentEnum.MAPS)}
        >
          <MapsIcon $isactive={activeComponent === activeComponentEnum.MAPS} />
        </IconButton>
        <IconButton
          onClick={() => setActiveComponent(activeComponentEnum.INFO)}
        >
          <ComponentIcon
            $isactive={activeComponent === activeComponentEnum.INFO}
          />
        </IconButton>
      </NavigationIconsWrapper>

      <MainSection>
        {activeComponent === activeComponentEnum.MAPS ? (
          <GoogleMaps
            location={zone.location}
            parkingSpaces={zone.parkingSpaces}
            zoneAreaColor={zone.zoneColor}
          />
        ) : (
          <Info zone={zone} />
        )}
      </MainSection>
    </>
  );
};

export default ParkingZone;
