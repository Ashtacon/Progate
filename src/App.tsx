import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideMenuLayout from "./layouts/SideMenuLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenuLayout title={"Home"} />,
  },
  {
    path: "task-list",
    element: <SideMenuLayout title={"Task List"} />,
  },
  {
    path: "task-progress",
    element: <SideMenuLayout title={"Progress Management"} />,
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
