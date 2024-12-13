import React from 'react'
import styles from "./Header.module.css";
function Header() {
  return (
   <div className={styles.container}>
    <h1>Contacts App</h1>
    <p>A simple project of contacts</p>
   </div>
  )
}

export default Header