import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Clock, MapPin } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [pickupTime, setPickupTime] = useState<'ASAP' | '20min' | '40min'>('ASAP');
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<{
    orderId: string;
    customerName: string;
    pickupTimeStr: string;
    total: number;
  } | null>(null);

  // Form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.08875;
  const tipAmount = subtotal * (tipPercent / 100);
  const grandTotal = subtotal + tax + tipAmount;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const randomId = 'KMR-' + Math.floor(100 + Math.random() * 900);
    const timeStr =
      pickupTime === 'ASAP'
        ? 'Ready in 10–15 minutes'
        : pickupTime === '20min'
        ? 'Ready in ~25 minutes'
        : 'Ready in ~45 minutes';

    setOrderConfirmed({
      orderId: randomId,
      customerName,
      pickupTimeStr: timeStr,
      total: grandTotal,
    });
    onClearCart();
    setIsCheckingOut(false);
  };

  const handleResetConfirmation = () => {
    setOrderConfirmed(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#140E0A]/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E6DFD5] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#EDE6DC]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#2C241E]" />
              <h2 className="font-serif text-xl font-bold text-[#2C241E]">
                {orderConfirmed ? 'Order Confirmed' : isCheckingOut ? 'Express Pickup Details' : 'Your Order Bag'}
              </h2>
            </div>
            <button
              onClick={orderConfirmed ? handleResetConfirmation : onClose}
              className="p-1.5 text-[#7A6D60] hover:text-[#2C241E] hover:bg-[#EFEAE2] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {orderConfirmed ? (
              /* Order Confirmation Screen */
              <div className="py-6 space-y-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#938171] font-semibold">
                    Order Placed Successfully
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#2C241E] mt-1 tabular-nums">
                    {orderConfirmed.orderId}
                  </h3>
                  <p className="text-sm text-[#5E5246] mt-2">
                    Thank you, <span className="font-semibold text-[#2C241E]">{orderConfirmed.customerName}</span>. Your ticket has been sent to our barista counter.
                  </p>
                </div>

                <div className="bg-[#F3EFEA] p-4 rounded-xl text-left space-y-3 text-xs border border-[#E6DFD5]">
                  <div className="flex items-start gap-2 text-[#4A3E33]">
                    <Clock className="w-4 h-4 text-[#B05D3B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Pickup Window:</span>
                      <span>{orderConfirmed.pickupTimeStr}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-[#4A3E33]">
                    <MapPin className="w-4 h-4 text-[#B05D3B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Counter Pickup Location:</span>
                      <span>42 Prince Street, Soho · Dedicated Online Order Rack</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#DFD6C9] flex justify-between font-semibold text-sm text-[#2C241E]">
                    <span>Total Charged:</span>
                    <span className="tabular-nums">${orderConfirmed.total.toFixed(2)}</span>
                  </div>
                </div>

                <p className="text-xs text-[#8A7B6E]">
                  Show order token <strong>{orderConfirmed.orderId}</strong> at the pick-up counter upon arrival.
                </p>

                <button
                  onClick={handleResetConfirmation}
                  className="w-full py-3 bg-[#2C241E] text-[#FAF8F5] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#43362C] transition-colors cursor-pointer"
                >
                  Done & Back to Menu
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="bg-[#F3EFEA] p-3.5 rounded-xl border border-[#E6DFD5] text-xs text-[#6A5D50]">
                  <p className="font-semibold text-[#2C241E]">Pick-up Counter in Soho</p>
                  <p className="mt-0.5">Orders are prepared immediately upon order confirmation.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                    Mobile Phone (For Ready SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (212) 555-0198"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] focus:outline-hidden focus:border-[#2C241E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                    Target Pickup Time
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'ASAP', label: 'ASAP (10m)' },
                      { id: '20min', label: 'In 25m' },
                      { id: '40min', label: 'In 45m' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setPickupTime(t.id as any)}
                        className={`py-2 text-center rounded-lg border transition-all cursor-pointer font-medium ${
                          pickupTime === t.id
                            ? 'border-[#2C241E] bg-[#2C241E] text-white'
                            : 'border-[#DDD5CA] text-[#635548] hover:bg-[#F3ECE4]'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Barista Tip */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7E7063] mb-1.5">
                    Support the Barista & Bakehouse Crew
                  </label>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    {[15, 18, 20, 0].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setTipPercent(pct)}
                        className={`py-2 text-center rounded-lg border transition-all cursor-pointer font-medium tabular-nums ${
                          tipPercent === pct
                            ? 'border-[#2C241E] bg-[#2C241E] text-white'
                            : 'border-[#DDD5CA] text-[#635548] hover:bg-[#F3ECE4]'
                        }`}
                      >
                        {pct === 0 ? 'None' : `${pct}%`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#8E7D6F] underline underline-offset-4 hover:text-[#2C241E] cursor-pointer"
                  >
                    ← Review bag items
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              /* Empty state */
              <div className="py-20 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFEAE2] flex items-center justify-center mx-auto text-[#968779]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#2C241E]">Your bag is currently empty</p>
                  <p className="text-xs text-[#7B6E61] mt-1 max-w-xs mx-auto">
                    Choose from our specialty pour-overs, house signatures, or morning sourdough pastries.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-[#2C241E] text-[#FAF8F5] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#43362C] cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              /* Items List */
              <div className="space-y-4">
                {items.map((cartItem) => {
                  const unitPrice = cartItem.totalPrice / cartItem.quantity;

                  return (
                    <div
                      key={cartItem.cartItemId}
                      className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E6DFD5] space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-serif font-bold text-sm text-[#2C241E]">
                            {cartItem.item.name}
                          </h4>
                          {/* Customization Details as clean unboxed text */}
                          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#786A5E] mt-0.5">
                            <span>{cartItem.customization.size}</span>
                            {cartItem.customization.temperature && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span>{cartItem.customization.temperature}</span>
                              </>
                            )}
                            {cartItem.customization.milk && cartItem.customization.milk !== 'None' && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span>{cartItem.customization.milk}</span>
                              </>
                            )}
                            {cartItem.customization.sweetness && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span>{cartItem.customization.sweetness}</span>
                              </>
                            )}
                          </div>
                          {cartItem.customization.notes && (
                            <p className="text-[11px] italic text-[#958577] mt-0.5">
                              "{cartItem.customization.notes}"
                            </p>
                          )}
                        </div>

                        <span className="text-xs font-semibold text-[#2C241E] tabular-nums whitespace-nowrap">
                          ${cartItem.totalPrice.toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-[#DDD5CA] rounded-md bg-[#FAF8F5] text-xs">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)}
                            className="px-2 py-0.5 text-[#635548] hover:text-[#2C241E] cursor-pointer"
                          >
                            −
                          </button>
                          <span className="px-2 py-0.5 font-semibold tabular-nums text-[#2C241E]">
                            {cartItem.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)}
                            className="px-2 py-0.5 text-[#635548] hover:text-[#2C241E] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(cartItem.cartItemId, 0)}
                          className="text-[#9F9082] hover:text-[#B05D3B] p-1 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Action Area */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-5 border-t border-[#EDE6DC] bg-[#FAF8F5] space-y-3">
              {/* Financial Breakdown */}
              <div className="space-y-1.5 text-xs text-[#6B5E51]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-[#2C241E]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated NYC Tax (8.875%)</span>
                  <span className="tabular-nums font-medium text-[#2C241E]">${tax.toFixed(2)}</span>
                </div>
                {isCheckingOut && tipAmount > 0 && (
                  <div className="flex justify-between">
                    <span>Crew Tip ({tipPercent}%)</span>
                    <span className="tabular-nums font-medium text-[#2C241E]">${tipAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#E6DFD5] flex justify-between text-sm font-bold text-[#2C241E]">
                  <span>Total</span>
                  <span className="tabular-nums">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button */}
              {isCheckingOut ? (
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full py-3.5 bg-[#2C241E] text-[#FAF8F5] rounded-xl font-medium text-xs uppercase tracking-wider hover:bg-[#43362C] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Confirm Pickup Order (${grandTotal.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3.5 bg-[#2C241E] text-[#FAF8F5] rounded-xl font-medium text-xs uppercase tracking-wider hover:bg-[#43362C] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Proceed to Pickup Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
