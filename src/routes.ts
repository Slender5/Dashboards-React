// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import Unarchive from '@material-ui/icons/Unarchive';
import Language from '@material-ui/icons/Language';
// core components/views for Admin layout
import DashboardPage from './views/Dashboard/Dashboard';
import UserProfile from './views/UserProfile/UserProfile';
import TableList from './views/TableList/TableList';
import NotificationsPage from './views/Notifications/Notifications';

import LoginPage from './auth/LoginPage'


const dashboardRoutes = [
  {
    path: '/login',
    name: 'Login',
    icon: Person,
    component: LoginPage,
    layout: '/admin'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/user',
    name: 'Usario',
    icon: Person,
    component: UserProfile,
    layout: '/admin'
  },
  {
    path: '/table',
    name: 'Empleados',
    icon: 'content_paste',
    component: TableList,
    layout: '/admin'
  }

];

export default dashboardRoutes;
