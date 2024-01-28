
import { Component } from "react";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import AddContact from "./Components/AddContact/AddContact";
import Success from "./Components/Success/Success";
import Failure from "./Components/Failure/Failure";
import UpdateContact from "./Components/UpdateContact/UpdateContact";


let routers=createBrowserRouter([ 
    {path:'/',element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:'addContact',element:<AddContact/>},
        {path:'success',element:<Success/>},
        {path:'failure',element:<Failure/>},
        {path:'updateContact/:id/:firname/:secname',element:<UpdateContact/>},
        {path:'*',element:<NotFound/>}
    ]}
])   
export default class App extends Component{
    state = {};

    render()
    {
        return <RouterProvider router={routers}/>;
    }
}