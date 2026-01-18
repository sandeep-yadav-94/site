import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import PromoBanners from '@/components/home/PromoBanners';
import Testimonials from '@/components/home/Testimonials';
import TrustSection from '@/components/home/TrustSection';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <PromoBanners />
        <Testimonials />
        <TrustSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
