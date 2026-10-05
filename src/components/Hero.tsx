import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { HeroIllustration } from './ArtisanIllustrations';

interface HeroProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Live Status Indicator Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#736557] mb-8 pb-3 border-b border-[#EFE8DD]">
          <div className="flex items-center gap-1.5 font-medium text-[#2C241E]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Open Now</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#A29485]" />
            <span>Mon–Sun 7:00 AM – 6:00 PM</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#A29485]" />
            <span>42 Prince Street, Soho, NYC</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1 text-[#B05D3B] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Today's Batch: Ethiopia Guji Washed & Cardamom Bullar</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-xs uppercase tracking-widest text-[#938171] font-semibold">
              Specialty Micro-Roastery & Slow Bakehouse
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2C241E] leading-[1.08] tracking-tight [text-wrap:balance]">
              Slow mornings, single-origin roasts, and wild sourdough pastries.
            </h1>

            <p className="text-base sm:text-lg text-[#5E5246] leading-relaxed max-w-xl">
              We roast micro-lot coffees sourced directly from smallholder farms across Guji, Huila, and Boquete. Baked fresh at dawn using three-day fermented levain dough and Normandy cultured butter.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#2C241E] text-[#FAF8F5] rounded-xl font-medium text-sm hover:bg-[#43362C] transition-all shadow-xs cursor-pointer group"
              >
                <span>Explore Menu & Order</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onBookTable}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#D5CABE] bg-[#FAF8F5] text-[#2C241E] rounded-xl font-medium text-sm hover:bg-[#F3EFEA] transition-colors cursor-pointer"
              >
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Quiet Craft Standards Adjacency */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#EDE6DC]">
              <div>
                <p className="font-serif text-2xl font-bold text-[#2C241E] tabular-nums">48 hrs</p>
                <p className="text-xs text-[#7E7267] mt-0.5">Roast-to-Cup Window</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#2C241E] tabular-nums">72 hrs</p>
                <p className="text-xs text-[#7E7267] mt-0.5">Sourdough Fermentation</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#2C241E] tabular-nums">100%</p>
                <p className="text-xs text-[#7E7267] mt-0.5">Direct Farm Trade</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Atmosphere */}
          <div className="lg:col-span-6">
            <div className="relative">
              <HeroIllustration className="w-full aspect-16/10 shadow-lg" />
              
              {/* Subtle caption */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#82756A] px-1">
                <span>The Main Espresso Bar & Origami Pour-Over Station</span>
                <span>Soho Flagship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
