import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Building2, Truck, Shield, Headphones } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide premium quality home appliances at competitive prices, making modern living accessible to every household.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become India\'s most trusted destination for home appliances, known for quality, service, and customer satisfaction.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Quality, integrity, and customer-first approach guide everything we do. We believe in building lasting relationships.',
    },
  ];

  const features = [
    { icon: Building2, title: 'Enterprise Ready', description: 'Serving businesses of all sizes' },
    { icon: Truck, title: 'Pan-India Delivery', description: 'Doorstep delivery across 100+ cities' },
    { icon: Shield, title: 'Quality Assured', description: 'Genuine products with warranty' },
    { icon: Headphones, title: '24/7 Support', description: 'Expert assistance anytime' },
  ];

  const team = [
    { name: 'Mahesh Agarwal', role: 'Founder & CEO', initials: 'MA' },
    { name: 'Amit Sharma', role: 'Operations Head', initials: 'AS' },
    { name: 'Priya Patel', role: 'Sales Director', initials: 'PP' },
    { name: 'Rajesh Kumar', role: 'Customer Success', initials: 'RK' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About MA Enterprises
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                For over 15 years, we've been India's trusted partner for premium home appliances. 
                From coolers to refrigerators, fans to furniture, we bring quality products to your doorstep.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Building Trust Since 2010
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    MA Enterprises was founded with a simple vision: to make quality home appliances 
                    accessible to every Indian household. What started as a small retail store in 
                    Delhi has grown into one of the most trusted names in the industry.
                  </p>
                  <p>
                    Over the years, we've partnered with leading brands and built a robust network 
                    that enables us to serve customers across the country. Our commitment to quality, 
                    competitive pricing, and exceptional after-sales service has earned us the trust 
                    of thousands of satisfied customers.
                  </p>
                  <p>
                    Today, we're proud to be serving both retail customers and B2B clients, 
                    including hotels, restaurants, offices, and institutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-display font-bold mb-2">15+</h3>
                  <p className="text-primary-foreground/80">Years Experience</p>
                </div>
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-display font-bold text-foreground mb-2">500+</h3>
                  <p className="text-muted-foreground">Products</p>
                </div>
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-display font-bold text-foreground mb-2">15K+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="bg-accent text-accent-foreground rounded-2xl p-6 text-center">
                  <h3 className="text-4xl font-display font-bold mb-2">50+</h3>
                  <p className="text-accent-foreground/80">Partner Brands</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                What Drives Us
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 text-center shadow-card"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
                Meet the Leaders
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-display font-bold">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
