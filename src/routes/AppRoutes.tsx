import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthRoutes from "../pages/Auth/routes/AuthRoutes";

export default createBrowserRouter([
    {
        path: "/*",
        element: <App />
    },
    AuthRoutes
]);