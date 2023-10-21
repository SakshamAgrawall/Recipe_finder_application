import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Favourite from "./pages/Favourite";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route index='true' element={<HomePage />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
