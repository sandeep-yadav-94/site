import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Your privacy is important to us
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              At MA Enterprises, we are committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <h2 className="text-xl font-display font-bold">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you make a
              purchase, register on the site, subscribe to our newsletter, or contact us. This includes
              your name, email address, phone number, and shipping address.
            </p>
            <h2 className="text-xl font-display font-bold">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to process transactions, send periodic emails regarding
              your order, improve our website, and provide customer service.
            </p>
            <h2 className="text-xl font-display font-bold">Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal
              information. Your data is stored on secure servers and we use encryption to protect
              sensitive information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
