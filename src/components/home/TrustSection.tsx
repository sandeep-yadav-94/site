import { motion } from 'framer-motion';
import { Award, Users, MapPin, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '15+',
    label: 'Years of Excellence',
    description: 'Serving customers since 2010',
  },
  {
    icon: Users,
    value: '15,000+',
    label: 'Happy Customers',
    description: 'Across India',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Premium Brands',
    description: 'Trusted partnerships',
  },
  {
    icon: MapPin,
    value: '100+',
    label: 'Cities Served',
    description: 'Pan-India delivery',
  },
];

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'Haier', 'Symphony', 
  'Bajaj', 'Havells', 'Crompton', 'Orient', 'Godrej'
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </h3>
              <p className="font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-xl md:text-2xl font-display font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
