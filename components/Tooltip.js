// "use client";
import React from "react";


/**
 * Flowbite-compatible tooltip wrapper
 * Avoids SSR hydration mismatches by initializing only on client.
 */
const Tooltip = () => {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 font-medium w-max px-3 py-2 text-sm bg-white text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
        The Google login is not available yet! and has been disabled.
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 
        border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-white"></div>
      </div>
    </>
  );
};

export default Tooltip;

//px-3 py-2 text-sm font-medium text-black transition-opacity duration-300 bg-white rounded-lg shadow-xs opacity-0 tooltip dark:bg-white 
