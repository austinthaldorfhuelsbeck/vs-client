// routes.tsx
import { SyntheticEvent } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { Content, PageContainer } from "./App.style";
import Navbar from "./components/Navbar";
import ErrorPage from "./views/ErrorPage";
import Gallery from "./views/Gallery";
import Privacy from "./views/Privacy/Privacy";
import Studio from "./views/Studio";
import Terms from "./views/Terms/Terms";

const createRoutes = (
  toggleTheme: (e: SyntheticEvent<HTMLOrSVGElement>) => void,
  isDarkMode: boolean
): RouteObject[] => [
  {
    path: "/",
    element: (
      <PageContainer>
        <Content>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Outlet />
        </Content>
      </PageContainer>
    ),
    children: [
      {
        path: "",
        element: <Studio />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "*",
        element: <ErrorPage status={404} message={"Page Not Found"} />,
      },
    ],
  },
  {
    path: "galleries/:id",
    element: <Gallery />,
  },
];

export default createRoutes;
