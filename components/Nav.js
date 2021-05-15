import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-ight bg-light">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="nav-link">HOME</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {categories && [...categories].sort((a, b) => a.localeCompare(b)).map((category) => {
                                return (
                                    <li key={category}>
                                        <Link as={`/category/${category}`} href="/category/[id]">
                                            <a className="nav-link">{category}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;