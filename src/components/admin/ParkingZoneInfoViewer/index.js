import { RightSideWrapper, EditIcon } from './styles';

import ZoneSector from './ZoneSector';
import ResponsiblePersonsSector from './ResponsiblePersonsSector';
import ParkingSpacesSector from './ParkingSpacesSector';
import { IconButton } from '@mui/material';

const ParkingZoneInfoViewer = ({ zone, setEditMode }) => {
  return (
    <>
      <ZoneSector
        name={zone.zoneName}
        hourlyRate={zone.hourlyRate}
        workingHours={zone.workingHours}
        color={zone.zoneColor}
        centerLocation={zone.location.center}
        coords={zone.location.coords}
      />
      <RightSideWrapper>
        <IconButton
          style={{
            position: 'absolute',
            top: -60,
            right: -8,
          }}
          onClick={() => setEditMode(true)}
        >
          <EditIcon />
        </IconButton>
        <ResponsiblePersonsSector persons={zone.responsiblePersons} />
        <ParkingSpacesSector
          parkingSpacesNumber={zone.parkingSpacesNumber}
          parkingSpacesLocation={zone.parkingSpaces}
        />
      </RightSideWrapper>
    </>
  );
};

export default ParkingZoneInfoViewer;
