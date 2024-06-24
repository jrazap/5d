import { createBrowserRouter } from "react-router-dom";
import LayoutComponent from "./layout.jsx";
import App from "./App.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
