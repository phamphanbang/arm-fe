import {
  createBrowserRouter,
} from "react-router";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import RootLayout from "@/layouts/RootLayout";
import NotFound from "@/pages/NotFound";

// Optional loader
const homeLoader = async () => {
  return { message: "Hello from loader!" };
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
