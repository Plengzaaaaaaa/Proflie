import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" top-4 left-4 bg-white/80 backdrop-blur-sm px-6 py-3 shadow-md border border-gray-200">
      <ul className="flex space-x-6 text-left items-center">
        <li>
          <Link
            href="/"
            className="text-blue-900 font-bold tracking-wide hover:text-yellow-600 transition-colors duration-200"
          >
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-blue-900 font-bold tracking-wide hover:text-yellow-600 transition-colors duration-200"
          >
            เกี่ยวกับ
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-blue-900 font-bold tracking-wide hover:text-yellow-600 transition-colors duration-200"
          >
            ติดต่อ
          </Link>
        </li>
      </ul>
    </nav>
  );  
}
