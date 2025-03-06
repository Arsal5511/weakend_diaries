import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Contact, { contactData } from "./pages/Contact";
import Services from "./pages/Services";
import ErrorPage from "./pages/ErrorPage";
import GetData from "./api/GetData";
import getData from "./api/GetData";
import Card from "./components/UI/Card";
import MovieDetails from "./components/UI/MovieDetails";
import getMovieData from "./api/GetMovieData";


const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />,
          action: contactData

        },
        {
          path: '/movies',
          element: <Movies />,
          loader: getData
        },
        {
          path: '/movies/:movieId',
          element: <MovieDetails />,
          loader: getMovieData
        },
        {
          path: '/services',
          element: <Services />
        }
      ]

    }
  ])

  return <>
  <RouterProvider router={router} />
  </>
}

export default App;