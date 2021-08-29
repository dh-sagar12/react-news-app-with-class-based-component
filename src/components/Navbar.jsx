import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container d-flex justify-content-center">
                        <Link className="navbar-brand  fw-6 fs-2 " to="/">News Monkee</Link>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
