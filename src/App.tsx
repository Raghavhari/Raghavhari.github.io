import { useLayoutEffect } from "react";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./components/NotFound";
import Blogs from "./pages/Blogs";
import BlogDetail from "./components/BlogDetail";
import OSS from "./pages/OSS";
import Travel from "./pages/Travel";
import ProjectDetail from "./components/ProjectDetail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageLoader from "./components/PageLoader";

function HomeHashScroll() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    if (pathname !== "/" || hash !== "#projects") return;
    requestAnimationFrame(() => {
      document.getElementById("projects")?.scrollIntoView({ block: "start", behavior: "auto" });
    });
  }, [pathname, hash, key]);

  return null;
}

function RootLayout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <ScrollRestoration />
      <HomeHashScroll />
      <PageLoader />
      <Header />
      <main className="flex-1 pt-24 sm:pt-28 md:pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "projects/:slug", element: <ProjectDetail /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:slug", element: <BlogDetail /> },
      { path: "oss", element: <OSS /> },
      { path: "travel", element: <Travel /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
