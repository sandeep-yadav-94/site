import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ReturnPolicy = () => {
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
                Return Policy
              </h1>
              <p className="text-muted-foreground">
                Our hassle-free return process
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              At MA Enterprises, we want you to be completely satisfied with your purchase. If you are
              not happy with your order, we offer a simple return process.
            </p>
            <h2 className="text-xl font-display font-bold">Return Window</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may return most items within 7 days of delivery for a full refund. Items must be
              unused, in their original packaging, and in the same condition as received.
            </p>
            <h2 className="text-xl font-display font-bold">How to Return</h2>
            <p className="text-muted-foreground leading-relaxed">
              To initiate a return, please contact our customer service team with your order number.
              We will arrange a pickup from your address at no additional cost.
            </p>
            <h2 className="text-xl font-display font-bold">Refund Process</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once we receive and inspect the returned item, your refund will be processed within
              5-7 business days to your original payment method.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
