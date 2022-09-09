import { Routes,Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {Home,Order,Detail,Watchlist,Checkout, Login, Register} from "../components";

const Router = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>} />
            <Route path="/watchlist" element={<PrivateRoute><Watchlist /></PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        </Routes>
    )
}

export default Router;