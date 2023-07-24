
import {createBrowserRouter
} from "react-router-dom";
import Home from './../components/Home/Home/Home';
import { main } from './../../node_modules/@popperjs/core/lib/enums';
import Main from './../layout/Main/Main';
  
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path: "/",
        element: <Home/>,
      }
    ]
  },
]);
