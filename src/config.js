import Home from "./pages/Home";
import { Contact } from "./components";
import Error404 from "./pages/error404";
import { Layout } from "./layout";

const routes = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
