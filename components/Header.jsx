import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-4xl font-bold text-gray-900">
          My Store
        </h1>

        <nav className="space-x-6 text-gray-900">

          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/dashboard">Dashboard</Link>

        </nav>

      </div>

    </header>
  );
}
