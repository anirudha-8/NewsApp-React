import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">S-News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/business">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/general">General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/health">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/science">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/technology">Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
