"use client"

import { Button, Dropdown, Label } from "@heroui/react";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { useTheme } from "next-themes";



const Navbar = () => {

    const { data: session, error } = authClient.useSession()
    // console.log(session, "session")

    const handelSignOut = async () => {
        await authClient.signOut();
    }


    const allNav = (
        <>
            <NavLink href={"/"} className="hover:text-red-500 cursor-pointer">Home</NavLink>
            <NavLink href={"/tutors"} className="hover:text-red-500 cursor-pointer">Tutors</NavLink>
            <NavLink href={"/add_tutor"} className="hover:text-red-500 cursor-pointer">Add Tutor </NavLink>
            <NavLink href={"/tutors/my_tutor"} className="hover:text-red-500 cursor-pointer">My Tutors</NavLink>
            <NavLink href={"/tutors/booking"} className="hover:text-red-500 cursor-pointer">My Booked Sessions</NavLink>
        </>
    )

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [open, setOpen] = useState();
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <nav className="w-full bg-[#0b2e52] shadow-md sticky top-0 left-0 z-50 text-white ">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo */}
                <Link href={"/"}>
                    <div className="text-2xl font-bold text-green-400">
                        V<span className="text-white">tutor</span>
                    </div>
                </Link>


                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-4 text-gray-300 font-medium">
                    {allNav}

                    <button
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </ul>


                <div className="hidden md:block">
                    {
                        session ? (

                            <div className="flex gap-1 items-center">
                                {/* <h1>{session?.user?.name}</h1> */}
                                <Dropdown>
                                    <Button aria-label="Menu" className="p-0 rounded-full overflow-hidden">
                                        <img
                                            src={session?.user?.image || "/default-user.png"}
                                            alt="user"
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </Button>
                                    <Dropdown.Popover>
                                        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                            <Dropdown.Item className="bg-red-500" id="new-file" onClick={handelSignOut}>
                                                <button className="text-white text-center font-bold"  >Log out</button>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                            <Dropdown.Item className="bg-green-500" id="new-file" >
                                                <button className="text-white text-center font-bold"  >Profile</button>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>

                            </div>
                        )
                            :
                            (<Link href={"/login"}>
                                <button className="mt-2 bg-green-500 text-white p-2 px-4 rounded-full">
                                    Login
                                </button>
                            </Link>)
                    }
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}

            {
                open && <div className="md:hidden bg-white px-6 pb-4 shadow-md">
                    <ul className="flex flex-col gap-4 text-gray-700">
                        {
                            allNav
                        }
                        {
                            session ? (<button onClick={handelSignOut} className="mt-2 bg-green-500 text-white py-2 rounded-full">
                                Log out
                            </button>
                            )
                                :
                                (<Link href={"/login"}>
                                    <button className="mt-2 bg-green-500 text-white py-2 rounded-full">
                                        Login
                                    </button>
                                </Link>)
                        }
                    </ul>
                </div>
            }
        </nav>
    );
};

export default Navbar;