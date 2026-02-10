import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block">
      <h2 className="text-xl font-bold mb-8 text-indigo-600">
       <Link href="/">My Store</Link>
      </h2>

      <nav className="space-y-4 text-gray-600">
        <p className="font-medium text-indigo-600">
          Dashboard
        </p>
        <p>Menu 1</p>
        <p>Menu 2</p>
        <p>Menu 3</p>
        <p>Menu 4</p>
        <p>Menu 5</p>
      </nav>
    </aside>
  );
}
