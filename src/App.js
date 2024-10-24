import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import ResturantMenu from "./components/ResturantMenu/ResturantMenu";
import UserContext from "./utlis/UserContext";
// import Grocery from "./components/Grocery/Grocery";

const Grocery = lazy(() => import("./components/Grocery/Grocery"))

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        const data = {
            name: "Aman Soni"
        }
        setUserInfo(data.name)
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userInfo }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <ResturantMenu />
            },

        ]
    },

])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)