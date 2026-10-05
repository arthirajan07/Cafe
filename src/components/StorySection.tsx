import React from 'react';
import { Award, HeartHandshake, Leaf, SunMedium } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 border-b border-[#E6DFD5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#938171] font-semibold">
            Philosophy & Origin
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C241E] tracking-tight mt-2">
            The Intersection of Grain & Bean
          </h2>
          <p className="text-sm sm:text-base text-[#685B4E] mt-3">
            Founded in Soho in 2018, Komorebi is named after the Japanese word for sunlight filtering gently through forest leaves. We believe mornings should never be hurried.
          </p>
        </div>

        {/* 3 Pillars of Craft */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#F6F1EA] p-8 rounded-2xl border border-[#E6DFD5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#DDD5CA] flex items-center justify-center text-[#B05D3B]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#8C7D70]">01. Sourcing</span>
            <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
              Direct Farm Relationships
            </h3>
            <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
              We bypass commodity exchanges entirely, buying directly from micro-lot families in Ethiopia, Colombia, and Guatemala. Paying 2.8× above Fair Trade rates allows our producing partners to invest in clean water washing stations and living wages.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#F6F1EA] p-8 rounded-2xl border border-[#E6DFD5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#DDD5CA] flex items-center justify-center text-[#B05D3B]">
              <SunMedium className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#8C7D70]">02. Roastery</span>
            <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
              Small Batch Dialing
            </h3>
            <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
              Roasting three days a week on our modified Diedrich IR-12. We roast on the lighter spectrum of Nordic and Tokyo traditions—highlighting origin acidity, floral aromatics, and inherent fruit sweetness rather than charred roasty bitterness.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#F6F1EA] p-8 rounded-2xl border border-[#E6DFD5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#DDD5CA] flex items-center justify-center text-[#B05D3B]">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#8C7D70]">03. Bakehouse</span>
            <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
              72-Hour Wild Levain
            </h3>
            <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
              Our sourdough mother starter, “Hoshi,” has been nurtured since October 2018. Paired with certified organic New York stone-ground wheat and cultured Normandy AOP butter, our doughs cold-ferment for three days for maximum depth, crispness, and digestibility.
            </p>
          </div>
        </div>

        {/* Barista & Roaster Commitment Quote */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#2C241E] text-[#FAF8F5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#EDE5DC]">
              “A great cup of coffee requires humility. The farmer spent nine months nurturing the cherry; our job as roasters and baristas is simply not to get in the way of what nature crafted.”
            </p>
            <p className="text-xs text-[#B2A497] uppercase tracking-wider font-semibold">
              Kenji Mori · Head Roaster & Co-Founder
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 border border-[#524438] bg-[#3B2F25] px-4 py-2.5 rounded-xl">
            <Award className="w-5 h-5 text-[#E2A66C]" />
            <div className="text-left text-xs">
              <span className="font-bold block text-[#FAF8F5]">NYC Roaster of the Year</span>
              <span className="text-[#AFA194]">Specialty Coffee Guild · 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
