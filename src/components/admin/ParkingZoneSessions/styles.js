import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 12% 0 12%;
  width: 100%;
  max-width: 1440px;
  margin: auto;
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
  width: 280px;
  justify-content: space-between;
`;

export const StatsKey = styled.p`
  margin: 0;
  background: -webkit-linear-gradient(#333333, #4cc5a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
`;

export const StatsValue = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1.4rem;
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
