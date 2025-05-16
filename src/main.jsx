import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import  App from './App.jsx'
// import { Profile } from './components/Profile.jsx'
// impo/rt { Practices } from './practices.jsx'
// import { MovieGalleryApp } from "./components/MovieGalleryApp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Practices/> */}
    {/* <Profile/> */}
    {/* <MovieGalleryApp /> */}
  </StrictMode>
);
