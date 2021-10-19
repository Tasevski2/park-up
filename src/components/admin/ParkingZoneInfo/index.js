import { Wrapper, RightSideWrapper, EditIcon } from './styles';

import ZoneSector from './ZoneSector';
import ResponsiblePersonsSector from './ResponsiblePersonsSector';
import ParkingSpacesSector from './ParkingSpacesSector';
import { IconButton } from '@mui/material';

const ParkingZoneInfoViewer = ({ zone }) => {
  console.log(zone);
  return (
    <Wrapper>
      <ZoneSector
        name={zone.zoneName}
        hourlyRate={zone.hourlyRate}
        workingHours={zone.workingHours}
        color={zone.areaColor}
        centerLocation={zone.location.center}
        coords={zone.location.coords}
      />
      <RightSideWrapper>
        <IconButton
          style={{
            position: 'absolute',
            top: -68,
            right: -16,
            padding: '16px',
          }}
        >
          <EditIcon />
        </IconButton>
        <ResponsiblePersonsSector persons={zone.responsiblePersons} />
        <ParkingSpacesSector
          parkingSpacesNumber={zone.parkingSpaces}
          parkingSpacesLocation={zone.parkingSpacesLocation}
        />
      </RightSideWrapper>
    </Wrapper>
  );
};

export default ParkingZoneInfoViewer;
