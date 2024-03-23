import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import ListAnime from "../pages/ListAnime";
import NotFound from "../pages/NotFound";
import SignUp from "../components/User/SignUp";
import Login from "../components/User/Login";

export default function Router() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/ListAnime" element={<ListAnime />} />
         <Route path="/SignUp" element={<SignUp />} />
         <Route path="/Login" element={<Login />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}
