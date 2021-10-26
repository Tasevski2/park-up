import { useContext, useState } from 'react';
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
  MenuBurgerIcon,
  DrawerContainer,
  CloseIcon,
  DividerUnderListItem,
  DividerUnderList,
} from './styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import logo from '../../resources/logo_2_transparent_bg.png';
import { roles } from '../../config/enums';
import DestinationComponent from '../../utils/DestinationComponent';
import onClickRouting from '../../utils/onClickRouting';

import ParkingZones from '../../components/admin/ParkingZones';
import EmployeesTable from '../../components/admin/EmployeesTable';
import EmployeeEdit from '../../components/admin/EmployeeEdit';
import EmployeeCreate from '../../components/admin/EmployeeCreate';
import ParkingZone from '../../components/admin/ParkingZone';

import { UserContext } from '../../context/UserContext';
import { AccessoriesContext } from '../../context/AccessoriesContext';

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
  const { user } = useContext(UserContext);
  const { isMobile } = useContext(AccessoriesContext);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  let history = useHistory();

  let routes = user.role === roles.admin ? adminRoutes : employeeRoutes;

  return (
    <Container>
      {isMobile ? (
        <SwipeableDrawer
          open={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
          onOpen={() => setIsOpenDrawer(true)}
        >
          <DrawerContainer>
            <IconButton
              onClick={() => setIsOpenDrawer(false)}
              style={{ marginLeft: '190px' }}
            >
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem
                onClick={() => {
                  setIsOpenDrawer(false);
                  onClickRouting('/', history);
                }}
              >
                <ListItemIcon>
                  <DashboardIcon style={{ margin: 0 }} />
                </ListItemIcon>
                <ListItemText primary='Зони' />
              </ListItem>
              <DividerUnderListItem />
              {user.role === roles.admin ? (
                <>
                  <ListItem
                    onClick={() => {
                      setIsOpenDrawer(false);
                      onClickRouting('/employees', history);
                    }}
                  >
                    <ListItemIcon>
                      <SupervisorAccountIcon style={{ margin: 0 }} />
                    </ListItemIcon>
                    <ListItemText primary='Вработени' />
                  </ListItem>
                  <DividerUnderListItem />
                </>
              ) : null}
            </List>
            <List>
              <DividerUnderList />
              <ListItem>
                <ListItemIcon>
                  <UserIcon style={{ margin: 0 }} />
                </ListItemIcon>
                <ListItemText primary={`${user.firstName} ${user.lastName}`} />
              </ListItem>
              <DividerUnderListItem />
              <ListItem onClick={() => {}}>
                <ListItemIcon>
                  <LogoutIcon style={{ margin: 0 }} />
                </ListItemIcon>
                <ListItemText primary='Одјави Се' />
              </ListItem>
            </List>
          </DrawerContainer>
        </SwipeableDrawer>
      ) : (
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
      )}

      <HeaderAndMainSectionWrapper>
        <Header>
          {isMobile ? (
            <IconButton
              onClick={() => setIsOpenDrawer(true)}
              style={{ padding: 0 }}
            >
              <MenuBurgerIcon />
            </IconButton>
          ) : null}
          <TitleAndLogoWrapper>
            <LogoWrapper>
              <Logo src={logo} />
            </LogoWrapper>
            <HeaderTitle>Park Up</HeaderTitle>
          </TitleAndLogoWrapper>

          {isMobile ? null : (
            <UserNameAndLogoutWrapper>
              <UserIcon />
              <UserName>
                {user.firstName} {user.lastName}
              </UserName>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </UserNameAndLogoutWrapper>
          )}
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
