import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CreateQuestion from "./ui/components/CreateQuestion";


const Router = () => (
    <BrowserRouter>
    <Routes>
        <Route element={ <HomePage /> } path="/" />
        <Route element={ <CreateQuestion /> } path="/new" />
    </Routes>
    </BrowserRouter>
)

export default Router;