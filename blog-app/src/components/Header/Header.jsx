import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.status); //user current status check from store loggedIn Or not
  const navigate = useNavigate(); //when any button click to navigate url /login /signup to this method used react-routerdom and navigate(url) pass to /login /signup

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "All Post",
      slug: "/all-post",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-white">
      <Container>
        <nav className="flex">
          <div className="mr-4 ">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item, index) =>
              item.active ? (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-[blue] rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* this syntax authStatus && () if authStatus true to logical and o[erator used to view this item] */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
