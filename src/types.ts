export type CategoryId = 'signature' | 'espresso' | 'bakery' | 'brunch' | 'beans';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  description: string;
  notes?: string;
  dietary?: ('Vegan' | 'Gluten-Friendly' | 'Nut-Free')[];
  availableHotOrIced?: boolean;
  hasMilkOptions?: boolean;
  hasSizeOptions?: boolean;
  isPopular?: boolean;
  accentNote?: string;
}

export interface CartCustomization {
  size: 'Regular' | 'Large';
  milk?: 'Oat Milk' | 'Whole Milk' | 'Almond Milk' | 'None';
  temperature?: 'Hot' | 'Iced';
  sweetness?: 'Unsweetened' | 'Less Sweet' | 'Standard';
  notes?: string;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  customization: CartCustomization;
  quantity: number;
  totalPrice: number;
}

export interface TableBooking {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  timeSlot: string;
  seatingArea: 'Sunlit Window Bar' | 'Garden Courtyard' | 'Mezzanine Library';
  specialRequests?: string;
}
