import Link from 'next/link'
import React from 'react'

function Layout({children}) {
  return (
    <>
       <headers className="header">
         <h2>CRM Project</h2>
         <Link href="/add-customer">Add Customer</Link>
       </headers>
       <div className="main">
           {children}
       </div>
       <footer className="footer">
          <a href="https://github.com/MaryamMirafzal">
          Maryam Mirafzal</a> {" "}
          Next.js Project | &copy;
       </footer>
    </>
  )
}

export default Layout