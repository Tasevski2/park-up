import { useState } from 'react';

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
import AbsoluteLoader from '../../../Loaders/AbsoluteLoader';
import useDeleteSession from '../../../../hooks/useDeleteSession';

const sessionCardColors = {
  active: '#389e0d',
  idle: '#ffa940',
  over: '#cf1322',
};

const ActiveCard = ({
  id,
  start,
  zone,
  plate,
  status,
  parkingSpaceNumber,
  onDeleteSession,
}) => {
  const { isLoading: isLoadingDeleteSession, deleteSession } =
    useDeleteSession();
  return (
    <Wrapper style={{ backgroundColor: sessionCardColors.active }}>
      <SessionChildWrapper>
        <SessionChildTitle>Почеток</SessionChildTitle>
        <SeessionChildData>{start}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Зона</SessionChildTitle>
        <SeessionChildData>{zone}</SeessionChildData>
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
        {isLoadingDeleteSession ? (
          <div style={{ width: '104px', textAlign: 'center' }}>
            <AbsoluteLoader
              containerStyle={{
                width: '40px',
                height: '40px',
                display: 'inline-block',
              }}
            />
          </div>
        ) : (
          <DeleteButton
            onClick={() => {
              console.log(`CLICKED DELETE BUTTON ${id}`);
              deleteSession({ id, onDeleteSession });
            }}
          >
            ИЗБРИШИ
          </DeleteButton>
        )}
      </SessionChildWrapper>
    </Wrapper>
  );
};

const IdleCard = ({
  id,
  start,
  zone,
  plate,
  status,
  handleActivateSession,
  isLoadingActivateSession,
  onDeleteSession,
}) => {
  const { isLoading: isLoadingDeleteSession, deleteSession } =
    useDeleteSession();
  const [parkingSpaceNumber, setParkingSpaceNumber] = useState('');
  return (
    <Wrapper style={{ backgroundColor: sessionCardColors.idle }}>
      <SessionChildWrapper>
        <SessionChildTitle>Почеток</SessionChildTitle>
        <SeessionChildData>{start}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Зона</SessionChildTitle>
        <SeessionChildData>{zone}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Број на место</SessionChildTitle>
        <InputAndCheckIconWrapper>
          <ParkingSpaceNumberInput
            value={parkingSpaceNumber}
            onChange={(event) =>
              setParkingSpaceNumber(event.target.value.trim())
            }
          />
          {parkingSpaceNumber !== '' ? (
            <>
              {isLoadingActivateSession ? (
                <AbsoluteLoader
                  containerStyle={{
                    width: '2rem',
                    height: '2rem',
                    display: 'inline-block',
                  }}
                />
              ) : (
                <IconButton
                  onClick={() =>
                    handleActivateSession({ id, parkingSpaceNumber })
                  }
                >
                  <CheckIcon />
                </IconButton>
              )}
            </>
          ) : null}
        </InputAndCheckIconWrapper>
      </SessionChildWrapper>

      <SessionChildWrapper>
        <SessionChildTitle>Регистрација</SessionChildTitle>
        <SeessionChildData>{plate}</SeessionChildData>
      </SessionChildWrapper>

      <SessionChildWrapper>
        {isLoadingDeleteSession ? (
          <div style={{ width: '104px', textAlign: 'center' }}>
            <AbsoluteLoader
              containerStyle={{
                width: '40px',
                height: '40px',
                display: 'inline-block',
              }}
            />
          </div>
        ) : (
          <DeleteButton
            onClick={() => {
              console.log(`CLICKED DELETE BUTTON ${id}`);
              deleteSession({ id, onDeleteSession });
            }}
          >
            ИЗБРИШИ
          </DeleteButton>
        )}
      </SessionChildWrapper>
    </Wrapper>
  );
};

const OverCard = ({
  id,
  start,
  end,
  zone,
  plate,
  status,
  parkingSpaceNumber,
  onDeleteSession,
}) => {
  const { isLoading: isLoadingDeleteSession, deleteSession } =
    useDeleteSession();
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
        <SessionChildTitle>Зона</SessionChildTitle>
        <SeessionChildData>{zone}</SeessionChildData>
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
        {isLoadingDeleteSession ? (
          <div style={{ width: '104px', textAlign: 'center' }}>
            <AbsoluteLoader
              containerStyle={{
                width: '40px',
                height: '40px',
                display: 'inline-block',
              }}
            />
          </div>
        ) : (
          <DeleteButton
            onClick={() => {
              console.log(`CLICKED DELETE BUTTON ${id}`);
              deleteSession({ id, onDeleteSession });
            }}
          >
            ИЗБРИШИ
          </DeleteButton>
        )}
      </SessionChildWrapper>
    </Wrapper>
  );
};

const SessionCard = ({
  handleActivateSession,
  isLoadingActivateSession,
  ...commponProps
}) => {
  switch (commponProps.status) {
    case sessionStatus.active:
      return <ActiveCard {...commponProps} />;
    case sessionStatus.idle:
      return (
        <IdleCard
          {...commponProps}
          handleActivateSession={handleActivateSession}
          isLoadingActivateSession={isLoadingActivateSession}
        />
      );
    case sessionStatus.over:
      return <OverCard {...commponProps} />;
    default:
      return null;
  }
};

export default SessionCard;
