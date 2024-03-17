import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import ListAnime from "../pages/ListAnime";
import NotFound from "../pages/NotFound";
export default function Router() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/ListAnime" element={<ListAnime />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}
