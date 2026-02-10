import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import Head from "next/head";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setError(true));
  }, [id]);

  return (
    <>
      <Head>
        <title>Product Details | My Store</title>
      </Head>

      <Layout>
        <div className="max-w-6xl mx-auto p-6">

          <Link
            href="/products"
            className="text-indigo-600 hover:underline"
          >
            ← Back to Products
          </Link>

          {/* Loading */}
          {!product && !error && <Spinner />}

          {/* Error */}
          {error && (
            <p className="text-red-500 mt-6">
              Failed to load product
            </p>
          )}

          {/* Product */}
          {product && (
            <div className="mt-6 grid md:grid-cols-2 gap-8">

              <div className="flex justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  {product.title}
                </h1>

                <p className="mt-4 text-gray-600">
                  {product.description}
                </p>

                <p className="mt-4 text-sm text-gray-500">
                  Category: {product.category}
                </p>

                <p className="mt-4 text-3xl font-bold text-orange-600">
                  ₹{product.price}
                </p>
              </div>

            </div>
          )}

        </div>
      </Layout>
    </>
  );
}
