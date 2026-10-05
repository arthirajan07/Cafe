import React, { useState } from 'react';
import { Clock, MapPin, Wifi, Dog, Volume2, Copy, Check, Navigation } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const hours = [
    { day: 'Monday – Thursday', open: '7:00 AM – 6:00 PM', highlight: false },
    { day: 'Friday', open: '7:00 AM – 7:00 PM', highlight: false },
    { day: 'Saturday', open: '7:30 AM – 7:00 PM', highlight: true },
    { day: 'Sunday', open: '7:30 AM – 6:00 PM', highlight: true },
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('42 Prince Street, New York, NY 10012');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 md:py-24 border-b border-[#E6DFD5] bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hours & Address */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#938171] font-semibold">
              Find Us in Soho
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C241E] tracking-tight">
              Hours, Space & Location
            </h2>
            <p className="text-sm sm:text-base text-[#685B4E] leading-relaxed">
              Nestled between Mulberry and Mott on historic Prince Street. Step off the cobblestones into a calm, sun-drenched sanctuary scented with roasted Guji coffee and warm cardamom sourdough.
            </p>

            {/* Operating Hours Table with tabular numbers */}
            <div className="bg-[#FAF8F5] rounded-xl border border-[#E1D6C8] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFEAE2]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B05D3B]" />
                  <span className="font-serif font-bold text-base text-[#2C241E]">Opening Schedule</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Open Today
                </span>
              </div>

              <div className="divide-y divide-[#F0EAE1] text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className={`font-medium ${h.highlight ? 'text-[#2C241E] font-semibold' : 'text-[#68594C]'}`}>
                      {h.day}
                    </span>
                    <span className="font-mono tabular-nums text-[#2C241E] font-semibold">
                      {h.open}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Quick Actions */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E1D6C8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#B05D3B] shrink-0" />
                <div>
                  <span className="font-semibold text-[#2C241E] block">42 Prince Street</span>
                  <span className="text-[#7E6F62]">Soho, New York, NY 10012</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-lg border border-[#DDD5CA] hover:bg-[#F2ECE3] transition-colors flex items-center gap-1 text-[#4F4134] cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href="https://maps.google.com/?q=42+Prince+Street+New+York"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#2C241E] text-white hover:bg-[#43362C] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Space Philosophy & Community Amenities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E6DFD5] space-y-5">
              <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
                Atmosphere & Space Etiquette
              </h3>
              <p className="text-xs sm:text-sm text-[#6A5C4E] leading-relaxed">
                We designed Komorebi as an antidote to frantic city rhythms. We encourage lingering, reading, and conversations over slow coffee flights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F5EFE7] rounded-xl border border-[#E6DDD0] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#2C241E] font-semibold text-xs">
                    <Wifi className="w-4 h-4 text-[#B05D3B]" />
                    <span>Laptops & Creative Flow</span>
                  </div>
                  <p className="text-[11px] text-[#78695C] leading-normal">
                    Welcomed in our upstairs Mezzanine Library on weekdays. Weekends are laptop-free to preserve presence.
                  </p>
                </div>

                <div className="p-4 bg-[#F5EFE7] rounded-xl border border-[#E6DDD0] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#2C241E] font-semibold text-xs">
                    <Dog className="w-4 h-4 text-[#B05D3B]" />
                    <span>Canine Friendly</span>
                  </div>
                  <p className="text-[11px] text-[#78695C] leading-normal">
                    Well-behaved companions are cherished at our outdoor teak sidewalk benches. Fresh water provided.
                  </p>
                </div>

                <div className="p-4 bg-[#F5EFE7] rounded-xl border border-[#E6DDD0] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#2C241E] font-semibold text-xs">
                    <Volume2 className="w-4 h-4 text-[#B05D3B]" />
                    <span>Acoustic Vinyl Audio</span>
                  </div>
                  <p className="text-[11px] text-[#78695C] leading-normal">
                    Curated analog vinyl spinning daily on our vintage McIntosh tube amp and Tannoy monitors.
                  </p>
                </div>

                <div className="p-4 bg-[#F5EFE7] rounded-xl border border-[#E6DDD0] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#2C241E] font-semibold text-xs">
                    <Clock className="w-4 h-4 text-[#B05D3B]" />
                    <span>Subway Proximity</span>
                  </div>
                  <p className="text-[11px] text-[#78695C] leading-normal">
                    2 minutes from Spring St (6 Train) or Prince St (R/W), 4 minutes from B/D/F/M Broadway-Lafayette.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
