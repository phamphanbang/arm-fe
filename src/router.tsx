import {
  createBrowserRouter,
} from "react-router";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import MainLayout from "@/layouts/MainLayout";
import NotFound from "@/pages/NotFound";
import LoginPage from "./pages/login/Login";

// Optional loader
const homeLoader = async () => {
  return { message: "Hello from loader!" };
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
