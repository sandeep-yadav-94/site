import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/store';

const categoryImages: Record<string, string> = {
  coolers: '❄️',
  refrigerators: '🧊',
  fans: '💨',
  furniture: '🛋️',
  'home-appliances': '🏠',
};

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Browse By Category</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Shop Our Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of products across multiple categories. 
            Find exactly what you need for your home.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/shop?category=${category.id}`}>
                <div className="group relative bg-card rounded-2xl p-6 md:p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {categoryImages[category.id] || category.icon}
                  </div>

                  {/* Name */}
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>

                  {/* Count */}
                  <p className="text-sm text-muted-foreground">
                    {category.count} Products
                  </p>

                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
