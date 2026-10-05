import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { TableBooking } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:30 AM');
  const [seatingArea, setSeatingArea] = useState<'Sunlit Window Bar' | 'Garden Courtyard' | 'Mezzanine Library'>('Garden Courtyard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState<TableBooking | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    const bId = 'RES-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmed({
      bookingId: bId,
      name,
      email,
      phone,
      guests,
      date,
      timeSlot,
      seatingArea,
      specialRequests: notes || undefined,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18110D]/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E6DFD5] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#EDE6DC]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#B05D3B]" />
            <h3 className="font-serif text-xl font-bold text-[#2C241E]">
              {confirmed ? 'Table Reserved' : 'Book a Table'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6D60] hover:text-[#2C241E] hover:bg-[#EFEAE2] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto">
          {confirmed ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-[#2C241E]">We have saved your table!</h4>
                <p className="text-xs text-[#6B5D50] mt-1">
                  Confirmation code <span className="font-mono font-bold text-[#2C241E]">{confirmed.bookingId}</span>
                </p>
              </div>
              <div className="bg-[#F4EFE9] p-4 rounded-xl text-left text-xs space-y-2 border border-[#E1D6C8]">
                <p><strong>Guest:</strong> {confirmed.name} ({confirmed.guests} guests)</p>
                <p><strong>Date & Time:</strong> {confirmed.date} at {confirmed.timeSlot}</p>
                <p><strong>Atmosphere:</strong> {confirmed.seatingArea}</p>
                <p className="text-[#847567] pt-1 border-t border-[#DFD4C5]">42 Prince Street, Soho · 90-minute seating window</p>
              </div>
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#2C241E] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#43362C] cursor-pointer"
              >
                Close & Return to Café
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                  Seating Atmosphere
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['Garden Courtyard', 'Sunlit Window Bar', 'Mezzanine Library'] as const).map((zone) => (
                    <button
                      key={zone}
                      type="button"
                      onClick={() => setSeatingArea(zone)}
                      className={`p-2 text-center rounded-lg border text-[11px] font-medium transition-all cursor-pointer ${
                        seatingArea === zone
                          ? 'border-[#2C241E] bg-[#2C241E] text-white'
                          : 'border-[#DDD5CA] text-[#635548] hover:bg-[#F3ECE4]'
                      }`}
                    >
                      {zone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                  Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['9:00 AM', '10:30 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeSlot(t)}
                      className={`py-2 text-center rounded-lg border transition-all cursor-pointer tabular-nums text-xs ${
                        timeSlot === t
                          ? 'border-[#2C241E] bg-[#2C241E] text-white font-semibold'
                          : 'border-[#DDD5CA] text-[#635548] hover:bg-[#F3ECE4]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Hayes"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(212) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1">
                    Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. birthday celebration, quiet corner"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#2C241E] text-[#FAF8F5] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#43362C] transition-colors cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
