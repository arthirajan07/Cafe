import React, { useState } from 'react';
import { MenuItem, CartCustomization } from '../types';
import { X, Check } from 'lucide-react';
import { ProductArt } from './ArtisanIllustrations';

interface CustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, customization: CartCustomization, quantity: number, calculatedPrice: number) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [size, setSize] = useState<'Regular' | 'Large'>('Regular');
  const [milk, setMilk] = useState<'Whole Milk' | 'Oat Milk' | 'Almond Milk' | 'None'>('Whole Milk');
  const [temperature, setTemperature] = useState<'Hot' | 'Iced'>('Hot');
  const [sweetness, setSweetness] = useState<'Standard' | 'Less Sweet' | 'Unsweetened'>('Standard');
  const [specialNotes, setSpecialNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Price calculations
  let unitPrice = item.price;
  if (size === 'Large') unitPrice += 0.75;
  if (milk === 'Oat Milk' || milk === 'Almond Milk') unitPrice += 0.75;
  const totalPrice = unitPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToCart(
      item,
      {
        size,
        milk: item.hasMilkOptions ? milk : undefined,
        temperature: item.availableHotOrIced ? temperature : undefined,
        sweetness: item.category === 'signature' ? sweetness : undefined,
        notes: specialNotes.trim() ? specialNotes : undefined,
      },
      quantity,
      totalPrice
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18110D]/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E6DFD5] overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#EDE6DC]">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#938171] font-semibold">
              {item.category}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C241E]">
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6D60] hover:text-[#2C241E] hover:bg-[#EFEAE2] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 space-y-6 flex-1">
          {/* Item Preview */}
          <div className="flex items-center gap-4 bg-[#F4EFE9] p-3.5 rounded-xl border border-[#EAE2D7]">
            <ProductArt category={item.category} name={item.name} className="w-20 h-16 shrink-0" />
            <div className="text-xs text-[#6B5E52] leading-relaxed">
              <p className="line-clamp-2">{item.description}</p>
              {item.notes && <p className="mt-1 font-medium text-[#B05D3B]">Notes: {item.notes}</p>}
            </div>
          </div>

          {/* Size Choice */}
          {item.hasSizeOptions && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-2">
                Select Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSize('Regular')}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    size === 'Regular'
                      ? 'border-[#2C241E] bg-[#2C241E] text-white shadow-xs'
                      : 'border-[#DDD5CA] bg-[#FAF8F5] text-[#2C241E] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <div className="font-semibold text-sm">Regular (12 oz)</div>
                  <div className="opacity-80 mt-0.5">Standard ratio</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSize('Large')}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    size === 'Large'
                      ? 'border-[#2C241E] bg-[#2C241E] text-white shadow-xs'
                      : 'border-[#DDD5CA] bg-[#FAF8F5] text-[#2C241E] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <div className="font-semibold text-sm">Large (16 oz)</div>
                  <div className="opacity-80 mt-0.5">+ $0.75</div>
                </button>
              </div>
            </div>
          )}

          {/* Temperature Choice */}
          {item.availableHotOrIced && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-2">
                Temperature
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTemperature('Hot')}
                  className={`py-2.5 px-3 text-center rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    temperature === 'Hot'
                      ? 'border-[#2C241E] bg-[#2C241E] text-white shadow-xs'
                      : 'border-[#DDD5CA] bg-[#FAF8F5] text-[#2C241E] hover:bg-[#F2ECE3]'
                  }`}
                >
                  Hot (Steamed Microfoam)
                </button>
                <button
                  type="button"
                  onClick={() => setTemperature('Iced')}
                  className={`py-2.5 px-3 text-center rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    temperature === 'Iced'
                      ? 'border-[#2C241E] bg-[#2C241E] text-white shadow-xs'
                      : 'border-[#DDD5CA] bg-[#FAF8F5] text-[#2C241E] hover:bg-[#F2ECE3]'
                  }`}
                >
                  Iced (Hand-Chipped Ice)
                </button>
              </div>
            </div>
          )}

          {/* Milk Options */}
          {item.hasMilkOptions && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-2">
                Choice of Milk
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'Whole Milk', label: 'Local Whole Milk', extra: null },
                  { id: 'Oat Milk', label: 'Minor Figures Oat', extra: '+$0.75' },
                  { id: 'Almond Milk', label: 'House Pressed Almond', extra: '+$0.75' },
                  { id: 'None', label: 'Black / No Milk', extra: null },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMilk(opt.id as any)}
                    className={`p-2.5 text-left rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      milk === opt.id
                        ? 'border-[#2C241E] bg-[#EFEAE2] font-semibold text-[#2C241E]'
                        : 'border-[#DDD5CA] text-[#55483C] hover:bg-[#F7F2EB]'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {opt.extra && <span className="text-[11px] text-[#8E7E70]">{opt.extra}</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sweetness Preference */}
          {item.category === 'signature' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-2">
                Sweetness Balance
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {(['Standard', 'Less Sweet', 'Unsweetened'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSweetness(s)}
                    className={`py-2 px-2 text-center rounded-lg border transition-all cursor-pointer ${
                      sweetness === s
                        ? 'border-[#2C241E] bg-[#2C241E] text-white font-medium'
                        : 'border-[#DDD5CA] text-[#55483C] hover:bg-[#F4EEE7]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Barista Instructions */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
              Barista Note (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. extra hot, separate bakery bag, decaf..."
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] placeholder:text-[#9D8E81] focus:outline-hidden focus:border-[#2C241E]"
            />
          </div>

          {/* Quantity & Add Action */}
          <div className="pt-4 border-t border-[#EDE6DC] flex items-center justify-between gap-4">
            <div className="flex items-center border border-[#DDD5CA] rounded-lg bg-[#FAF8F5]">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-base text-[#5E5246] hover:text-[#2C241E] cursor-pointer"
              >
                −
              </button>
              <span className="px-3 py-1.5 text-sm font-semibold tabular-nums text-[#2C241E]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-base text-[#5E5246] hover:text-[#2C241E] cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-[#2C241E] text-[#FAF8F5] rounded-xl font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#43362C] transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>Add to Order Bag</span>
              <span className="font-semibold tabular-nums">${totalPrice.toFixed(2)}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
