import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onReserveClick: () => void;
}

export function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1764076327046-fe35f955cba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGNvdW50cnlzaWRlJTIwZGluaW5nJTIwd2FybXxlbnwxfHx8fDE3NzA3ODc2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="따뜻한 식사 풍경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* 메인 카피 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-120px)] text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 tracking-[0.3em] mb-6"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "0.8rem" }}
        >
          자연이 차려주는 밥상
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white mb-6 max-w-2xl text-center"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
          }}
        >
          이 마을에서 만나는<br />특별한 한 끼
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/60 mb-10 max-w-lg text-center"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "1rem", lineHeight: 1.8 }}
        >
          패키지 식사 · 예약제 식사 · 아침 식사를 한눈에
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReserveClick}
          className="px-10 py-4 bg-[#5B6B4A] text-white rounded-full hover:bg-[#4A5A3B] transition-colors cursor-pointer"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "0.95rem", letterSpacing: "0.05em" }}
        >
          예약하기
        </motion.button>
      </div>

      {/* 하단 스크롤 안내 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}>아래로 스크롤</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}