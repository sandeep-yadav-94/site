import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    avatar: '',
    rating: 5,
    content: 'Excellent service and quality products! Bought a refrigerator for my restaurant and the delivery was quick and hassle-free. Highly recommend MA Enterprises.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Homemaker',
    avatar: '',
    rating: 5,
    content: 'Great experience shopping here. The cooler I purchased works amazingly well. Customer support was very helpful in choosing the right product.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Interior Designer',
    avatar: '',
    rating: 5,
    content: 'As an interior designer, I always recommend MA Enterprises to my clients. Their furniture collection is modern and the quality is top-notch.',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Hotel Manager',
    avatar: '',
    rating: 5,
    content: 'We furnish all our hotel rooms with products from MA Enterprises. Bulk orders are handled professionally and prices are very competitive.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Retail Store Owner',
    avatar: '',
    rating: 5,
    content: 'Been their B2B partner for 3 years. Reliable supply, genuine products, and excellent after-sales service. Truly a trusted enterprise.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust MA Enterprises for their home needs.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-primary-foreground/10 border-primary-foreground/20 h-full">
                    <CardContent className="p-6">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90" />
            <CarouselNext className="hidden md:flex -right-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
