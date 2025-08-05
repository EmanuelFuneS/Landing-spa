import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/landing-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
