import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 69vh;
  padding: 0 30px;
`;

export const Marker = styled.div`
  color: white;
  width: 30px;
  height: 25px;
  background-color: ${(props) =>
    props.$isTaken
      ? `${props.theme.palette.error.main}`
      : `${props.theme.palette.success.light}`}};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;
