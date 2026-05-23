import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "../layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/DestinationsPage";
import DestinationDetail from "../pages/DestinationDetail";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
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
            path="/destinations"
            element={<Destinations />}
          />

          <Route
            path="/destinations/:slug"
            element={<DestinationDetail />}
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