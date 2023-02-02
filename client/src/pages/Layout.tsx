import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="sm:p-8 px-4 py-8 w-full bg-ghost min-h-[calc(100vh-73px)]">
        <Outlet />
      </main>
    </>
  )
}

export default Layout;