"use client";
import Link from "next/link";
import { HomeIcon, Cog8ToothIcon, ArrowLeftOnRectangleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { usePathname, useSearchParams } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import Navi from "./Navi";
// import LogoutButton from "../LogoutButton";


export default function Header() {
    const [authState, setAuthState] = useState(false);
    const supabase = createClientComponentClient();
    useEffect(() => {
        supabase.auth.getUser().then((chkUser) => {
            console.log("supabase.auth.getSession", chkUser)
            const {
                data: { user },
            } = chkUser;
            if (user) {
                console.log(user)
                setAuthState(true)
            }
        })
    }, []);
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
        if (event === "SIGNED_IN") {
            setAuthState(true)
        }
        if (event === "SIGNED_OUT") {
            setAuthState(false)
        }
        // if (session) {
        //     console.log("session", session)
        //     setAuthState(true)
        // }
    })

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.log('Error logging out:', error.message);
    }

    // navi
    const [naviState, setNaviState] = useState(false);
    function closeNavi() {
        setNaviState(false)
    }

    return (
        <>
            <header className="w-full flex fixed bottom-0 sm:top-0 shadow-[0px_12px_48px_rgba(0,0,0,0.3)] h-[60px] sm:h-[50px] justify-center items-center px-4 bg-white z-40">
                <div className=" text-red-500 max-sm:hidden">LOGO</div>
                <nav className=" flex-grow flex justify-around sm:justify-center">
                    {!authState && <>
                        <Link href="/" className="flex flex-col max-sm:flex-auto sm:flex-row items-center hover:bg-slate-200 p-2">
                            <HomeIcon className="h-6 w-6 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                            <span className=" text-xs sm:text-base mt-1 sm:mt-0">Home {authState}</span>
                        </Link>
                        <Link href="/login" className="sm:hidden flex flex-col max-sm:flex-auto sm:flex-row items-center hover:bg-slate-200 p-2">
                            <ArrowLeftOnRectangleIcon className="h-6 w-6 mx-3 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                            <span className=" text-xs sm:text-base mt-1 sm:mt-0">Login</span>
                        </Link>
                    </>}
                    {authState && <>
                        <div onClick={() => { setNaviState(true) }} className=" cursor-pointer flex flex-col max-sm:flex-auto sm:flex-row items-center hover:bg-slate-200 p-2">
                            <EllipsisHorizontalIcon className="h-6 w-6 mx-3 sm:h-4 sm:w-4 sm:mr-1 text-gray-500 " />
                            <span className=" text-xs sm:text-base mt-1 sm:mt-0">More</span>
                        </div>
                    </>}


                </nav>
                <div className=" max-sm:hidden">
                    {!authState && <Link href="/login" className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">Login</Link>}
                    {authState && <button onClick={logout} className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">Log out</button>}
                    {/* <LogoutButton /> */}
                </div>

            </header>
            {naviState && <Navi id="NaviBlock" closeNavi={closeNavi} />}
        </>

    );
}