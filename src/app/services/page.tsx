import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Leak Repairs",
      description: "Fast and reliable leak repair services.",
      image: "/images/service1.jpg",
    },
    {
      title: "Pipe Installation",
      description: "Professional pipe installation for homes and businesses.",
      image: "/images/service2.jpg",
    },
    {
      title: "Drain Cleaning",
      description: "Efficient drain cleaning to prevent clogs.",
      image: "/images/service3.jpg",
    },
    {
      title: "Water Heater Repair",
      description: "Expert repair and maintenance for water heaters.",
      image: "/images/service4.jpg",
    },
    {
      title: "Sewer Line Repair",
      description: "Comprehensive sewer line repair and replacement.",
      image: "/images/service5.jpg",
    },
    {
      title: "Bathroom Remodeling",
      description: "Transform your bathroom with our remodeling services.",
      image: "/images/service6.jpg",
    },
  ];

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mb-4"
                  width={500}  // Adjust width and height as needed
                  height={300}
                />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
