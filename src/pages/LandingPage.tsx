import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, Heart, LineChart, Clock, Droplet, Utensils, Shield, Calendar } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-health-dark via-health-card to-health-darker z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,195,240,0.1),transparent_50%)]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Track Your Health <span className="text-gradient">Journey</span> With Precision
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Monitor your fitness goals, nutrition, sleep patterns, and more with our comprehensive health tracking platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button className="bg-health-blue hover:bg-health-blue/80 text-white text-lg py-6 px-8 hover-glow">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-lg py-6 px-8">
                See How It Works
              </Button>
            </div>
          </div>
          
          <div className="mt-16 relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-health-dark to-transparent z-10 h-20 bottom-0"></div>
            <img 
              src="https://placehold.co/1200x600/1A1F2C/FFFFFF?text=Dashboard+Preview" 
              alt="HealthTrack Dashboard Preview" 
              className="rounded-lg shadow-xl border border-white/10 glass-card mx-auto max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-health-darker relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Power Your Wellness <span className="text-health-blue">Journey</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our comprehensive health tracking tools help you understand your body better and make informed decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Activity Tracking",
                description: "Track steps, workouts, and daily movement to stay active",
                icon: <Activity className="h-10 w-10 text-health-blue" />,
              },
              {
                title: "Heart Monitoring",
                description: "Keep an eye on your heart rate, variability, and overall cardiovascular health",
                icon: <Heart className="h-10 w-10 text-health-purple" />,
              },
              {
                title: "Sleep Analysis",
                description: "Understand your sleep patterns and improve your rest quality",
                icon: <Clock className="h-10 w-10 text-health-green" />,
              },
              {
                title: "Hydration Tracking",
                description: "Monitor your daily water intake to maintain optimal hydration",
                icon: <Droplet className="h-10 w-10 text-health-blue" />,
              },
            ].map((feature, index) => (
              <Card key={index} className="glass-card hover-scale">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Nutrition Logging",
                description: "Log meals and track calories, macros, and nutrients",
                icon: <Utensils className="h-10 w-10 text-health-purple" />,
              },
              {
                title: "Health Metrics",
                description: "Monitor key health indicators like blood pressure and glucose",
                icon: <LineChart className="h-10 w-10 text-health-green" />,
              },
              {
                title: "Wellness Journal",
                description: "Record your mood, energy, and daily health observations",
                icon: <Calendar className="h-10 w-10 text-health-blue" />,
              },
              {
                title: "Privacy Focused",
                description: "Your health data is encrypted and always under your control",
                icon: <Shield className="h-10 w-10 text-health-purple" />,
              },
            ].map((feature, index) => (
              <Card key={index} className="glass-card hover-scale">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-health-dark relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Users <span className="text-health-blue">Love Us</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from people who have transformed their health journey using our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "HealthTrack helped me establish a consistent fitness routine and achieve my weight loss goals. The visual progress charts kept me motivated.",
                name: "Sarah Johnson",
                role: "Fitness Enthusiast",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                quote: "As someone with a busy schedule, HealthTrack made it easy to monitor my nutrition and sleep patterns. I've seen significant improvements in my energy levels.",
                name: "Michael Chen",
                role: "Software Engineer",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                quote: "The journal feature helped me identify triggers for my migraines. Being able to correlate symptoms with other health metrics has been invaluable.",
                name: "Emily Rodriguez",
                role: "Healthcare Professional",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card hover-scale">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-health-blue opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-health-card to-health-darker relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient">Health Journey</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join thousands of users who are taking control of their health with our comprehensive tracking tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-health-blue hover:bg-health-blue/80 text-white text-lg py-6 px-8 hover-glow">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-lg py-6 px-8">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
