import { Switch, Route, RouteProps } from 'react-router-dom';

import Home from 'screens/Home';

type RoutesObject = {
  routename: string;
} & RouteProps;

const Routes = () => {
  const routes: RoutesObject[] = [
    {
      routename: 'HomeScreen',
      component: Home,
      exact: true,
      path: '/'
    }
  ];

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.routename} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
