import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import ReactGA from "../lib/analytics";

import Layout from "../layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/DestinationsPage";
import DestinationDetail from "../pages/DestinationDetail";
import NotFound from "../pages/NotFound";
import ThankYouPage from "../pages/ThankYouPage";
import Contact from "../pages/ContactUs";

/* =========================
   GA4 PAGE VIEW TRACKING
========================= */

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",

      page: location.pathname,
    });
  }, [location]);

  return null;
};

/* =========================
   ROUTER
========================= */

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AnalyticsTracker />

      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact-us"
            element={<Contact/>}
          />

          <Route
            path="/destinations"
            element={<Destinations />}
          />

          <Route
            path="/destinations/:slug"
            element={<DestinationDetail />}
          />


          <Route
            path="/thank-you"
            element={<ThankYouPage/>}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;