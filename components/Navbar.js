"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false);
//   const router = useRouter();
//   const handleLogout = async (e) => {
//     e.preventDefault();
//   await signOut({ redirect: false });
//   router.push("/login");
// };
  return (
    <nav className="nav-cont ">
      <div className="flex items-center">
        <Image src="/tea.gif" alt="" width={50} height={50} />
        <Link href={"/"}>
          <div className="logo">GetMeAChai!</div>
        </Link>
      </div>
      <div className="flex mr-4 relative">
        {session && (
          <>
            {" "}
            <button onClick={() => setshowdropdown(!showdropdown)} onBlur={()=> {setTimeout(() => {
              setshowdropdown(false)
            }, 100);}}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="inline-flex mx-4 items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 box-border border border-transparent hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-xs font-medium leading-5 rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              type="button"
            >
              Welcome {session.user.email}
              <svg
                className="w-3 h-3 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${showdropdown? "" : "hidden"} absolute left-[110px] mt-12.5 bg-gradient-to-br from-purple-600 to-blue-500 border border-default-medium rounded-lg shadow-lg w-44`}
            >
              <ul
                className="p-2 text-sm text-body font-medium"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href={"/dashboard"}
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Your Page
                  </Link>
                </li>
                <li>
                  <Link 
                  // onClick={(e) =>{e.preventDefault();
                  // signOut({ callbackUrl: '/login' });
                  // }}
                  onClick={(e) => signOut()}
                    href={"#"}
                    className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
          <Link href={"/login"}>
        {session && (
          <button onClick={(e) => signOut()} className="custbtn">
            Logout
          </button>
        )}
        </Link>
        {!session && (
          <Link href={"/login"}>
            <button className="custbtn">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
