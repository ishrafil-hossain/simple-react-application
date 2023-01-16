import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Profile from '../components/Profile/Profile';
import NotFound from '../components/NotFound/NotFound';
import Main from "../layout/Main";
import ShowDetails from "../components/ShowDetails/ShowDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/home',
                element: <Home />
            },

            {
                path: '/meal/:idMeal',
                element: <ShowDetails />,
                loader: async ({ params }) => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
                }
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }
])