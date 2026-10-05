import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';

interface FlavorCompassProps {
  onSelectRecommendedItem: (item: MenuItem) => void;
}

export const FlavorCompass: React.FC<FlavorCompassProps> = ({ onSelectRecommendedItem }) => {
  const [flavorProfile, setFlavorProfile] = useState<'floral' | 'sweet' | 'chocolate' | 'adventurous'>('floral');
  const [drinkStyle, setDrinkStyle] = useState<'black' | 'milk' | 'iced'>('black');

  // Match recommendation based on selection
  const recommendation = React.useMemo(() => {
    if (flavorProfile === 'floral') {
      if (drinkStyle === 'iced') return MENU_ITEMS.find((i) => i.id === 'esp-kyoto-cold-drip')!;
      return MENU_ITEMS.find((i) => i.id === 'esp-ethiopia-pourover')!;
    }
    if (flavorProfile === 'sweet') {
      if (drinkStyle === 'black') return MENU_ITEMS.find((i) => i.id === 'esp-panama-geisha')!;
      return MENU_ITEMS.find((i) => i.id === 'sig-miso-maple')!;
    }
    if (flavorProfile === 'chocolate') {
      if (drinkStyle === 'milk') return MENU_ITEMS.find((i) => i.id === 'esp-flat-white')!;
      return MENU_ITEMS.find((i) => i.id === 'bean-house-blend')!;
    }
    // adventurous
    if (drinkStyle === 'milk') return MENU_ITEMS.find((i) => i.id === 'sig-hojicha-cloud')!;
    if (drinkStyle === 'iced') return MENU_ITEMS.find((i) => i.id === 'sig-smoked-vanilla-tonic')!;
    return MENU_ITEMS.find((i) => i.id === 'sig-orange-cortado')!;
  }, [flavorProfile, drinkStyle]);

  return (
    <section id="flavor-finder" className="py-16 md:py-24 border-b border-[#E6DFD5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#938171] font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#B05D3B]" />
            <span>Interactive Palate Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C241E] tracking-tight">
            Discover Your Morning Cup
          </h2>
          <p className="text-sm sm:text-base text-[#685B4E] mt-3">
            Whether you favor delicate Ethiopian florals or dense nutty espresso with silky steamed milk, our interactive guide matches you with today’s freshly dialed roast.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4EFE8] rounded-2xl border border-[#E6DFD5] p-6 sm:p-10">
          {/* Left: Interactive Selectors */}
          <div className="lg:col-span-6 space-y-6">
            {/* Step 1: Palate Preference */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7E7063] block mb-2">
                1. What tasting notes excite you?
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'floral', title: 'Citrus & Floral', desc: 'Jasmine, peach, crisp bergamot' },
                  { id: 'chocolate', title: 'Cacao & Roasted Nut', desc: 'Dark chocolate, hazelnut, caramel' },
                  { id: 'sweet', title: 'Sweet & Umami', desc: 'Vermont maple, honeycomb, miso' },
                  { id: 'adventurous', title: 'Botanical & Spiced', desc: 'Orange blossom, cardamom, smoke' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setFlavorProfile(p.id as any)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      flavorProfile === p.id
                        ? 'border-[#2C241E] bg-[#FAF8F5] text-[#2C241E] shadow-xs'
                        : 'border-[#DDD5CA] bg-transparent text-[#625345] hover:bg-[#EBE4DC]'
                    }`}
                  >
                    <div className="font-semibold text-xs text-[#2C241E]">{p.title}</div>
                    <div className="text-[11px] text-[#867768] mt-0.5">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Preferred Preparation Style */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7E7063] block mb-2">
                2. How do you take your brew?
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'black', title: 'Pure Black', desc: 'Pour-over & Drip' },
                  { id: 'milk', title: 'With Milk', desc: 'Textured microfoam' },
                  { id: 'iced', title: 'Cold & Chilled', desc: 'Over slow ice' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setDrinkStyle(s.id as any)}
                    className={`p-2.5 text-center rounded-xl border transition-all cursor-pointer ${
                      drinkStyle === s.id
                        ? 'border-[#2C241E] bg-[#FAF8F5] text-[#2C241E] shadow-xs font-semibold'
                        : 'border-[#DDD5CA] bg-transparent text-[#625345] hover:bg-[#EBE4DC]'
                    }`}
                  >
                    <div className="text-xs">{s.title}</div>
                    <div className="text-[10px] text-[#867768]">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Matched Barista Recommendation */}
          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-xl border border-[#DFD6C9] p-6 shadow-xs flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8A7A6C] mb-2 pb-2 border-b border-[#EFEAE2]">
                <span className="flex items-center gap-1 font-semibold text-[#B05D3B]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Barista Recommendation
                </span>
                <span className="capitalize">{recommendation.category}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
                {recommendation.name}
              </h3>

              {recommendation.notes && (
                <p className="text-xs font-medium text-[#B05D3B] mt-1">
                  Key notes: {recommendation.notes}
                </p>
              )}

              <p className="text-xs sm:text-sm text-[#65574B] mt-3 leading-relaxed">
                {recommendation.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EDE6DC] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#8A7A6C] block">Price</span>
                <span className="text-xl font-bold text-[#2C241E] tabular-nums">
                  ${recommendation.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => onSelectRecommendedItem(recommendation)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2C241E] text-[#FAF8F5] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#43362C] transition-colors cursor-pointer"
              >
                <span>Select & Customize</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
