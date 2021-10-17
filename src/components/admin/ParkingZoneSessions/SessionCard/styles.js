import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  padding: 10px 30px;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  box-shadow: 0 10px 5px -2px ${(props) => props.theme.palette.background.shadow};
`;

export const SessionChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SessionChildTitle = styled.p`
  text-align: center;
  margin: 0;
  margin-bottom: 5px;
`;

export const SeessionChildData = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
`;

export const InputAndCheckIconWrapper = styled.div`
  position: relative;

  button {
    padding: 0;
    position: absolute;
    right: -40px;
  }
`;

export const ParkingSpaceNumberInput = styled.input`
  width: 100px;
  height: 30px;
  text-align: center;
`;

export const CheckIcon = styled(CheckCircleOutlineIcon).attrs({
  sx: {
    color: '#2e7d32',
    fontSize: '2rem',
  },
})``;

export const DeleteButton = styled(Button).attrs((props) => ({
  variant: 'contained',
  size: 'medium',
  sx: {
    backgroundColor: `#ff1919`,
  },
}))`
  :hover {
    background-color: #e51616;
  }
`;

export const ContinueButton = styled(Button).attrs((props) => ({
  variant: 'contained',
  size: 'small',
  sx: {
    backgroundColor: `${props.theme.palette.primary.main}`,
  },
}))`
  margin-top: 20px;

  :hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;