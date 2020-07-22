// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';

// core components/views for Admin layout
import DashboardPage from './views/Dashboard/Dashboard';
import UserProfile from './views/UserProfile/UserProfile';
import TableList from './views/TableList/TableList';


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
