import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E90FF] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            <span className="text-white">PipeMaster</span>
            <span className="text-[#FFA500]">Pro</span>
          </h3>
          <p className="text-white">
            Your trusted partner for all plumbing needs. Serving the community
            for over 20 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a className="text-white hover:text-[#FFA500]">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white hover:text-[#FFA500]">About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="text-white hover:text-[#FFA500]">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-white hover:text-[#FFA500]">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-lg bg-white text-black"
            />
            <button
              className="bg-[#FFA500] text-white px-4 py-2 rounded-lg hover:bg-[#FF8C00]"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-[#FFA500]">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-[#FFA500]">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-[#FFA500]">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-white pt-8">
        <p className="text-white">&copy; 2023 PipeMaster Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
