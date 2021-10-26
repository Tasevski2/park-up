import {
  Wrapper,
  SessionChildWrapper,
  SessionChildTitle,
  SeessionChildData,
  InputAndCheckIconWrapper,
  ParkingSpaceNumberInput,
  CheckIcon,
  DeleteButton,
} from './styles';

import { sessionStatus } from '../../../../config/enums';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const sessionCardColors = {
  active: '#389e0d',
  idle: '#ffa940',
  over: '#cf1322',
};

const ActiveCard = ({ id, start, plate, status, parkingSpaceNumber }) => {
  return (
    <Wrapper style={{ backgroundColor: sessionCardColors.active }}>
      <SessionChildWrapper>
        <SessionChildTitle>Почеток</SessionChildTitle>
        <SeessionChildData>{start}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Број на место</SessionChildTitle>
        <SeessionChildData>{parkingSpaceNumber}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Регистрација</SessionChildTitle>
        <SeessionChildData>{plate}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <DeleteButton>ИЗБРИШИ</DeleteButton>
      </SessionChildWrapper>
    </Wrapper>
  );
};

const IdleCard = ({ id, start, plate, status, parkingSpaceNumber }) => {
  const [parkingSpace, setParkingSpace] = useState(parkingSpaceNumber ?? '');
  return (
    <Wrapper style={{ backgroundColor: sessionCardColors.idle }}>
      <SessionChildWrapper>
        <SessionChildTitle>Почеток</SessionChildTitle>
        <SeessionChildData>{start}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Број на место</SessionChildTitle>
        <InputAndCheckIconWrapper>
          <ParkingSpaceNumberInput
            value={parkingSpace}
            onChange={(event) => setParkingSpace(event.target.value)}
          />
          {parkingSpace !== '' ? (
            <IconButton>
              <CheckIcon />
            </IconButton>
          ) : null}
        </InputAndCheckIconWrapper>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Регистрација</SessionChildTitle>
        <SeessionChildData>{plate}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <DeleteButton>ИЗБРИШИ</DeleteButton>
      </SessionChildWrapper>
    </Wrapper>
  );
};

const OverCard = ({ id, start, end, plate, status, parkingSpaceNumber }) => {
  return (
    <Wrapper style={{ backgroundColor: sessionCardColors.over }}>
      <SessionChildWrapper>
        <SessionChildWrapper style={{ margin: 0 }}>
          <SessionChildTitle>Почеток</SessionChildTitle>
          <SeessionChildData>{start}</SeessionChildData>
        </SessionChildWrapper>
        <SessionChildWrapper style={{ marginTop: '5px' }}>
          <SessionChildTitle>Крај</SessionChildTitle>
          <SeessionChildData>{end}</SeessionChildData>
        </SessionChildWrapper>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Број на место</SessionChildTitle>
        <SeessionChildData>{parkingSpaceNumber}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Регистрација</SessionChildTitle>
        <SeessionChildData>{plate}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <DeleteButton>ИЗБРИШИ</DeleteButton>
      </SessionChildWrapper>
    </Wrapper>
  );
};

const SessionCard = (props) => {
  switch (props.status) {
    case sessionStatus.active:
      return <ActiveCard {...props} />;
    case sessionStatus.idle:
      return <IdleCard {...props} />;
    case sessionStatus.over:
      return <OverCard {...props} />;
    default:
      return null;
  }
};

export default SessionCard;
