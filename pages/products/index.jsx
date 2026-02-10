import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Spinner from "@/components/Spinner";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <Head>
        <title>Products | My Store</title>
        <meta name="description" content="Browse our products" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 pb-10 py-4">

            <h1 className="text-2xl font-semibold">Products</h1>
            <p className="text-gray-500 mt-1">Home › Products</p>

            {/* Loading */}
            {!products && !error && <Spinner />}

            {/* Error */}
            {error && (
              <p className="text-center text-red-500 mt-10">
                Failed to load products
              </p>
            )}

            {/* Data */}
            {products && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">

                {products.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer group">

                      <div className="flex items-center justify-center h-40">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={110}
                          height={110}
                          className="object-contain group-hover:scale-105 transition"
                        />
                      </div>

                      <h2 className="mt-4 font-medium text-gray-800 line-clamp-2">
                        {product.title}
                      </h2>

                      <p className="mt-2 text-orange-600 font-bold">
                        ₹{product.price}
                      </p>

                    </div>
                  </Link>
                ))}

              </div>
            )}

          </div>
        </div>
      </Layout>
    </>
  );
}
