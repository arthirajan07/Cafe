import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReserve }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#241A14] text-[#FAF8F5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D2D23]">
          {/* Brand & Ethos */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight text-[#FAF8F5]">
              Komorebi Coffee & Bakehouse
            </h3>
            <p className="text-xs sm:text-sm text-[#AFA194] leading-relaxed max-w-sm">
              Dedicated to small-batch single-origin coffees, 72-hour cold-fermented sourdough pastries, and quiet morning presence in Soho.
            </p>
            <div className="pt-2 text-xs text-[#8B7C6E]">
              42 Prince Street, Soho, New York, NY 10012
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B2A08E] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#C8BCB0]">
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Seasonal Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('flavor-finder')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Coffee Palate Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReserve}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Roastery Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hours & Space
                </button>
              </li>
            </ul>
          </div>

          {/* Roastery Hours */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B2A08E] font-semibold">
              Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#C8BCB0]">
              <p>Mon–Thu: 7am – 6pm</p>
              <p>Friday: 7am – 7pm</p>
              <p>Saturday: 7:30am – 7pm</p>
              <p>Sunday: 7:30am – 6pm</p>
              <p className="text-[#968677] pt-2 text-[11px]">Walk-ins always welcomed at the espresso bar.</p>
            </div>
          </div>

          {/* Newsletter / Roast Drops */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B2A08E] font-semibold">
              The Friday Morning Dispatch
            </h4>
            <p className="text-xs text-[#AFA194] leading-relaxed">
              Sign up to receive announcements when micro-lots drop, seasonal pastry specials, and invitations to monthly private barista cuppings.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#38281F] border border-[#523A2C] rounded-xl flex items-center gap-2 text-xs text-emerald-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You're on the list. First dispatch arrives this Friday.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 text-xs bg-[#1A120D] border border-[#3E2D23] rounded-lg text-white placeholder:text-[#78695C] focus:outline-hidden focus:border-[#FAF8F5]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#FAF8F5] text-[#241A14] text-xs font-semibold rounded-lg hover:bg-[#EBE2D5] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unadorned Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7F7063]">
          <div>
            © {new Date().getFullYear()} Komorebi Coffee & Bakehouse LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#FAF8F5] cursor-pointer">Direct Trade Protocol</span>
            <span>·</span>
            <span className="hover:text-[#FAF8F5] cursor-pointer">Organic Certification</span>
            <span>·</span>
            <span className="hover:text-[#FAF8F5] cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
