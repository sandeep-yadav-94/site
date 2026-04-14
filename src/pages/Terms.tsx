import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Terms = () => {
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
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground">
                Please read these terms carefully before using our services
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the MA Enterprises website, you agree to comply with and be bound
              by the following terms and conditions.
            </p>
            <h2 className="text-xl font-display font-bold">Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content of this website is for your general information and use only. It is subject
              to change without notice. You may not use this website for any unlawful purpose.
            </p>
            <h2 className="text-xl font-display font-bold">Products and Pricing</h2>
            <p className="text-muted-foreground leading-relaxed">
              All prices displayed on the website are in Indian Rupees (INR) and are inclusive of
              applicable taxes unless stated otherwise. We reserve the right to modify prices at any time.
            </p>
            <h2 className="text-xl font-display font-bold">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              MA Enterprises shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our website or products.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
