import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, User, Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart, categories } from '@/lib/store';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@maenterprises.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span>info@maenterprises.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs md:text-sm mx-auto md:mx-0">
              <span className="hidden sm:inline">🚚 Free Delivery on Orders Above ₹5,000</span>
              <span>💳 Easy EMI Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg md:text-xl">MA</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-lg md:text-xl text-foreground">MA Enterprises</h1>
                <p className="text-xs text-muted-foreground">Your Trusted Home Partner</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? 'text-primary' : 'text-foreground'
                      }`}
                      onMouseEnter={() => setIsCategoryOpen(true)}
                      onMouseLeave={() => setIsCategoryOpen(false)}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isCategoryOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2"
                          onMouseEnter={() => setIsCategoryOpen(true)}
                          onMouseLeave={() => setIsCategoryOpen(false)}
                        >
                          <div className="bg-card border border-border rounded-lg shadow-lg p-4 min-w-[220px]">
                            {categories.map((category) => (
                              <Link
                                key={category.id}
                                to={`/shop?category=${category.id}`}
                                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                              >
                                <span className="text-xl">{category.icon}</span>
                                <span className="font-medium">{category.name}</span>
                                <Badge variant="secondary" className="ml-auto text-xs">
                                  {category.count}
                                </Badge>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <AnimatePresence>
                  {isSearchOpen ? (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 300, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <Input
                        placeholder="Search products..."
                        className="pr-10"
                        autoFocus
                        onBlur={() => setIsSearchOpen(false)}
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  ) : (
                    <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                      <Search className="h-5 w-5" />
                    </Button>
                  )}
                </AnimatePresence>
              </div>

              {/* Account */}
              <Link to="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 h-5 w-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Input placeholder="Search products..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Categories */}
              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-semibold mb-3 px-4">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/shop?category=${category.id}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
