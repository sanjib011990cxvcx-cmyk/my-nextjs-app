"use client";

import useSWR from "swr";
import Sidebar from "./Sideber";
import Header from "./Header";
import Head from "next/head";
import Spinner from "@/components/Spinner";

const fetcher = async (url) => {
  console.log("Fetching data at:", new Date().toLocaleTimeString());

  const res = await fetch(url);

  if (!res.ok) throw new Error("Fetch failed");

  return res.json();
};

export default function Dashboard() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    {
      refreshInterval: 10000,
      revalidateOnFocus: false,
    }
  );

  return (
    <>
      <Head>
        <title>Dashboard | My Store</title>
        <meta name="description" content="Browse dashboard posts" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 p-6 md:p-8">

          {/* Header */}
          <Header />

          {/* Content */}
          <div className="mt-6 bg-white p-6 rounded-xl shadow border">

            <h2 className="text-xl font-semibold mb-4">
              List of post titles
            </h2>

            {/* Spinner loading */}
            {isLoading && <Spinner />}

            {/* Error */}
            {error && (
              <p className="text-red-500 text-center">
                Failed to load posts
              </p>
            )}

            {/* Data */}
            {data && (
              <ul className="space-y-3">
                {data.slice(0, 10).map((post) => (
                  <li
                    key={post.id}
                    className="bg-gray-50 border rounded-lg p-4 hover:bg-indigo-50 hover:border-indigo-300 transition cursor-pointer"
                  >
                    <span className="font-medium text-gray-800">
                      {post.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}

          </div>
        </main>

      </div>
    </>
  );
}
