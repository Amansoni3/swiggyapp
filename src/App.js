import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)