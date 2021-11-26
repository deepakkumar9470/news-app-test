import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.container}>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-info pl-5 text-uppercase">
        <a className="navbar-brand" href="https://www.mohfw.gov.in/">News API App</a>

      </nav>
        </div>
    )
}

export default NavBar