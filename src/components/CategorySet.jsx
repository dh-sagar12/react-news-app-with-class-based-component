import React from 'react'
import '../CategorySet.css'
import {
    Link
} from "react-router-dom";

const CategorySet = () => {

    return (
        <div>
            <div className=" nav-scroller py-1 mb-2 bg-light  ">
                <nav className='' >
                    <ul className="nav navbar text-nowrap flex-nowrap d-flex justify-content-between " style={{ overflowX: 'auto' }}>
                        <li className="nav-item">
                            <Link to="/business" className=" nav-link text-dark fw-bold">BUSINESS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/entertainment" className=" nav-link text-dark fw-bold">ENTERTAINMENT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/health" className=" nav-link text-dark fw-bold">HEALTH</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/science" className=" nav-link text-dark fw-bold">SCIENCE</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sports" className=" nav-link text-dark fw-bold">SPORTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/technology" className=" nav-link text-dark fw-bold">TECHNOLOGY</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default CategorySet
