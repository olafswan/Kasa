import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import './styles/css/style.css'


const router = createBrowserRouter([
  {
    path : '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'rooms/:id',
            element: <Rooms/>
          },
      {
        path: 'about',
        element: <About/>
      },
    ]
  }
])

function Root () {
  return <>
    <Header/>
    <main className="main-container">
      <Outlet/>
    </main>
    <Footer/>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;
