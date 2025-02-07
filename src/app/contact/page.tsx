import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/contact.jpg"
              alt="Contact Us"
              className="rounded-lg"
              width={500}  // Adjust width and height as needed
              height={300}
            />
          </div>
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded-lg"
                rows={5}
              ></textarea>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
