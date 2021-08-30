import React from 'react'
import {
    Link
  } from "react-router-dom";
import CategorySet from './CategorySet';

const Navbar = ()=> {
        return (
            <>
            <div className="fixed-top">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container d-flex justify-content-center">
                        <Link className="navbar-brand  fw-6 fs-2 " to="/">News Monkee</Link>
                    </div>
                </nav>
                <CategorySet/>
            </div>

            </>
        )
}

export default Navbar
