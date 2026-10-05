import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { TableBooking } from '../types';

export const ReservationSection: React.FC = () => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [seatingArea, setSeatingArea] = useState<'Sunlit Window Bar' | 'Garden Courtyard' | 'Mezzanine Library'>('Garden Courtyard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [confirmedBooking, setConfirmedBooking] = useState<TableBooking | null>(null);

  const availableSlots = [
    { time: '8:30 AM', period: 'Morning Espresso & Pastry' },
    { time: '10:00 AM', period: 'Slow Morning Flight' },
    { time: '11:30 AM', period: 'Artisan Brunch' },
    { time: '1:00 PM', period: 'Lunch & Pour-Over' },
    { time: '2:30 PM', period: 'Midday Quiet Hours' },
    { time: '4:00 PM', period: 'Afternoon Tea & Canele' },
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const newBooking: TableBooking = {
      bookingId: 'RES-' + Math.floor(1000 + Math.random() * 9000),
      name,
      email,
      phone,
      guests,
      date,
      timeSlot,
      seatingArea,
      specialRequests: specialRequests || undefined,
    };
    setConfirmedBooking(newBooking);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
  };

  return (
    <section id="reservations" className="py-16 md:py-24 bg-[#F5EFE8] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Atmosphere */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#938171] font-semibold">
              Slow Hospitality
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C241E] tracking-tight leading-tight">
              Reserve a Table at the Bakehouse
            </h2>
            <p className="text-sm sm:text-base text-[#685B4E] leading-relaxed">
              While our front espresso bar always welcomes walk-ins for quick pour-overs and morning bread, our sunlit garden courtyard and mezzanine library can be booked in advance for lingering brunches and private coffee cuppings.
            </p>

            {/* Atmosphere Callouts */}
            <div className="space-y-4 pt-4 border-t border-[#DFD5C7]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#DCD1C3] flex items-center justify-center shrink-0 text-[#2C241E]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C241E]">Intimate Seating</h4>
                  <p className="text-xs text-[#7A6D60] mt-0.5">
                    Tables hold 1 to 8 guests. Walk-ins are always welcomed at the front bar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#DCD1C3] flex items-center justify-center shrink-0 text-[#2C241E]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C241E]">Complimentary Cupping Note</h4>
                  <p className="text-xs text-[#7A6D60] mt-0.5">
                    Every table reservation includes a seasonal single-origin welcome brew sample.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#DCD1C3] flex items-center justify-center shrink-0 text-[#2C241E]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C241E]">90-Minute Seating Window</h4>
                  <p className="text-xs text-[#7A6D60] mt-0.5">
                    Take your time with slow brews, warm sourdough loaves, and quiet conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Interactive Card */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl border border-[#E6DFD5] shadow-xs p-6 sm:p-8">
            {confirmedBooking ? (
              /* Confirmed Ticket */
              <div className="text-center py-6 space-y-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#938171] font-semibold">
                    Reservation Confirmed
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#2C241E] mt-1">
                    We Look Forward to Welcoming You
                  </h3>
                  <p className="text-xs text-[#6B5D50] mt-2">
                    A confirmation has been logged for <span className="font-semibold text-[#2C241E]">{confirmedBooking.name}</span>.
                  </p>
                </div>

                {/* Ticket Details */}
                <div className="bg-[#F4EFE9] border border-[#E1D6C8] rounded-xl p-5 text-left space-y-3 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-[#E1D6C8]">
                    <span className="text-[#847567] font-medium">Booking ID</span>
                    <span className="font-mono font-bold text-sm text-[#2C241E]">{confirmedBooking.bookingId}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-[#847567] block">Date</span>
                      <span className="font-semibold text-[#2C241E]">{confirmedBooking.date}</span>
                    </div>
                    <div>
                      <span className="text-[#847567] block">Time</span>
                      <span className="font-semibold text-[#2C241E]">{confirmedBooking.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-[#847567] block">Party Size</span>
                      <span className="font-semibold text-[#2C241E]">{confirmedBooking.guests} Guests</span>
                    </div>
                    <div>
                      <span className="text-[#847567] block">Seating Zone</span>
                      <span className="font-semibold text-[#2C241E]">{confirmedBooking.seatingArea}</span>
                    </div>
                  </div>
                  {confirmedBooking.specialRequests && (
                    <div className="pt-2 border-t border-[#E1D6C8]">
                      <span className="text-[#847567] block">Special Request:</span>
                      <span className="italic text-[#4D4136]">{confirmedBooking.specialRequests}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3 bg-[#2C241E] text-[#FAF8F5] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#43362C] transition-colors cursor-pointer"
                  >
                    Book Another Table
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="py-3 px-5 border border-[#D5CABE] text-[#2C241E] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#F3EFEA] transition-colors cursor-pointer"
                  >
                    Print Voucher
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleBook} className="space-y-6">
                {/* 1. Date & Party Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                      Guests
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 4, 6, 8].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuests(num)}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer tabular-nums ${
                            guests === num
                              ? 'border-[#2C241E] bg-[#2C241E] text-white shadow-xs'
                              : 'border-[#DDD5CA] text-[#635548] hover:bg-[#F2ECE3]'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Seating Zone Preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                    Preferred Atmosphere
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    {[
                      { id: 'Garden Courtyard', label: 'Garden Courtyard', desc: 'Heated glass atrium' },
                      { id: 'Sunlit Window Bar', label: 'Window Espresso Bar', desc: 'Barista counter view' },
                      { id: 'Mezzanine Library', label: 'Mezzanine Library', desc: 'Quiet wooden loft' },
                    ].map((zone) => (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => setSeatingArea(zone.id as any)}
                        className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                          seatingArea === zone.id
                            ? 'border-[#2C241E] bg-[#EFEAE2] font-semibold text-[#2C241E]'
                            : 'border-[#DDD5CA] text-[#635548] hover:bg-[#F5EFE7]'
                        }`}
                      >
                        <div className="font-semibold text-xs text-[#2C241E]">{zone.label}</div>
                        <div className="text-[11px] text-[#867769] mt-0.5">{zone.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Time Slots */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                    Available Seating Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setTimeSlot(slot.time)}
                        className={`p-2.5 text-left rounded-lg border transition-all cursor-pointer ${
                          timeSlot === slot.time
                            ? 'border-[#2C241E] bg-[#2C241E] text-white shadow-xs'
                            : 'border-[#DDD5CA] bg-[#FAF8F5] text-[#55483C] hover:bg-[#F3EFE9]'
                        }`}
                      >
                        <div className="font-semibold text-xs tabular-nums">{slot.time}</div>
                        <div className={`text-[10px] truncate ${timeSlot === slot.time ? 'text-white/80' : 'text-[#8C7D70]'}`}>
                          {slot.period}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Guest Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(212) 555-0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                    Special Requests or Dietary Allergies (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., anniversary celebration, high-chair needed, gluten sensitivity"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2C241E] text-[#FAF8F5] rounded-xl font-medium text-xs uppercase tracking-wider hover:bg-[#43362C] transition-colors cursor-pointer shadow-xs"
                >
                  Confirm Table Booking for {guests} {guests === 1 ? 'Guest' : 'Guests'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
