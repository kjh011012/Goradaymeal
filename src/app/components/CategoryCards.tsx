import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Category } from "./data";

interface CategoryCardsProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

export function CategoryCards({ categories, onCategoryClick }: CategoryCardsProps) {
  return (
    <section id="categories" className="py-20 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
      {/* 섹션 제목 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p
          className="text-[#5B6B4A] tracking-[0.25em] mb-4"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "0.75rem" }}
        >
          식사 프로그램
        </p>
        <h2
          className="text-foreground mb-4"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 400,
          }}
        >
          당신을 위해 준비한 식사
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
          농촌의 정성이 담긴 다양한 식사 프로그램을<br className="hidden md:block" /> 만나보세요
        </p>
      </motion.div>

      {/* 카테고리 그리드 - 데스크탑 */}
      <div className="hidden md:grid grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => onCategoryClick(cat.id)}
            className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className="text-white/60 mb-1"
                style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
              >
                {cat.menuCount}가지 메뉴
              </p>
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                }}
              >
                {cat.name}
              </h3>
              <p className="text-white/70 mb-4" style={{ fontSize: "0.8rem", lineHeight: 1.6 }}>
                {cat.description}
              </p>
              <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                <span style={{ fontSize: "0.8rem" }}>메뉴 보기</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 카테고리 슬라이드 - 모바일 */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 flex gap-4 snap-x snap-mandatory scrollbar-hide">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => onCategoryClick(cat.id)}
            className="group cursor-pointer relative rounded-2xl overflow-hidden min-w-[260px] aspect-[3/4] shadow-md flex-shrink-0 snap-center"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/60 mb-1" style={{ fontSize: "0.7rem" }}>
                {cat.menuCount}가지 메뉴
              </p>
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "1.1rem", fontWeight: 500 }}
              >
                {cat.name}
              </h3>
              <p className="text-white/70" style={{ fontSize: "0.75rem", lineHeight: 1.5 }}>
                {cat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
