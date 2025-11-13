"use client"
import React, {useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
// import { initTooltips } from 'flowbite';
import Tooltip from '@/components/Tooltip'
import { useRouter } from 'next/navigation'
import Image from "next/image";

const Login = () => {
    const { data: session } = useSession()
    const router = useRouter();
     useEffect(() => {
    // if (status === "loading") return; // ⏳ wait until we know the session state

    if (session) {
      router.push("/dashboard"); // ✅ logged in → go to dashboard
    }
  }, [session, router]);
  //   useEffect(() => {
  //   // Initialize Flowbite tooltips after component mounts
  //   initTooltips();
  // }, []);
  return (
    <div className='container mx-auto py-14 '>
      <h1 className='font-bold text-2xl text-center'>Login to get started</h1>
      <div className="social-btn mt-8">
        {/* <div className="h-screen w-screen bg-gray-400"> */}

    <div
        className="grid place-items-center top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
        <div className="relative container m-auto px-6  ">
            <div className="m-auto md:w-7/12">
                <div className="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
                    <div className="p-8">
                        <div className="mt-10 grid space-y-4">
                            <div className="relative group">
                            <button
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 focus:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50" disabled>
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <Image src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        className="absolute left-0 " alt="google logo" width={20} height={20}/>
                                    <span
                                        className="block w-max ml-10 pr-12 font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                        with Google
                                    </span>
                                </div>
                            </button>
                            <Tooltip/>
                            </div>
                            {/* <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
  This feature is coming soon!
    <div className="tooltip-arrow" data-popper-arrow></div>
</div> */}
                            
                            {/* <Tooltip id="tooltip-github" text="This feature is coming soon!"> */}
                            <div className="relative group">
                            <button onClick={() => signIn('github')}
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-slate-700  cursor-pointer">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white"
                                        className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                        </path>
                                    </svg>
                                    <span
                                        className="block w-max text-center ml-10 pr-12 font-semibold tracking-wide text-gray-700 text-sm transition dark:text-white duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                        with Github
                                    </span>
                                </div>
                            </button>
                          
                        
                            {/* <Tooltip/> */}
                            </div>
                            
                            {/* </Tooltip> */}
                        </div>
                        <div className="mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                            <p className="text-xs">By proceeding, you agree to our
                                <a href="/privacy-policy/" className="underline">Terms of Use</a>
                                and confirm you have read our
                                <a href="/privacy-policy/" className="underline">Privacy and Cookie Statement</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* </div> */}
      </div>
    </div>
  )
}

export default Login
