import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({ product }) {
  return (
<>
<Head>
  <title>{product.title} | My Store</title>
</Head>
<Layout>
      <div className="max-w-6xl mx-auto p-6">

        <Link href="/products" className="text-indigo-600 hover:underline">
          ← Back to Products
        </Link>

        <div className="mt-6 p-6 grid md:grid-cols-2 gap-8">

          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="max-h-96 object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Category: {product.category}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <p className="text-orange-600 line-through text-sm">
                ₹{(product.price * 1.3).toFixed(0)}
              </p>

              <p className="text-gray-600 font-bold text-3xl">
                ₹{product.price}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
</>
    
    
  );
}

//
//  SSG — Generate all product paths
//



export async function getStaticPaths() {
  //Don't fetch API during build
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );

    if (!res.ok) return { notFound: true };

    const product = await res.json();

    return {
      props: { product },
      revalidate: 60,
    };

  } catch (error) {
    console.error("Fetch failed:", error);
    return { notFound: true };
  }
}
