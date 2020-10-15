import React, { useContext } from "react"


import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import ToTop from "./ToTop"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext);
  return (
    <>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      {children}
      <ToTop />
      <Footer />
    </>
  )
}

export default Layout
