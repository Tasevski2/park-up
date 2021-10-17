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
} from './styles';
import SessionCard from './SessionCard';
import { sessionStatus } from '../../../config/enums';
import { sessionsData } from './mockData';

const ParkingZoneSessions = ({ zone }) => {
  const [sessions, setSession] = useState(sessionsData);
  const [stats, setStats] = useState({
    activeSessions: 0,
    idleSessions: 0,
    overSessions: 0,
  });
  const setSessionsStats = () => {
    let aS = 0;
    let iS = 0;
    let oS = 0;
    sessions.forEach((s) => {
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

  useEffect(() => {
    setSessionsStats();
  }, [sessions]);

  return (
    <Wrapper>
      <Title>ОТВОРЕНИ ПАРКИНГ СЕСИИ</Title>
      <StatsWrapper>
        <Stats>
          {/* PARKING SPACES STATS*/}
          <KeyValueWrapper>
            <StatsKey>Вкупно паркинг места:</StatsKey>
            <StatsValue>{zone.parkingSpaces}</StatsValue>
          </KeyValueWrapper>
          <KeyValueWrapper>
            <StatsKey>Слободни паркинг места:</StatsKey>
            <StatsValue>
              {zone.parkingSpaces - zone.takenParkingSpaces}
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
      <SessionsWrapper>
        {sessions.map((session) => (
          <SessionCard key={session.id} {...session} />
        ))}
      </SessionsWrapper>
    </Wrapper>
  );
};

export default ParkingZoneSessions;
