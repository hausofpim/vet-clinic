import About from "../ui/pages/About/About";
import Dashboard from "../ui/pages/Dashboard/Dashboard";
import HomeIcon from "../icons/router/HomeIcon";

export interface IRoute {
  path: string;
  component: any;
  icon: any;
}

export default class AppRouter {
  private routes: IRoute[] = [
    {
      path: "/",
      component: Dashboard,
      icon: HomeIcon,
    },
    {
      path: "/about",
      component: About,
      icon: HomeIcon,
    },
  ];

  public getRoutes(): IRoute[] {
    return this.routes;
  }
}
