import React from 'react'

import styles from "../../styles/Home.module.css"

function Layout({children}) {
  return (
    <>
       <header className={styles.header}>
        <h2>Botostart CRM</h2>
       </header>
       <div className={styles.main}>
         {children}
       </div>
       <footer className={styles.footer}>
         <p>Next.js Cours | CRM Project &copy;</p>
       </footer>
    </>
  )
}

export default Layout