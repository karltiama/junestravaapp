import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Fitness Enthusiast",
    image: "",
    quote: "This platform has revolutionized my fitness journey. I've never been more motivated!"
  },
  {
    name: "John Smith",
    role: "Marathon Runner",
    image: "",
    quote: "The goal-setting feature keeps me accountable and pushing for new personal bests."
  },
  {
    name: "Alice Johnson",
    role: "Yoga Instructor",
    image: "",
    quote: "I love how this platform integrates with my existing fitness routine. It's a game-changer!"
  },
  {
    name: "Alice Johnson",
    role: "Yoga Instructor",
    image: "",
    quote: "I love how this platform integrates with my existing fitness routine. It's a game-changer!"
  },
  {
    name: "Alice Johnson",
    role: "Yoga Instructor",
    image: "",
    quote: "I love how this platform integrates with my existing fitness routine. It's a game-changer!"
  },
  {
    name: "Alice Johnson",
    role: "Yoga Instructor",
    image: "",
    quote: "I love how this platform integrates with my existing fitness routine. It's a game-changer!"
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-slate-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 flex justify-center">
                <Card className="max-w-md w-full">
                  <CardHeader>
                    <div className="flex items-center justify-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
