
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

    const [msg, setMsg] = useState("");
   useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((d) => setMsg(d.message));
  }, []);

  return (
    <>
     <Head>
        <title>My Store | Next.js API Route!</title>
      </Head>
     <Layout>
     <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans`}
    >
    <div className="p-6">
      <h1 className="text-3xl font-bold">Home</h1>
      <p className="mt-4 text-blue-600">
        {msg || "Loading..."}
      </p>
    </div>
    </div>
   </Layout>
    
    </>
  
  );
}
