import { useEffect, useRef, useState } from 'react';
import {
  Wrapper,
  Title,
  SessionsWrapper,
  StatsWrapper,
  Stats,
  KeyValueWrapper,
  StatsKey,
  StatsValue,
  SearchField,
  SearchIcon,
} from './styles';
import SessionCard from './SessionCard';
import { sessionStatus } from '../../../config/enums';
import useGetSessions from '../../../hooks/useGetSessions';
import AbsoluteLoader from '../../Loaders/AbsoluteLoader';

import { sessionsData } from './mockData';
import useActivateSession from '../../../hooks/useActivateSession';

const sortSessions = (a, b) => {
  // first - yellow/idle, second - red/finished, third - green/active
  switch (a.status) {
    case sessionStatus.active:
      switch (b.status) {
        case sessionStatus.active:
          return -1;
        case sessionStatus.over:
        case sessionStatus.idle:
          return 1;
        default:
          return 1;
      }
    case sessionStatus.over:
      switch (b.status) {
        case sessionStatus.active:
        case sessionStatus.over:
          return -1;
        case sessionStatus.idle:
          return 1;
        default:
          return 1;
      }
    case sessionStatus.idle:
      switch (b.status) {
        case sessionStatus.active:
        case sessionStatus.over:
        case sessionStatus.idle:
          return -1;
        default:
          return 1;
      }
    default:
      return -1;
  }
};

const ParkingZoneSessions = ({ zone }) => {
  const { isLoading: isLoadingActivateSession, activateSession } =
    useActivateSession();
  const { data: sessions, isLoading: isLoadingSessions } = useGetSessions(); // TODO REPLACE IT WITH THE REAL ONE
  const [mockSessionsData, setMockSessionsData] = useState([...sessionsData]);
  const newState = useRef([...sessionsData]);
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState({
    activeSessions: 0,
    idleSessions: 0,
    overSessions: 0,
  });

  const setSessionsStats = () => {
    let aS = 0;
    let iS = 0;
    let oS = 0;
    mockSessionsData.forEach((s) => {
      switch (s.status) {
        case sessionStatus.active:
          aS += 1;
          break;
        case sessionStatus.idle:
          iS += 1;
          break;
        case sessionStatus.over:
          oS += 1;
          break;
        default:
          break;
      }
    });
    setStats({
      activeSessions: aS,
      idleSessions: iS,
      overSessions: oS,
    });
  };

  const onActivateSession = ({ id, parkingSpaceNumber }) => {
    const updatedSession = mockSessionsData.find((s) => s.id === id);
    updatedSession.parkingSpaceNumber = parkingSpaceNumber;
    updatedSession.status = sessionStatus.active;
  };

  const handleActivateSession = ({ id, parkingSpaceNumber }) => {
    activateSession({ id, parkingSpaceNumber, onActivateSession });
  };

  const onDeleteSession = ({ id }) => {
    console.log(`STARTED FILTERING ${id}`);
    newState.current = newState.current.filter((s) => s.id !== id);
    setMockSessionsData(newState.current);
    console.log(newState.current);
    console.log(`ENDED FILTERING ${id}`);
    // console.log(`STATE:`, mockSessionsData);
    // TODO SET THE MAIN DATA FIRST THEN setFilteredSessions(MAIN DATA)
  };

  useEffect(() => {
    setSessionsStats();
  }, [mockSessionsData]);

  return (
    <Wrapper>
      <Title>ОТВОРЕНИ ПАРКИНГ СЕСИИ</Title>
      <StatsWrapper>
        <Stats>
          {/* PARKING SPACES STATS*/}
          <KeyValueWrapper>
            <StatsKey>Вкупно паркинг места:</StatsKey>
            <StatsValue>{zone.parkingSpacesNumber}</StatsValue>
          </KeyValueWrapper>
          <KeyValueWrapper>
            <StatsKey>Слободни паркинг места:</StatsKey>
            <StatsValue>
              {zone.parkingSpacesNumber - zone.takenParkingSpaces}
            </StatsValue>
          </KeyValueWrapper>
          <KeyValueWrapper>
            <StatsKey>Зафатени паркинг места:</StatsKey>
            <StatsValue>{zone.takenParkingSpaces}</StatsValue>
          </KeyValueWrapper>
        </Stats>
        {/* SESSIONS STATS*/}
        <Stats>
          <KeyValueWrapper>
            <StatsKey>Активни паркинг сесии:</StatsKey>
            <StatsValue>{stats.activeSessions}</StatsValue>
          </KeyValueWrapper>
          <KeyValueWrapper>
            <StatsKey>Завршени паркинг сесии:</StatsKey>
            <StatsValue>{stats.overSessions}</StatsValue>
          </KeyValueWrapper>
          <KeyValueWrapper>
            <StatsKey>Неактивни паркинг сесии:</StatsKey>
            <StatsValue>{stats.idleSessions}</StatsValue>
          </KeyValueWrapper>
        </Stats>
      </StatsWrapper>
      <SearchField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <SessionsWrapper>
        {isLoadingSessions ? (
          <AbsoluteLoader
            containerStyle={{
              width: '150px',
              height: '150px',
              margin: 'auto',
              marginTop: '50px',
            }}
          />
        ) : (
          <>
            {mockSessionsData
              .filter((session) =>
                session.plate
                  .concat(` ${session.parkingSpaceNumber}`)
                  .toLowerCase()
                  .includes(search.trim().toLowerCase())
              )
              .sort(sortSessions)
              .map((session) => (
                <SessionCard
                  key={session.id}
                  {...session}
                  handleActivateSession={handleActivateSession}
                  isLoadingActivateSession={isLoadingActivateSession}
                  onDeleteSession={onDeleteSession}
                />
              ))}
          </>
        )}
      </SessionsWrapper>
    </Wrapper>
  );
};

export default ParkingZoneSessions;
