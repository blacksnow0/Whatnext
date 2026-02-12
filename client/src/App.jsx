import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import DestinationDetail from "./pages/DestinationDetail";
import AuliCourse from "./pages/AuliCourse";
import AuliEventsPage from "./pages/AuliEventsPage";
import Destinations from "./pages/DestinationsPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import AuliCourseDetails from "./pages/AuliCourseDetails";
import Ily from "./pages/lyi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />}></Route>
          {/* <Route path="/say-yes" element={<Ily />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/winter-sports" element={<AuliCourse />} />
          <Route path="/auli" element={<AuliEventsPage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/winter-sports/:courseId" element={<AuliCourseDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
