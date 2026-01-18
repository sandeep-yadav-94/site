import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/store';

const FeaturedProducts = () => {
  const categories = ['All', 'Coolers', 'Refrigerators', 'Fans', 'Furniture'];

  const getFilteredProducts = (category: string) => {
    if (category === 'All') return products.slice(0, 8);
    return products.filter((p) => p.category === category).slice(0, 8);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Featured Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Bestselling Products
            </h2>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="All" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border data-[state=active]:border-primary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {getFilteredProducts(category).map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;
