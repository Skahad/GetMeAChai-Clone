"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";



const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();
    if (!session) {
      router.push("/login"); // ✅ logged in → go to dashboard
    }
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  )
}

export default Dashboard
