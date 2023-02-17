import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobView from "./pages/JobView";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="flex flex-col m-4 lg:mx-32">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/jobView/:id" element={<JobView />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
