import React from 'react'

const Footer = ()=> {
        return (
            <div>
                <footer className="py-5 bg-dark overflow-hidden">
                    <div className="row px-3 ">
                        <div className="col-4">
                            <h5 className="text-light">Navigation</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contact</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                            </ul>
                        </div>

                        <div className="col-4">
                        <h5 className="text-light">Category</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-between py-4 my-4 border-top text-light">
                            <p className="px-2">© 2021 Company, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex px-2">
                                <li className="ms-3">
                                    <a className="link-light" href="/">Twitter</a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-light" href="/">Twitter</a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-light" href="/">Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    
}

export default Footer
