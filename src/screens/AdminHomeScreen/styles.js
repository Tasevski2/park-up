import styled from 'styled-components';
import { Typography } from "@mui/material";

import Logout from '@mui/icons-material/Logout';
import Dashboard from '@mui/icons-material/Dashboard';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: 46px;
    padding: 10px;
    background-color: ${props => props.theme.palette.secondary.main}
`;

export const TitleAndLogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


export const HeaderTitle = styled(Typography).attrs({
    variant: 'h1',
})`
    color: ${props => props.theme.palette.primary.main};
    font-size: 2.5rem;
    display: flex;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
`;

export const LogoWrapper = styled.div`
    height: 100%;
    width: 50px;
`;

export const UserNameAndLogoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    align-items: center;
`;

export const UserName = styled(Typography).attrs({
    variant: 'subtitle1',
})`
    margin-right: 15px;
`;

export const LogoutIcon = styled(Logout)``;


export const SideMenuAndMainSectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    box-sizing: border-box;
`;

export const SideMenu = styled.div`
    flex-direction: column;
    height: 100%;
    width: 70px;
    padding: 20px 10px 0 10px;
    box-sizing: border-box;
    background-color: ${props => props.theme.palette.secondary.main}; 
`;

export const DashboardIcon = styled(Dashboard).attrs({
    sx: {
        fontSize: 35
    }
})`
    margin-bottom: 15px;
`;

export const SupervisorAccountIcon = styled(SupervisorAccount).attrs({
    sx: {
        fontSize: 35
    }
})``;

export const MainSection = styled.div`
    width: 100%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.palette.secondary.light};
`;



