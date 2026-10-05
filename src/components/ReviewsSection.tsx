import React from 'react';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Komorebi has managed to pull off the rarest feat in Manhattan specialty coffee: world-class single-origin precision paired with an atmosphere so serene you forget you are in Soho.',
      author: 'Eater New York',
      role: 'Essential Coffee Guide · Critic’s Pick',
      metric: 'Top 10 Roasteries in NYC',
    },
    {
      quote:
        'Their Miso Maple Latte and Cardamom Bullar have redefined my Saturday routine. The 72-hour sourdough lamination on the croissant is unmatched anywhere on the East Coast.',
      author: 'Chloe Vance',
      role: 'Architect & Soho Resident',
      metric: 'Patron for 4+ Years',
    },
    {
      quote:
        'The Panama Geisha pour-over was poured with clinical temperature accuracy, yet the barista took three minutes to walk me through the grower’s altitude and processing lot. Pure passion.',
      author: 'David Zhang',
      role: 'Coffee Review Magazine',
      metric: '96/100 Cupping Score',
    },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-[#E6DFD5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#938171] font-semibold">
            Press & Patron Words
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C241E] tracking-tight mt-1">
            Praised for Purity & Presence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F5EFE7] rounded-2xl border border-[#E6DDD0] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C47D3B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-serif italic text-sm sm:text-base text-[#3C3026] leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFD4C5]">
                <p className="font-bold text-xs text-[#2C241E]">{t.author}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#78695C] mt-0.5">
                  <span>{t.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-[#B05D3B]">{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
