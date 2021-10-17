import { Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
  UserIcon,
} from './styles';

import IconButton from '@mui/material/IconButton';

import logo from '../../resources/logo_2_transparent_bg.jpg';
import { roles } from '../../config/enums';
import DestinationComponent from '../../utils/DestinationComponent';
import onClickRouting from '../../utils/onClickRouting';

import ParkingZones from '../../components/admin/ParkingZones';
import EmployeesTable from '../../components/admin/EmployeesTable';
import EmployeeEdit from '../../components/admin/EmployeeEdit';
import EmployeeCreate from '../../components/admin/EmployeeCreate';
import ParkingZone from '../../components/admin/ParkingZone';

const ToParkingZones = new DestinationComponent('/', ParkingZones, true);
const ToEmployeesTable = new DestinationComponent(
  '/employees',
  EmployeesTable,
  true
);
const ToEmployeeCreate = new DestinationComponent(
  '/employees/create',
  EmployeeCreate,
  true
);
const ToEmployeeEdit = new DestinationComponent(
  '/employees/:employeeId',
  EmployeeEdit,
  true
);
const ToParkingZone = new DestinationComponent(
  '/zone/:zone_id',
  ParkingZone,
  true
);

const adminRoutes = [
  ToParkingZones,
  ToEmployeesTable,
  ToEmployeeCreate,
  ToEmployeeEdit,
  ToParkingZone,
];

const employeeRoutes = [ToParkingZones, ToParkingZone];

const AdminHomeScreen = (props) => {
  let history = useHistory();
  const user = {
    role: 'ROLE_ADMIN',
  };

  let routes = user.role === roles.admin ? adminRoutes : employeeRoutes;

  return (
    <Container>
      <SideMenu>
        <IconButton onClick={() => onClickRouting('/', history)}>
          <DashboardIcon />
        </IconButton>
        {user.role === roles.admin ? (
          <IconButton onClick={() => onClickRouting('/employees', history)}>
            <SupervisorAccountIcon />
          </IconButton>
        ) : null}
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
          <Switch>
            {routes?.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            <Redirect to='/' />
          </Switch>
        </MainSection>
      </HeaderAndMainSectionWrapper>
    </Container>
  );
};

export default AdminHomeScreen;
