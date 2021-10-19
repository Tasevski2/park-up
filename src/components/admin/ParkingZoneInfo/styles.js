import styled from 'styled-components';
import EditI from '@mui/icons-material/Edit';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1650px;
  height: 640px;
  padding: 0 10%;
  margin: auto;
  margin-top: 25px;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 500px;
  position: relative;
`;

export const EditIcon = styled(EditI).attrs({
  sx: {
    fontSize: '3rem',
    border: '3px solid #f65026',
    color: '#f65026',
    padding: '5px',
  },
})``;
