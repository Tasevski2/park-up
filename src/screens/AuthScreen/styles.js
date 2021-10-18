import styled from 'styled-components';
import backgroundImage from '../../resources/login_background.jpg';

export const ScreenWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background.whiteSmoke};
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-image: url(${backgroundImage});
  position: relative;
  border-radius: 10px;

  @media (min-width: 450px) {
    max-height: 750px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
