import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header"

import './styles.scss'

const Layout = () => {

  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <footer className="footer">
         Company Name © 2022
      </footer>
    </>
  )
}
  
  export default Layout