
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-primary mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/about.jpg"
            alt="About Us"
            className="rounded-lg"
            width={500}  // Adjust width and height as needed
            height={300}
          />
        </div>
        <div>
          <p className="text-gray-700">
            PipeMaster Pro has been serving the community for over 20 years.
            We specialize in residential and commercial plumbing services,
            ensuring quality and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
