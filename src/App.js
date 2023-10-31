import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./component/Home/Home";
import Layout from './component/Lyout/Lyout';
import Nav from './component/Nav/Nav';
import SecHome from './component/SecHome/SecHome';
import Chairs from './component/Chairs/Chairs';
import Table from './component/Tables/Tables';
import Crokery from './component/Crokery/Crokery';
import Tableware from './component/Tableware/Tableware';

export function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path:'Plantpots', element:<Home/> },
        { path: 'Ceramics', element:<SecHome /> },
        { path: 'chairs', element:<Chairs /> },
        { path: 'table', element:<Table /> },
        { path: 'crockery', element:<Crokery/>},
        { path: 'tableware', element:<Tableware/>},
      ]
      }
    ])
  return <>
          <RouterProvider router={routers}></RouterProvider>

</>
}

export default App;
