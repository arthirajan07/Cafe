/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, CartItem, CartCustomization } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CustomizeModal } from './components/CustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { ReservationSection } from './components/ReservationSection';
import { ReservationModal } from './components/ReservationModal';
import { FlavorCompass } from './components/FlavorCompass';
import { StorySection } from './components/StorySection';
import { LocationHours } from './components/LocationHours';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItemForCustomization, setSelectedItemForCustomization] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Total items count in cart
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Handle adding customized item into the cart
  const handleAddToCart = (
    item: MenuItem,
    customization: CartCustomization,
    quantity: number,
    calculatedPrice: number
  ) => {
    const cartItemId = `${item.id}-${customization.size}-${customization.milk || 'none'}-${customization.temperature || 'none'}-${Date.now()}`;
    const newCartItem: CartItem = {
      cartItemId,
      item,
      customization,
      quantity,
      totalPrice: calculatedPrice,
    };

    setCart((prev) => [...prev, newCartItem]);

    // Micro-interaction flash feedback
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  // Direct quick-add or open modal
  const handleSelectItem = (item: MenuItem) => {
    // If it has customizable options (size, milk, hot/iced), open the customization modal
    if (item.hasMilkOptions || item.hasSizeOptions || item.availableHotOrIced) {
      setSelectedItemForCustomization(item);
    } else {
      // Quick add for simple pastries or whole beans with standard options
      handleAddToCart(
        item,
        { size: 'Regular' },
        1,
        item.price
      );
    }
  };

  // Cart quantity controls
  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    } else {
      setCart((prev) =>
        prev.map((item) => {
          if (item.cartItemId === cartItemId) {
            const unitPrice = item.totalPrice / item.quantity;
            return {
              ...item,
              quantity: newQty,
              totalPrice: unitPrice * newQty,
            };
          }
          return item;
        })
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C241E] selection:bg-[#EBDDCF]">
      {/* Fixed/Sticky Navigation with 3-Zone contract */}
      <Navbar
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReserve={() => setIsReserveModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onBookTable={() => handleNavigate('reservations')}
        />

        {/* The Seasonal Menu with Interactive Ordering */}
        <MenuSection
          onSelectItem={handleSelectItem}
          recentlyAddedId={recentlyAddedId}
        />

        {/* Interactive Coffee Palate Guide */}
        <FlavorCompass
          onSelectRecommendedItem={(item) => setSelectedItemForCustomization(item)}
        />

        {/* Roastery Craftsmanship & Sourdough Fermentation Story */}
        <StorySection />

        {/* Table Reservation Module */}
        <ReservationSection />

        {/* Space Etiquette, Opening Hours & Location */}
        <LocationHours />

        {/* Critic & Patron Reviews */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReserve={() => setIsReserveModalOpen(true)}
      />

      {/* Customization Modal */}
      <CustomizeModal
        item={selectedItemForCustomization}
        onClose={() => setSelectedItemForCustomization(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart & Pickup Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Quick Table Booking Modal from Navbar */}
      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </div>
  );
}
