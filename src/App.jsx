import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
