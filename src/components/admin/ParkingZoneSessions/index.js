import { useEffect, useState } from 'react';
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
import { sessionsData } from './mockData';

const sortSessions = (a, b) => {
  // first - yellow/idel, second - red/finished, third - green/active
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
  const [filteredSessions, setFilteredSessions] = useState(sessionsData);
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
    sessionsData.forEach((s) => {
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

  const onChangeSearch = (e) => {
    let newSearchValue = e.target.value;
    setSearch(newSearchValue);
    const filteredData = sessionsData.filter((session) =>
      session.plate
        .concat(` ${session.parkingSpaceNumber}`)
        .toLowerCase()
        .includes(newSearchValue.trim().toLowerCase())
    );

    setFilteredSessions(filteredData);
  };

  useEffect(() => {
    setSessionsStats();
  }, [sessionsData]);

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
        onChange={onChangeSearch}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <SessionsWrapper>
        {filteredSessions.sort(sortSessions).map((session) => (
          <SessionCard key={session.id} {...session} />
        ))}
      </SessionsWrapper>
    </Wrapper>
  );
};

export default ParkingZoneSessions;
