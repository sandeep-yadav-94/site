import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-8 md:py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Shipping Information
              </h1>
              <p className="text-muted-foreground">
                Everything you need to know about our delivery process
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              MA Enterprises offers reliable shipping across India. We strive to deliver your
              products as quickly and safely as possible.
            </p>
            <h2 className="text-xl font-display font-bold">Free Shipping</h2>
            <p className="text-muted-foreground leading-relaxed">
              Enjoy free delivery on all orders above ₹5,000. For orders below ₹5,000, a flat
              shipping fee of ₹199 will be applied.
            </p>
            <h2 className="text-xl font-display font-bold">Delivery Time</h2>
            <p className="text-muted-foreground leading-relaxed">
              Standard delivery takes 3-7 business days depending on your location. Metro cities
              typically receive orders within 3-4 business days.
            </p>
            <h2 className="text-xl font-display font-bold">Delivery Coverage</h2>
            <p className="text-muted-foreground leading-relaxed">
              We deliver to over 100+ cities across India. For large appliances, our delivery team
              will handle installation at your doorstep at no extra charge.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
