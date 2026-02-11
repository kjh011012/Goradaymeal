import { useState, useCallback, useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { CategoryCards } from "./components/CategoryCards";
import { MenuGrid } from "./components/MenuGrid";
import { DetailPanel } from "./components/DetailPanel";
import { Footer } from "./components/Footer";
import { CATEGORIES, MENU_ITEMS } from "./components/data";
import type { MenuItem } from "./components/data";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const handleCategoryChange = useCallback((categoryId: string | null) => {
    setActiveCategory(categoryId);
  }, []);

  const handleMenuClick = useCallback((item: MenuItem) => {
    setSelectedMenu(item);
    setIsPanelOpen(true);
  }, []);

  const handleReserveClick = useCallback(() => {
    setSelectedMenu(MENU_ITEMS[0]);
    setIsPanelOpen(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedMenu(null), 300);
  }, []);

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
    >
      <HeroSection onReserveClick={handleReserveClick} />
      <CategoryCards
        categories={CATEGORIES}
        onCategoryClick={handleCategoryClick}
      />
      <div ref={menuRef}>
        <MenuGrid
          items={MENU_ITEMS}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          onMenuClick={handleMenuClick}
        />
      </div>
      <Footer />
      <DetailPanel
        item={selectedMenu}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />
    </div>
  );
}