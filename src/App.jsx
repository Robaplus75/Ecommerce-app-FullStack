import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from './components/Container'
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    element: <Container />,
    children:[
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);


function App() {
  return (<RouterProvider router={router} />)
}

export default App
