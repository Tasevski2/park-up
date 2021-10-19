import styled from 'styled-components';
import { Typography, Divider } from '@mui/material';

export const Wrapper = styled.div`
  width: 100%;
  height: 240px;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.palette.background.shadow};
  box-shadow: 15px 8px 10px ${(props) => props.theme.palette.background.shadow};
`;

export const Title = styled(Typography).attrs({
  variant: 'h4',
  textAlign: 'center',
  marginBottom: '10px',
  fontSize: '1.7rem',
  fontWeight: 500,
})``;

export const DividerUnderTitle = styled(Divider).attrs({
  sx: {
    borderBottomWidth: '2px',
  },
})``;

export const TableWrapper = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  margin-top: 15px;
  table {
    border-spacing: 0;
    border: 1px solid black;
    border-bottom: 0;
    word-break: break-all;
  }

  table tbody {
    display: block;
    max-height: 110px;
    overflow-y: auto;
  }
  tbody::-webkit-scrollbar {
    display: none;
  }
  table thead,
  table tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  th:first-of-type {
    width: 55%;
  }

  th,
  td {
    padding: 10px 5px;
  }
  th {
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    :first-of-type {
      border-left: 0;
    }
  }
  td {
    border-left: 2px solid black;
    border-bottom: 1px solid black;
  }
  tr td:first-of-type {
    border-left: 0;
    width: 55%;
  }
  tr:last-of-type td {
    border-bottom: 0;
  }
`;