"use client"

import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "bootstrap/dist/css/bootstrap.min.css";



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head><link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" /></head>
            <body suppressHydrationWarning>
                <Provider store={store}>
                    {children}
                    <ToastContainer />
                </Provider>
            </body>
        </html>
    );
}

//  "https://api.unsplash.com/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1";
//  `https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=${slug}`

//  `https://api.unsplash.com/photos/IMAGE_ID?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58`

// 0. nav will include 2 major links 1. Popular Movies and 2. popular TV Shows
// 1. show all the popular movies in homepage
// 2. open details page of particular movie whne user click on it
// 3. User can see all the detail and play the trailer if there is

// FINF API KEY
// https://www.themoviedb.org/settings/api?api_key=YOUR_API_KEY

// API LINKS TO USE
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY

// image paths
// 

// search
// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=YOUR_API_KEY