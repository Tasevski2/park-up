import { useState } from 'react';

import { Wrapper } from './styles';

import ParkingZoneInfoViewer from '../ParkingZoneInfoViewer';
import ParkingZoneInfoEdit from '../ParkingZoneInfoEdit';

const ParkingZoneInfo = ({ zone }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Wrapper>
      {editMode ? (
        <ParkingZoneInfoEdit zone={zone} setEditMode={setEditMode} />
      ) : (
        <ParkingZoneInfoViewer zone={zone} setEditMode={setEditMode} />
      )}
    </Wrapper>
  );
};

export default ParkingZoneInfo;
