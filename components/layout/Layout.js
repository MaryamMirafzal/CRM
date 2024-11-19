import Link from 'next/link'
import React from 'react'


function Layout({children}) {
  return (
    <>
       <header className="header">
        <h2>Botostart CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
       </header>
       <div className="main">
         {children}
       </div>
       <footer className="footer">
         <p>Next.js Cours | CRM Project &copy;</p>
       </footer>
    </>
  )
}

export default Layout