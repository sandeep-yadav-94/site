import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Percent, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offers = [
  {
    id: 1,
    title: 'Summer Sale',
    subtitle: 'Up to 40% Off',
    description: 'Beat the heat with our premium coolers and fans',
    icon: Percent,
    color: 'bg-accent',
    link: '/shop?category=coolers',
  },
  {
    id: 2,
    title: 'Flash Deal',
    subtitle: 'Limited Time',
    description: 'Exclusive discounts on refrigerators',
    icon: Clock,
    color: 'bg-primary',
    link: '/shop?category=refrigerators',
  },
  {
    id: 3,
    title: 'New Arrivals',
    subtitle: 'Latest Models',
    description: 'Explore our newest home appliances',
    icon: Zap,
    color: 'bg-success',
    link: '/shop',
  },
];

const PromoBanners = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={offer.link}>
                <div className={`${offer.color} rounded-2xl p-6 md:p-8 h-full group hover:scale-[1.02] transition-transform duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <offer.icon className="h-6 w-6 text-white" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                    {offer.title}
                  </h3>
                  <p className="text-white/90 font-semibold text-lg mb-2">
                    {offer.subtitle}
                  </p>
                  <p className="text-white/80 text-sm">
                    {offer.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
