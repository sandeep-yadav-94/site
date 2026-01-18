import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { items: [...state.items, { product, quantity }] };
        });
      },
      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'ma-enterprises-cart',
    }
  )
);

// Sample product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Tower Cooler 85L',
    description: 'High-capacity desert cooler with honeycomb cooling pads and powerful air throw for large rooms.',
    price: 12999,
    originalPrice: 15999,
    image: '/placeholder.svg',
    category: 'Coolers',
    brand: 'Symphony',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    features: ['85L Tank Capacity', '4-Way Air Deflection', 'Honeycomb Pads', 'Remote Control'],
  },
  {
    id: '2',
    name: 'Double Door Refrigerator 465L',
    description: 'Frost-free refrigerator with convertible freezer and smart inverter technology.',
    price: 45999,
    originalPrice: 52999,
    image: '/placeholder.svg',
    category: 'Refrigerators',
    brand: 'LG',
    rating: 4.7,
    reviews: 567,
    inStock: true,
    features: ['Smart Inverter', 'Convertible Freezer', 'Door Cooling+', '10 Year Warranty'],
  },
  {
    id: '3',
    name: 'BLDC Ceiling Fan 1200mm',
    description: 'Energy-efficient BLDC motor ceiling fan with remote control and timer function.',
    price: 3499,
    originalPrice: 4299,
    image: '/placeholder.svg',
    category: 'Fans',
    brand: 'Atomberg',
    rating: 4.6,
    reviews: 892,
    inStock: true,
    features: ['BLDC Motor', '65% Energy Saving', 'Remote Control', '5 Year Warranty'],
  },
  {
    id: '4',
    name: 'L-Shape Sofa Set',
    description: 'Premium fabric L-shape sofa with high-density foam and solid wood frame.',
    price: 34999,
    originalPrice: 42999,
    image: '/placeholder.svg',
    category: 'Furniture',
    brand: 'Urban Ladder',
    rating: 4.4,
    reviews: 156,
    inStock: true,
    features: ['Premium Fabric', 'High-Density Foam', 'Solid Wood Frame', '5 Year Warranty'],
  },
  {
    id: '5',
    name: 'Front Load Washing Machine 8kg',
    description: 'Fully automatic front load washing machine with AI wash and steam care technology.',
    price: 38999,
    originalPrice: 45999,
    image: '/placeholder.svg',
    category: 'Home Appliances',
    brand: 'Samsung',
    rating: 4.8,
    reviews: 345,
    inStock: true,
    features: ['AI Wash', 'Steam Care', 'Hygiene Steam', 'Digital Inverter'],
  },
  {
    id: '6',
    name: 'Personal Cooler 35L',
    description: 'Compact personal cooler perfect for small rooms with powerful blower.',
    price: 6999,
    originalPrice: 8499,
    image: '/placeholder.svg',
    category: 'Coolers',
    brand: 'Bajaj',
    rating: 4.3,
    reviews: 421,
    inStock: true,
    features: ['35L Capacity', 'Turbo Fan', 'Anti-Bacterial Tank', 'Castor Wheels'],
  },
  {
    id: '7',
    name: 'Side-by-Side Refrigerator 655L',
    description: 'Premium side-by-side refrigerator with water dispenser and ice maker.',
    price: 89999,
    originalPrice: 99999,
    image: '/placeholder.svg',
    category: 'Refrigerators',
    brand: 'Samsung',
    rating: 4.9,
    reviews: 123,
    inStock: true,
    features: ['SpaceMax', 'Twin Cooling', 'Water Dispenser', 'Ice Maker'],
  },
  {
    id: '8',
    name: 'Pedestal Fan 400mm',
    description: 'Powerful pedestal fan with adjustable height and oscillation.',
    price: 2199,
    originalPrice: 2699,
    image: '/placeholder.svg',
    category: 'Fans',
    brand: 'Havells',
    rating: 4.2,
    reviews: 678,
    inStock: true,
    features: ['Adjustable Height', 'Wide Oscillation', 'Thermal Overload', '2 Year Warranty'],
  },
];

export const categories = [
  { id: 'coolers', name: 'Coolers', icon: '❄️', count: 24 },
  { id: 'refrigerators', name: 'Refrigerators', icon: '🧊', count: 18 },
  { id: 'fans', name: 'Fans', icon: '💨', count: 32 },
  { id: 'furniture', name: 'Furniture', icon: '🛋️', count: 45 },
  { id: 'home-appliances', name: 'Home Appliances', icon: '🏠', count: 56 },
];
