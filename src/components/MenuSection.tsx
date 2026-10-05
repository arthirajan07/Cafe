import React, { useState, useMemo } from 'react';
import { MenuItem, CategoryId } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import { ProductArt } from './ArtisanIllustrations';
import { Plus, Search, Check, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  recentlyAddedId: string | null;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  recentlyAddedId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesNotes = item.notes?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesNotes) return false;
      }
      // Dietary filter
      if (dietaryFilter !== 'all') {
        if (!item.dietary || !item.dietary.includes(dietaryFilter as any)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-16 md:py-24 border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-[#938171] font-semibold mb-2">
            Crafted for the Slow Morning
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C241E] tracking-tight">
            The Seasonal Menu
          </h2>
          <p className="text-sm sm:text-base text-[#6E6155] mt-3">
            Every drink is pulled to order on our custom Synesso and poured into Japanese ceramics. Pastries baked daily in small batches until sold out.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="space-y-4 mb-10">
          {/* Interactive Category Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#EFEAE2] rounded-xl overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#FAF8F5] text-[#2C241E] shadow-xs'
                  : 'text-[#685A4D] hover:text-[#2C241E]'
              }`}
            >
              Full Menu ({MENU_ITEMS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryId)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#FAF8F5] text-[#2C241E] shadow-xs'
                    : 'text-[#685A4D] hover:text-[#2C241E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Dietary Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#9D8E81] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search roasts, pastries, notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#DDD5CA] rounded-lg text-[#2C241E] placeholder:text-[#9D8E81] focus:outline-hidden focus:border-[#2C241E] focus:ring-1 focus:ring-[#2C241E] transition-colors"
              />
            </div>

            {/* Dietary Filter Segmented buttons */}
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-[#6B5D50]">
              <span className="text-[#8E7E70]">Filter:</span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#2C241E] text-[#FAF8F5] font-medium'
                    : 'bg-[#EFEAE2] hover:bg-[#E5DFD6]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('Vegan')}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                  dietaryFilter === 'Vegan'
                    ? 'bg-[#2C241E] text-[#FAF8F5] font-medium'
                    : 'bg-[#EFEAE2] hover:bg-[#E5DFD6]'
                }`}
              >
                Plant-Based
              </button>
              <button
                onClick={() => setDietaryFilter('Gluten-Friendly')}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                  dietaryFilter === 'Gluten-Friendly'
                    ? 'bg-[#2C241E] text-[#FAF8F5] font-medium'
                    : 'bg-[#EFEAE2] hover:bg-[#E5DFD6]'
                }`}
              >
                Gluten-Friendly
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#F4EFE9] rounded-2xl border border-dashed border-[#D7CCBE]">
            <p className="text-[#65574A] text-sm">No items match your search or filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-3 text-xs font-semibold text-[#B05D3B] underline underline-offset-4 cursor-pointer"
            >
              Clear filters and show all items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => {
              const isRecentlyAdded = recentlyAddedId === item.id;

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between bg-[#FAF8F5] rounded-2xl border border-[#E6DFD5] p-5 hover:border-[#D5CABE] hover:shadow-xs transition-all duration-200"
                >
                  <div>
                    {/* Visual Card Artwork */}
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <ProductArt
                        category={item.category}
                        name={item.name}
                        className="w-full h-40 transition-transform duration-300 group-hover:scale-102"
                      />

                      {/* Clean Accent Kicker (NO static pill pill-in-pill spam) */}
                      {item.accentNote && (
                        <div className="absolute top-3 left-3 bg-[#2C241E]/90 backdrop-blur-xs text-[#FAF8F5] text-[11px] font-medium px-2.5 py-0.5 rounded-sm">
                          {item.accentNote}
                        </div>
                      )}
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center gap-1.5 text-xs text-[#87786B] mb-1.5">
                      <span className="capitalize">{item.category}</span>
                      {item.notes && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{item.notes}</span>
                        </>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="font-serif text-xl font-bold text-[#2C241E] leading-snug group-hover:text-[#B05D3B] transition-colors">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#6A5E53] mt-2 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Module */}
                  <div className="mt-5 pt-4 border-t border-[#EFEAE2] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#8A7C6E] block">Price</span>
                      <span className="text-lg font-semibold text-[#2C241E] tabular-nums">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectItem(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                        isRecentlyAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#2C241E] text-[#FAF8F5] hover:bg-[#473A30]'
                      }`}
                    >
                      {isRecentlyAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{item.hasMilkOptions || item.hasSizeOptions ? 'Customize' : 'Add to Bag'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
