import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from './components/Container'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
import ProductDetail from "./pages/ProductDetail"

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
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/checkout",
        element: <Checkout />
      },
      {
        path:"/order-confirmation",
        element: <Order />,
      },
      {
        path:"/filter-data",
        element: <FilterData />,
      },
      {
        path:"/product/:id",
        element:<ProductDetail />
      }
    ]
  },
]);


function App() {
  return (<RouterProvider router={router} />)
}

export default App
