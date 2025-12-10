"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Madhuri Phalak",
    rating: 5,
    review: "Excellent work with good service and affordable prices. Very polite and professional workers. Highly recommended."
  },
  {
    name: "Kalidas Kahane",
    rating: 5,
    review: "Very Good work. Calm person, listens to all suggestions, and keeps everything clean. Entire team is very good."
  },
  {
    name: "Mohit Gupta",
    rating: 5,
    review: "Excellent work. Great team and very humble person. Highly impressed."
  },
  {
    name: "Umesh Kadam",
    rating: 5,
    review: "Excellent work! Genuine & trustful people. Proper masking, cleaning, and professional painting."
  },
  {
    name: "Islam Shaikh",
    rating: 5,
    review: "Very professional at affordable rates. Better than NoBroker and other services."
  },
  {
    name: "Maulik Parekh",
    rating: 5,
    review: "Excellent work! Trustful people. Reasonable prices. Proper cleaning and high professionalism."
  },
  {
    name: "Nitin Singh",
    rating: 5,
    review: "Excellent service and professional staff. Really impressed with their dedication and quality."
  },
  {
    name: "Shweta Rakshe",
    rating: 5,
    review: "Sharp and detailed work. Very kind and trustworthy. Highly recommended!"
  },
  {
    name: "Vishal Amale",
    rating: 5,
    review: "Excellent quality interior work and on-time completion. Highly satisfied."
  },
  {
    name: "Pradeep Hajare",
    rating: 5,
    review: "Beautiful finishing and excellent work. Very professional painter."
  },
  {
    name: "Hemant Dengi",
    rating: 5,
    review: "Very nice work and good pricing. Completed within timeline. 5/5."
  },
  {
    name: "Sagar Nalawade",
    rating: 5,
    review: "Very efficient and hassle-free service. Great experience with PP Painting."
  },
  {
    name: "Gajendra Jain",
    rating: 5,
    review: "Value for money. Good quality service provided."
  },
  {
    name: "Nitin Nakhale",
    rating: 5,
    review: "Really good work and reasonable cost. Hardworking team."
  },
  {
    name: "Ketan Jadhav",
    rating: 5,
    review: "Excellent quality work. Got exactly what I expected."
  },
  {
    name: "Jivan Rathod",
    rating: 5,
    review: "Best quality work done for my home. Thank you."
  },
  {
    name: "Chriss Varghese",
    rating: 5,
    review: "Work done with accuracy and perfection. Great explanation about paints. Amazing experience."
  },
  {
    name: "Dipali Chaudhari",
    rating: 5,
    review: "Workers are very good and the work done is excellent. High quality products used."
  },
  {
    name: "Nixon Kocharekar",
    rating: 5,
    review: "Very professional. Work completed on time with great quality."
  },
  {
    name: "Abhijit Joshi",
    rating: 5,
    review: "Good service, polite staff, dedicated and honest team."
  },
  {
    name: "Amit Ghagare",
    rating: 5,
    review: "Great job! Hardworking and talented team. Highly recommended."
  },
  {
    name: "Aryan Akulwad",
    rating: 5,
    review: "Excellent painting job. Staff is nice and cooperative."
  },
  {
    name: "Rahul Dandi",
    rating: 5,
    review: "Affordable painting service without compromising quality."
  },
  {
    name: "Jay Khandare",
    rating: 5,
    review: "Excellent work. Punctual, cooperative, and thorough job. Highly recommended."
  },
  {
    name: "Somaling Bolettin",
    rating: 5,
    review: "Best painting service provider. Quality work and on-time delivery."
  },
  {
    name: "Akshay Kachi",
    rating: 5,
    review: "Interior painting done perfectly. Quick and clean work."
  },
  {
    name: "Sandeep Chaudhari",
    rating: 5,
    review: "Good service, time-bound work."
  },
  {
    name: "Annapurna Kumari",
    rating: 5,
    review: "Smooth process. Workers were punctual and dedicated. Highly recommended."
  },
  {
    name: "Manakchand Dewasi",
    rating: 5,
    review: "Best painter in PCMC. Excellent finishing and perfect masking & sanding."
  },
  {
    name: "Vidya Patwardhan",
    rating: 5,
    review: "Excellent cupboard painting. Beautiful finish and professional support."
  },
  {
    name: "Varad Chinchwade",
    rating: 5,
    review: "Amazing work! Highly recommended."
  },
  {
    name: "Prakash Gaikwad",
    rating: 5,
    review: "Good quality work and hardworking team. Highly recommended."
  },
  {
    name: "Neha Vaishnav",
    rating: 5,
    review: "Friendly staff, perfectly designed our house. Very satisfied."
  },
  {
    name: "Prabhakar Kandukatle",
    rating: 5,
    review: "Quality of work is unmatched. Thank you PP Home Painting."
  },
  {
    name: "Mukesh Turale",
    rating: 5,
    review: "Excellent experience. Cooperative team. Highly recommended."
  },
  {
    name: "Anita Lobo",
    rating: 5,
    review: "Very good service, professional work, and timely completion."
  },
  {
    name: "Nayna Guhagarkar",
    rating: 5,
    review: "Quality painting to customer satisfaction. Workers are polite."
  },
  {
    name: "Deepak Jadhav",
    rating: 5,
    review: "Good service and professional staff."
  },
  {
    name: "Motorall",
    rating: 5,
    review: "Great people. Work completed on time. Highly recommended."
  },
  {
    name: "Vrutika Bhangre",
    rating: 5,
    review: "Very good job completed on time. Quality of work was great."
  },
  {
    name: "Ravi Jadhav",
    rating: 5,
    review: "Amazing painting work and good service."
  },
  {
    name: "Monika Varma",
    rating: 5,
    review: "Exceptional craftsmanship and high-quality materials."
  },
  {
    name: "Sandhya Mahajan",
    rating: 5,
    review: "Excellent work done!"
  },
  {
    name: "Amit Rastogi",
    rating: 5,
    review: "Nitin is very cooperative. Work finished as committed and great quality."
  },
  {
    name: "Hanumant Salve",
    rating: 5,
    review: "Best quality work."
  },
  {
    name: "Rajesh Rathod",
    rating: 5,
    review: "Very happy with the quality of work and on-time delivery."
  },
  {
    name: "Pankaj Kasayap",
    rating: 5,
    review: "Very professional work. Good job!"
  },
  {
    name: "Sushil Bhosale",
    rating: 5,
    review: "Professional painter. Great mixing and finishing work."
  },
  {
    name: "Atharva",
    rating: 5,
    review: "Good service and fast work."
  },
  {
    name: "Ramawatar Chauhan",
    rating: 5,
    review: "Very nice quality and finishing. Work completed on time."
  },
  {
    name: "Sitara Yadav",
    rating: 5,
    review: "Very good job. They are very cooperative."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="bg-secondary py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-forest text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          What Our Clients Say
        </h2>

        <div className={`bg-pista-light rounded-2xl shadow-lg p-8 md:p-10 relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <Quote className="w-10 h-10 text-olive/30 mb-6" />

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-olive text-olive" />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-lg text-forest italic text-center mb-6">
            "{testimonials[currentIndex].review}"
          </p>

          {/* Name */}
          <h4 className="text-center text-xl font-semibold text-forest">
            — {testimonials[currentIndex].name}
          </h4>

          {/* Navigation */}
          <div className="absolute inset-x-0 bottom-4 flex justify-between px-4 md:px-6">
            <button onClick={prev} className="p-3 rounded-full bg-white shadow hover:bg-olive hover:text-white transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full bg-white shadow hover:bg-olive hover:text-white transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/PP+Home+Painting+Services/@18.6730094,73.791973,17z/data=!4m8!3m7!1s0x3bc2b749cb57d63d:0x55941536e9f6d95e!8m2!3d18.6730094!4d73.791973!9m1!1b1!16s%2Fg%2F11s3zpm1tq?entry=ttu"
              target="_blank"
              className="inline-block px-8 py-3 bg-olive text-pista-light font-semibold rounded-full shadow-md hover:bg-forest transition-all"
            >
              ⭐ View All Google Reviews
            </a>
          </div>
      </div>
    </section>
  );
}
