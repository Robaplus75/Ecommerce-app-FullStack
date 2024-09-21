import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from './components/Container'
import Home from "./pages/Home"
import Shop from "./pages/Shop"

const router = createBrowserRouter([
  {
    element: <Container />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      }
    ]
  },
]);


function App() {
  return (<RouterProvider router={router} />)
}

export default App
