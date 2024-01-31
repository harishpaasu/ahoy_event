import React from "react";
import "./Eventdetails";
import "./Eventpage";
import "./Events";
// import {createBrowserRouter} from "react-router-dom";
// import{RouterProvider} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {
  // const appRouter=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Events/>
  //   },
  //   {
  //     path:"/browse",
  //     element:<Eventpage/>
  //   },
  //   {
  //     path:"/browse/events",
  //     element:<Eventdetails />
  //   }
  // ]);
  return (
    
      {/* <RouterProvider router={appRouter}/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />}/>
          <Route path="/Eventdetails" element={<Eventdetails />} />
          <Route path="/Eventpage" element={<Eventpage />} />
        
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;

