import { motion } from "motion/react";
import { Clock, Check } from "lucide-react";
import type { MenuItem } from "./data";

interface MenuGridProps {
  items: MenuItem[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
  onMenuClick: (item: MenuItem) => void;
}

const categoryLabel: Record<string, string> = {
  package: "패키지 식사",
  reservation: "예약제 한상",
  breakfast: "아침 식사",
  seasonal: "계절 특선",
};

export function MenuGrid({ items, activeCategory, onCategoryChange, onMenuClick }: MenuGridProps) {
  const filtered = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : items;

  return (
    <section id="menu" className="py-20 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
      {/* 섹션 제목 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p
          className="text-[#5B6B4A] tracking-[0.25em] mb-4"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "0.75rem" }}
        >
          메뉴 안내
        </p>
        <h2
          className="text-foreground mb-4"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 400,
          }}
        >
          {activeCategory ? categoryLabel[activeCategory] : "전체 메뉴"}
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
          한 끼의 식사가 특별한 경험이 되도록<br className="hidden md:block" /> 정성을 다해 준비했습니다
        </p>
      </motion.div>

      {/* 카테고리 필터 탭 */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
            !activeCategory
              ? "bg-[#5B6B4A] text-white"
              : "bg-secondary text-muted-foreground hover:bg-accent"
          }`}
          style={{ fontSize: "0.85rem" }}
        >
          전체
        </button>
        {Object.entries(categoryLabel).map(([key, label]) => (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeCategory === key
                ? "bg-[#5B6B4A] text-white"
                : "bg-secondary text-muted-foreground hover:bg-accent"
            }`}
            style={{ fontSize: "0.85rem" }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 메뉴 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            layout
            whileHover={{ y: -6 }}
            onClick={() => onMenuClick(item)}
            className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border/50"
          >
            {/* 이미지 */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* 카테고리 뱃지 */}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm"
                style={{ fontSize: "0.7rem" }}
              >
                {categoryLabel[item.category]}
              </div>
              {/* 예약 가능 표시 */}
              {item.reservable && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-[#5B6B4A]/90 text-white backdrop-blur-sm" style={{ fontSize: "0.7rem" }}>
                  <Check className="w-3 h-3" />
                  예약 가능
                </div>
              )}
            </div>

            {/* 내용 */}
            <div className="p-5">
              <h3
                className="text-foreground mb-2"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "1.15rem",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </h3>
              <p className="text-muted-foreground mb-4" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                {item.description}
              </p>

              {/* 포함 구성 */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.includes.slice(0, 3).map((inc) => (
                  <span
                    key={inc}
                    className="px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {inc}
                  </span>
                ))}
                {item.includes.length > 3 && (
                  <span
                    className="px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    style={{ fontSize: "0.72rem" }}
                  >
                    +{item.includes.length - 3}
                  </span>
                )}
              </div>

              {/* 하단 정보 */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span style={{ fontSize: "0.75rem" }}>{item.duration}</span>
                  </div>
                </div>
                <span
                  className="text-[#5B6B4A]"
                  style={{
                    fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                  }}
                >
                  {item.price.toLocaleString()}원
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
