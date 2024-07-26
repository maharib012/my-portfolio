import { Link } from "react-scroll";
import "./Navbar.css"
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const menuLinks = [
        {
            name: "Home",
            id: "home",
            offsetSize: -80
        },
        {
            name: "About",
            id: "about",
            offsetSize: -76
        },
        {
            name: "Skills",
            id: "skills",
            offsetSize: -76
        },
        {
            name: "Projects",
            id: "projects",
            offsetSize: 100
        },
        {
            name: "Services",
            id: "services",
            offsetSize: 100
        },
        {
            name: "Contact",
            id: "contact",
            offsetSize: 100
        },
    ]

    // console.log(showMenu);

    return (
        <section className="w-full h-20 fixed top-0 left-0 right-0 bg-black">
            <div className="w-full max-w-7xl mx-auto h-full flex justify-between items-center px-5 xl:px-2">
                <div className="w-1/2 lg:w-auto">
                    <span className="text-2xl cursor-pointer select-none">
                        Maharib
                    </span>
                </div>
                <ul className="hidden lg:flex justify-between items-center gap-8">
                    {
                        menuLinks.map(menu => (
                            <li key={menu.name}>
                                <Link
                                    to={menu.id}
                                    smooth={true}
                                    duration={500}
                                    offset={menu.offsetSize}
                                    spy={true}
                                    activeClass="text-yellow-400 border-b-2 border-b-yellow-400"
                                    className="cursor-pointer hover:border-b-2 border-b-yellow-400 hover:text-yellow-400"
                                >
                                    {menu.name.toUpperCase()}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <button className="hidden lg:inline-block px-3.5 py-2 rounded-3xl contact-btn duration-200 hover:scale-105">
                    Contact With Me
                </button>
                <div className="lg:hidden w-1/2 flex justify-end items-center">
                    <button className={`${showMenu && "hidden"}`} onClick={() => setShowMenu(true)}>
                        <RiMenu3Fill className="text-3xl" />
                    </button>
                    <div onClick={() => setShowMenu(false)} className={`${showMenu ? "fixed left-0 right-0 bottom-0 top-0 bg-slate-400 opacity-20" : ""}`}>
                    </div>
                    <div className={`fixed h-screen top-0 right-0 z-50 bg-[#1f0016] duration-500 ${showMenu ? "w-72" : "w-0"}`}>
                        <div className={`h-20 w-full ${showMenu ? "flex" : "hidden"} justify-end items-center`}>
                            <button className="lg:hidden pr-4 lg:pr-10" onClick={() => setShowMenu(false)}>
                                <RiCloseFill className="text-4xl" />
                            </button>
                        </div>
                        <ul className={`flex flex-col gap-5 px-5 ${!showMenu && "mt-20"}`}>
                            {
                                menuLinks.map((menu, index) => (
                                    <li
                                        style={{ transitionDelay: `${index + 1}00ms` }}
                                        key={index} className={`text-lg ${showMenu ? "duration-500 translate-x-0" : "translate-x-72"} overflow-hidden`}
                                    >
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            to={menu.id}
                                            smooth={true}
                                            duration={500}
                                            offset={menu.offsetSize}
                                            spy={true}
                                            activeClass="border-b-2"
                                        >
                                            {menu.name.toUpperCase()}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;