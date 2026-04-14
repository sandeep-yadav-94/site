import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const TrackOrder = () => {
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
            <Truck className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-display font-bold mb-4">Track Your Order</h1>
          <p className="text-muted-foreground mb-8">
            Order tracking is coming soon. You'll be able to check real-time status of your deliveries here.
          </p>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
