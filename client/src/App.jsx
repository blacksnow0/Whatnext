import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import DestinationDetail from "./pages/DestinationDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationDetail />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
