import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const RouterConfig = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
]);

export default RouterConfig;
