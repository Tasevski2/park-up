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
    HeaderAndMainSectionWrapper,
    SideMenu,
    DashboardIcon,
    SupervisorAccountIcon,
    MainSection,
    DividerUnderHeader,
    UserIcon
} from './styles';

import IconButton from '@mui/material/IconButton';


import logo from '../../resources/logo_2_transparent_bg.jpg';
import ParkingZones from '../../components/admin/ParkingZones';
import EmployeesTable from '../../components/admin/EmployeesTable';
import EmployeeEdit from '../../components/admin/EmployeeEdit';

const AdminHomeScreen = (props) => {
    return <Container>

        <SideMenu>
            <IconButton>
                <DashboardIcon />
            </IconButton>
            <IconButton>
                <SupervisorAccountIcon />
            </IconButton>
        </SideMenu>

        <HeaderAndMainSectionWrapper>
            <Header>
                <TitleAndLogoWrapper>
                    <LogoWrapper>
                        <Logo src={logo} />
                    </LogoWrapper>
                    <HeaderTitle>Park Up</HeaderTitle>
                </TitleAndLogoWrapper>

                <UserNameAndLogoutWrapper>
                    <UserIcon />
                    <UserName>Viktor Tasevski</UserName>
                    <IconButton>
                        <LogoutIcon />
                    </IconButton>
                </UserNameAndLogoutWrapper>
            </Header>
            <DividerUnderHeader />
            <MainSection>
                <ParkingZones />
                {/* <EmployeesTable /> */}
                {/* <EmployeeEdit /> */}
            </MainSection>
        </HeaderAndMainSectionWrapper>
    </Container>
};

export default AdminHomeScreen;