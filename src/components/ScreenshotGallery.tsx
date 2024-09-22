import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const screenshots = [
  { 
    src: "/strava.png", 
    alt: "Dashboard View",
    title: "Comprehensive Dashboard",
    description: "Get a quick overview of your fitness journey with our intuitive dashboard. Track your progress, set goals, and stay motivated."
  },
  { 
    src: "/recentactivities.png", 
    alt: "Activity Tracking",
    title: "Detailed Activity Tracking",
    description: "Log and analyze your workouts with precision. Our platform supports various activities and provides in-depth metrics for each session."
  },
  { 
    src: "/strava.png", 
    alt: "Goal Setting",
    title: "Smart Goal Setting",
    description: "Set achievable fitness goals and track your progress over time. Our intelligent system helps you stay on track and celebrates your milestones."
  },
];

export default function ScreenshotGallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience Our Platform</h2>
        {screenshots.map((screenshot, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 gap-8`}>
            <div className="w-full md:w-1/2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">{screenshot.title}</h3>
              <p className="text-lg text-gray-600">{screenshot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
