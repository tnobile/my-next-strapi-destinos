import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-ight bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">home</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {categories.map((category) => {
                            return (
                                <li key={category.category}>
                                    <Link as={`/category/${category.category}`} href="/category/[id]">
                                        <a className="nav-link">{category.category}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;