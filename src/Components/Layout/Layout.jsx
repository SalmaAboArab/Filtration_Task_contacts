import React from 'react'
import { Outlet } from 'react-router-dom'
import Style from '../Layout/Layout.module.css'

export default function Layout() {
  return <>

<div className="container-fluid mainbg vh-100 position-relative">
    <Outlet></Outlet>
</div>

  </>
}