import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-#1E90FF">
        <span className="text-[#1E90FF]">PipeMaster</span><span className="text-[#FFA500]">Pro</span>

        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-[#1E90FF] hover:text-[#FFA500]">
            Home
          </Link>
          <Link href="/about" className="text-[#1E90FF] hover:text-[#FFA500]">
            About
          </Link>
          <Link href="/services" className="text-[#1E90FF] hover:text-[#FFA500]">
            Services
          </Link>
          <Link href="/contact" className="text-[#1E90FF] hover:text-[#FFA500]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}