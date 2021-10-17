import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px 175px 0 175px;
  width: 100%;
  height: 100%;
`;

export const Title = styled(Typography).attrs({
  variant: 'h3',
  fontSize: '2rem',
  fontWeight: 600,
})`
  background: -webkit-linear-gradient(#333333, #4cc5a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 30px 0 10px 0;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KeyValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 220px;
  justify-content: space-between;
`;

export const StatsKey = styled.p`
  margin: 0;
  background: -webkit-linear-gradient(#333333, #4cc5a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatsValue = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1.2rem;
  background: -webkit-linear-gradient(#333333, #4cc5a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SessionsWrapper = styled.div`
  height: 45vh;
  width: 100%;
  overflow: auto;
  padding-top: 20px;

  > div:not(div:first-of-type) {
    margin-top: 24px;
  }
`;
