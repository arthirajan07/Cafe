import { MenuItem } from '../types';

export const CATEGORIES = [
  { id: 'signature', label: 'Signature Roasts & Tonics' },
  { id: 'espresso', label: 'Espresso & Pour-Over' },
  { id: 'bakery', label: 'Artisan Bakehouse' },
  { id: 'brunch', label: 'Kitchen & Brunch Plates' },
  { id: 'beans', label: 'Single-Origin Beans (250g)' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Signature Drinks
  {
    id: 'sig-miso-maple',
    name: 'Komorebi Miso Maple Latte',
    category: 'signature',
    price: 6.75,
    description: 'Double shot single-origin espresso folded with house-reduced organic Vermont maple syrup, white shiro miso, velvety oat milk, and Maldon sea salt flakes.',
    notes: 'Sweet, umami, toasted caramel',
    availableHotOrIced: true,
    hasMilkOptions: true,
    hasSizeOptions: true,
    isPopular: true,
    accentNote: 'House Signature'
  },
  {
    id: 'sig-hojicha-cloud',
    name: 'Kyoto Hojicha Sesame Cloud',
    category: 'signature',
    price: 7.25,
    description: 'Slow-whisked roasted green tea from Uji topped with cold-whipped sweet black sesame foam and a dust of kinako powder.',
    notes: 'Nutty, roasty, velvety cream',
    availableHotOrIced: true,
    hasMilkOptions: true,
    hasSizeOptions: true,
    isPopular: true,
    accentNote: 'Barista Special'
  },
  {
    id: 'sig-orange-cortado',
    name: 'Cardamom & Orange Blossom Cortado',
    category: 'signature',
    price: 5.75,
    description: 'Ethiopia Guji espresso infused with freshly crushed green cardamom, orange blossom water mist, and textured silky whole milk in 1:1 ratio.',
    notes: 'Citrus zest, warming spice, floral',
    availableHotOrIced: false,
    hasMilkOptions: true,
    hasSizeOptions: false,
    accentNote: 'Limited Batch'
  },
  {
    id: 'sig-smoked-vanilla-tonic',
    name: 'Smoked Vanilla Espresso Tonic',
    category: 'signature',
    price: 6.95,
    description: 'Bright double espresso poured over botanical Indian tonic water, house smoked Madagascar vanilla bean reduction, and charred rosemary sprig.',
    notes: 'Sparkling, effervescent, botanical',
    availableHotOrIced: false,
    hasMilkOptions: false,
    hasSizeOptions: true,
  },

  // Espresso & Pour-Over
  {
    id: 'esp-ethiopia-pourover',
    name: 'Pour-Over: Ethiopia Guji Uraga',
    category: 'espresso',
    price: 6.50,
    description: 'Hand-poured via Origami dripper. Washed heirloom cultivar grown at 2,150m elevation. Delicate and vibrant cup profile.',
    notes: 'Bergamot, yellow peach, jasmine blossom',
    availableHotOrIced: true,
    hasMilkOptions: false,
    hasSizeOptions: false,
    isPopular: true,
    accentNote: 'Direct Trade'
  },
  {
    id: 'esp-panama-geisha',
    name: 'Pour-Over: Panama Boquete Geisha',
    category: 'espresso',
    price: 9.75,
    description: 'Rare micro-lot anaerobic slow dry process from Hacienda La Esmeralda. Remarkable tea-like elegance with explosive florals.',
    notes: 'Meyer lemon, elderflower, raw honeycomb',
    availableHotOrIced: false,
    hasMilkOptions: false,
    hasSizeOptions: false,
    accentNote: 'Reserve Lot'
  },
  {
    id: 'esp-flat-white',
    name: 'Komorebi Flat White',
    category: 'espresso',
    price: 5.25,
    description: 'Double ristretto of our seasonal blend paired with glossy micro-textured steamed milk, poured in an 8oz ceramic cup.',
    notes: 'Hazelnut praline, cacao, sweet butter',
    availableHotOrIced: true,
    hasMilkOptions: true,
    hasSizeOptions: true,
  },
  {
    id: 'esp-kyoto-cold-drip',
    name: '12-Hour Kyoto Tower Cold Drip',
    category: 'espresso',
    price: 6.50,
    description: 'Gravity-extracted drop by drop through Japanese glass architectural towers over 12 hours. Served chilled over clear hand-cut ice.',
    notes: 'Winey acidity, dark stonefruit, cocoa nibs',
    availableHotOrIced: false,
    hasMilkOptions: false,
    hasSizeOptions: true,
    isPopular: true,
    accentNote: 'Limited Daily Run'
  },

  // Artisan Bakehouse
  {
    id: 'bak-normandy-croissant',
    name: 'Wild Sourdough Butter Croissant',
    category: 'bakery',
    price: 4.85,
    description: '72-hour cold-fermented laminated pastry using cultured Normandy AOP butter and wild yeast starter. Airy honeycomb interior with crisp outer crunch.',
    dietary: ['Gluten-Friendly'],
    notes: 'Rich cultured butter, hazelnut finish',
    isPopular: true,
    accentNote: 'Baked Fresh Every Morning'
  },
  {
    id: 'bak-cardamom-bullar',
    name: 'Swedish Cardamom Sourdough Bullar',
    category: 'bakery',
    price: 5.25,
    description: 'Twisted brioche knot generously infused with freshly stone-ground cardamom pods, pure cane sugar crystals, and vanilla pearl sugar.',
    notes: 'Aromatic, warm cardamom, caramelized bottom',
    isPopular: true,
    accentNote: 'House Favorite'
  },
  {
    id: 'bak-valrhona-pain',
    name: 'Almond & Valrhona Pain au Chocolat',
    category: 'bakery',
    price: 5.85,
    description: 'Double rods of 70% dark Valrhona Guanaja chocolate, almond frangipane cream filling, finished with roasted sliced almond flakes.',
    notes: 'Dark chocolate, toasted marzipan',
  },
  {
    id: 'bak-matcha-morning-bun',
    name: 'Matcha & Sicilian Pistachio Morning Bun',
    category: 'bakery',
    price: 5.95,
    description: 'Rolled laminated dough baked in muffin molds, dusted with ceremonial Uji matcha powder and filled with salted Bronte pistachio praline.',
    dietary: ['Vegan'],
    notes: 'Earthy green tea, sweet roasted pistachio',
  },

  // Kitchen & Brunch Plates
  {
    id: 'bru-avocado-tartine',
    name: 'Heritage Levain Avocado Tartine',
    category: 'brunch',
    price: 15.50,
    description: 'Thick toasted slice of house 24-hr fermented country loaf, whipped organic sheep feta, sliced Hass avocado, pickled pink shallots, and Egyptian hazelnut dukkah.',
    dietary: ['Vegan'],
    notes: 'Creamy, tangy, crunchy crunch',
    isPopular: true,
    accentNote: 'Served All Day'
  },
  {
    id: 'bru-truffle-eggs',
    name: 'Soft Scrambled Eggs & Truffle Toast',
    category: 'brunch',
    price: 16.75,
    description: 'Pasture-raised eggs gently folded with black truffle butter, garden chives, and shavings of 18-month Comté cheese over toasted Japanese milk bread.',
    notes: 'Silky, earthy truffle, savory richness',
    isPopular: true,
  },
  {
    id: 'bru-wild-chanterelle',
    name: 'Wild Chanterelle & Lemon Ricotta Toast',
    category: 'brunch',
    price: 16.25,
    description: 'Pan-roasted seasonal forest mushrooms tossed in lemon herb butter, creamy sheep milk ricotta, hot thyme honey drizzle on seeded sourdough.',
    notes: 'Earthy, bright citrus, floral sweetness',
  },
  {
    id: 'bru-buckwheat-granola',
    name: 'Toasted Buckwheat & Yogurt Bowl',
    category: 'brunch',
    price: 12.50,
    description: 'House-roasted sprouted buckwheat and coconut clusters, organic Greek strained yogurt, wild blackberry lavender compote, and wildflower bee pollen.',
    dietary: ['Gluten-Friendly'],
    notes: 'Nutty, refreshing, gentle floral',
  },

  // Single-Origin Coffee Bags
  {
    id: 'bean-ethiopia-guji',
    name: 'Ethiopia Guji Uraga (250g)',
    category: 'beans',
    price: 22.00,
    description: 'Whole bean coffee. Washed process. Sourced directly from smallholder producers in Uraga, Guji zone at 2,200m altitude. Light roast profile.',
    notes: 'Jasmine, bergamot, candied peach',
    isPopular: true,
    accentNote: 'Roast Date: Within 48 Hours'
  },
  {
    id: 'bean-colombia-huila',
    name: 'Colombia Huila Pink Bourbon (250g)',
    category: 'beans',
    price: 24.00,
    description: 'Whole bean coffee. Double anaerobic fermentation. Produced by the Los Pinos farm. Complex fruit-forward sweetness with silky mouthfeel.',
    notes: 'Pink guava, red currant, cane sugar',
    accentNote: 'Single Farm Micro-Lot'
  },
  {
    id: 'bean-house-blend',
    name: 'Komorebi Seasonal Espresso (250g)',
    category: 'beans',
    price: 19.50,
    description: 'Our cornerstone house blend of 60% washed Colombia and 40% natural Brazil Cerrado. Crafted for rich espresso extraction with dense crema.',
    notes: 'Dark cacao, hazelnut butter, brown sugar',
    accentNote: 'Omni-Roast for Espresso & Moka'
  },
];
