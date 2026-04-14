import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <CreditCard className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-display font-bold mb-4">Checkout</h1>
          <p className="text-muted-foreground mb-8">
            Our secure checkout experience is coming soon. Stay tuned for a seamless payment process.
          </p>
          <Link to="/cart">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
