import { useLayoutEffect, Suspense, lazy } from "react";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import PageLoader from "./components/PageLoader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const Index = lazy(() => import("./pages/Index"));
const Blogs = lazy(() => import("./pages/Blogs"));
const OSS = lazy(() => import("./pages/OSS"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));
const NotFound = lazy(() => import("./components/NotFound"));

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

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-r-2 border-blue/80"></div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Suspense fallback={<RouteFallback />}><Index /></Suspense> },
      { path: "projects/:slug", element: <Suspense fallback={<RouteFallback />}><ProjectDetail /></Suspense> },
      { path: "blogs", element: <Suspense fallback={<RouteFallback />}><Blogs /></Suspense> },
      { path: "blogs/:slug", element: <Suspense fallback={<RouteFallback />}><BlogDetail /></Suspense> },
      { path: "oss", element: <Suspense fallback={<RouteFallback />}><OSS /></Suspense> },
      { path: "*", element: <Suspense fallback={<RouteFallback />}><NotFound /></Suspense> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
