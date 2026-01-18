import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="MA Enterprises - Premium Home Appliances"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center py-20 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              🎉 Grand Sale - Up to 40% Off on All Appliances
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-6"
          >
            Premium Home Appliances for{' '}
            <span className="text-accent">Modern Living</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed"
          >
            Discover our curated collection of coolers, refrigerators, fans, furniture, 
            and home appliances. Quality products, competitive prices, and exceptional service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-foreground px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 md:gap-12 mt-12 pt-8 border-t border-background/20"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-background">500+</h3>
              <p className="text-background/70 text-sm">Products</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-background">15K+</h3>
              <p className="text-background/70 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-background">50+</h3>
              <p className="text-background/70 text-sm">Brands</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
