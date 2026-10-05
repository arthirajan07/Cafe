import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReserve: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReserve,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E6DFD5]'
          : 'bg-[#FAF8F5] border-b border-[#EFEAE2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#2C241E] hover:text-[#B05D3B] transition-colors text-left"
        >
          Komorebi
        </button>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5E5246]">
          <button
            onClick={() => handleNavClick('menu')}
            className="hover:text-[#2C241E] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Menu
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="hover:text-[#2C241E] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Roastery & Story
          </button>
          <button
            onClick={() => handleNavClick('flavor-finder')}
            className="hover:text-[#2C241E] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Palate Guide
          </button>
          <button
            onClick={() => handleNavClick('reservations')}
            className="hover:text-[#2C241E] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Reservations
          </button>
          <button
            onClick={() => handleNavClick('location')}
            className="hover:text-[#2C241E] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Hours & Location
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenReserve}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#2C241E] border border-[#D5CABE] rounded-lg hover:bg-[#F1EBE2] transition-colors whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View shopping bag"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2C241E] rounded-lg hover:bg-[#43362C] transition-colors whitespace-nowrap cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Order Ahead</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#B05D3B] text-white text-[11px] font-bold rounded-sm tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5E5246] hover:text-[#2C241E] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6DFD5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('menu')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C241E] border-b border-[#F0EAE1]"
          >
            Menu & Order Ahead
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C241E] border-b border-[#F0EAE1]"
          >
            Roastery & Story
          </button>
          <button
            onClick={() => handleNavClick('flavor-finder')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C241E] border-b border-[#F0EAE1]"
          >
            Find Your Palate
          </button>
          <button
            onClick={() => handleNavClick('reservations')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C241E] border-b border-[#F0EAE1]"
          >
            Table Reservations
          </button>
          <button
            onClick={() => handleNavClick('location')}
            className="block w-full text-left py-2 text-base font-medium text-[#2C241E] border-b border-[#F0EAE1]"
          >
            Hours & Location
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-[#FAF8F5] bg-[#B05D3B] rounded-lg"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
