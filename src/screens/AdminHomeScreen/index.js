import {
    Container,
    Header,
    TitleAndLogoWrapper,
    LogoWrapper,
    Logo,
    HeaderTitle,
    UserNameAndLogoutWrapper,
    UserName,
    LogoutIcon,
    SideMenuAndMainSectionWrapper,
    SideMenu,
    DashboardIcon,
    SupervisorAccountIcon,
    MainSection,
} from './styles';

import IconButton from '@mui/material/IconButton';


import logo from '../../resources/logo_2_transparent_bg.jpg';
import ParkingLots from '../../components/admin/ParkingLots';

const AdminHomeScreen = (props) => {
    return <Container>
        <Header>
            <TitleAndLogoWrapper>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
                <HeaderTitle>Park Up</HeaderTitle>
            </TitleAndLogoWrapper>

            <UserNameAndLogoutWrapper>
                <UserName>Viktor Tasevski</UserName>
                <IconButton>
                    <LogoutIcon />
                </IconButton>
            </UserNameAndLogoutWrapper>
        </Header>

        <SideMenuAndMainSectionWrapper>
            <SideMenu>
                <IconButton>
                    <DashboardIcon />
                </IconButton>
                <IconButton>
                    <SupervisorAccountIcon />
                </IconButton>
            </SideMenu>

            <MainSection> {/* TODO PUT IT IN ANOTHER COMPONENT*/}
                <ParkingLots />
            </MainSection>
        </SideMenuAndMainSectionWrapper>
    </Container>
};

export default AdminHomeScreen;