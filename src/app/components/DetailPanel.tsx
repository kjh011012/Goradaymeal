import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Clock,
  CalendarDays,
  Users,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import type { MenuItem } from "./data";

interface DetailPanelProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
const TIME_SLOTS = [
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "10:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];

function getAvailableTimeSlots(availableTime: string): string[] {
  return TIME_SLOTS.filter(() => true);
}

export function DetailPanel({ item, isOpen, onClose }: DetailPanelProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(2);
  const [note, setNote] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setGuestCount(2);
      setNote("");
      setIsConfirmed(false);
    }
  }, [isOpen, item]);

  if (!item) return null;

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  const isDateAvailable = (day: number) => {
    const date = new Date(year, month, day);
    return date >= today;
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
      onClose();
    }, 2500);
  };

  const monthNames = [
    "1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* 패널 - 데스크탑: 오른쪽 슬라이드, 모바일: 전체 화면 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:w-[520px] bg-card z-50 overflow-y-auto shadow-2xl"
          >
            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* 확인 메시지 */}
            <AnimatePresence>
              {isConfirmed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-card z-20 flex flex-col items-center justify-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-[#5B6B4A] flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                    }}
                  >
                    예약이 완료되었습니다
                  </h3>
                  <p className="text-muted-foreground text-center" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {year}년 {month + 1}월 {selectedDate}일 {selectedTime}<br />
                    {guestCount}명 · {item.name}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 상단 이미지 */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 backdrop-blur-sm mb-3"
                  style={{ fontSize: "0.7rem" }}
                >
                  {item.reservable ? "예약 가능" : "예약 마감"}
                </span>
                <h2
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </h2>
                <p className="text-white/70" style={{ fontSize: "0.85rem" }}>
                  {item.description}
                </p>
              </div>
            </div>

            {/* 상세 정보 */}
            <div className="p-6">
              {/* 정보 카드 */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                  <Clock className="w-4 h-4 text-[#5B6B4A]" />
                  <div>
                    <p className="text-muted-foreground" style={{ fontSize: "0.7rem" }}>소요 시간</p>
                    <p className="text-foreground" style={{ fontSize: "0.8rem" }}>{item.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                  <CalendarDays className="w-4 h-4 text-[#5B6B4A]" />
                  <div>
                    <p className="text-muted-foreground" style={{ fontSize: "0.7rem" }}>이용 시간</p>
                    <p className="text-foreground" style={{ fontSize: "0.78rem" }}>{item.availableTime.split("/")[0].trim()}</p>
                  </div>
                </div>
              </div>

              {/* 가격 */}
              <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-[#5B6B4A]/5 border border-[#5B6B4A]/10">
                <span className="text-foreground" style={{ fontSize: "0.9rem" }}>1인 가격</span>
                <span
                  className="text-[#5B6B4A]"
                  style={{ fontSize: "1.2rem", fontWeight: 600 }}
                >
                  {item.price.toLocaleString()}원
                </span>
              </div>

              {/* 포함 구성 */}
              <div className="mb-8">
                <h4
                  className="text-foreground mb-3"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  포함 구성
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.includes.map((inc) => (
                    <span
                      key={inc}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-foreground"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {inc}
                    </span>
                  ))}
                </div>
              </div>

              {/* 단계 표시 */}
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-1 rounded-full transition-colors ${
                      step >= s ? "bg-[#5B6B4A]" : "bg-secondary"
                    }`}
                  />
                ))}
              </div>

              {/* 단계 1: 날짜 선택 */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4
                    className="text-foreground mb-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    날짜를 선택해주세요
                  </h4>

                  {/* 달력 헤더 */}
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={prevMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors cursor-pointer">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                      {year}년 {monthNames[month]}
                    </span>
                    <button onClick={nextMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors cursor-pointer">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 요일 */}
                  <div className="grid grid-cols-7 mb-2">
                    {DAYS.map((day) => (
                      <div
                        key={day}
                        className="text-center text-muted-foreground py-2"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* 날짜 */}
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {calendarDays.map((day, i) => (
                      <div key={i} className="aspect-square flex items-center justify-center">
                        {day && (
                          <button
                            disabled={!isDateAvailable(day)}
                            onClick={() => setSelectedDate(day)}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                              selectedDate === day
                                ? "bg-[#5B6B4A] text-white"
                                : isDateAvailable(day)
                                ? "hover:bg-secondary text-foreground"
                                : "text-muted-foreground/40 cursor-not-allowed"
                            }`}
                            style={{ fontSize: "0.8rem" }}
                          >
                            {day}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    disabled={!selectedDate}
                    onClick={() => setStep(2)}
                    className={`w-full py-3.5 rounded-xl transition-all cursor-pointer ${
                      selectedDate
                        ? "bg-[#5B6B4A] text-white hover:bg-[#4A5A3B]"
                        : "bg-secondary text-muted-foreground cursor-not-allowed"
                    }`}
                    style={{ fontSize: "0.9rem" }}
                  >
                    다음 단계
                  </button>
                </motion.div>
              )}

              {/* 단계 2: 시간 및 인원 */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4
                    className="text-foreground mb-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    시간과 인원을 선택해주세요
                  </h4>

                  {/* 시간 선택 */}
                  <p className="text-muted-foreground mb-3" style={{ fontSize: "0.8rem" }}>
                    이용 시간: {item.availableTime}
                  </p>
                  <div className="grid grid-cols-4 gap-2 mb-8">
                    {["11:30", "12:00", "12:30", "13:00", "17:30", "18:00", "18:30", "19:00"].map(
                      (time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 rounded-lg transition-all cursor-pointer ${
                            selectedTime === time
                              ? "bg-[#5B6B4A] text-white"
                              : "bg-secondary text-foreground hover:bg-accent"
                          }`}
                          style={{ fontSize: "0.8rem" }}
                        >
                          {time}
                        </button>
                      )
                    )}
                  </div>

                  {/* 인원 선택 */}
                  <div className="flex items-center justify-between mb-8 p-4 rounded-xl bg-secondary">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#5B6B4A]" />
                      <span style={{ fontSize: "0.9rem" }}>인원</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                        className="w-8 h-8 rounded-full bg-card flex items-center justify-center shadow-sm hover:shadow transition-all cursor-pointer"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span style={{ fontSize: "1.1rem", fontWeight: 500, minWidth: "2rem", textAlign: "center" }}>
                        {guestCount}
                      </span>
                      <button
                        onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                        className="w-8 h-8 rounded-full bg-card flex items-center justify-center shadow-sm hover:shadow transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3.5 rounded-xl bg-secondary text-foreground hover:bg-accent transition-all cursor-pointer"
                      style={{ fontSize: "0.9rem" }}
                    >
                      이전
                    </button>
                    <button
                      disabled={!selectedTime}
                      onClick={() => setStep(3)}
                      className={`flex-[2] py-3.5 rounded-xl transition-all cursor-pointer ${
                        selectedTime
                          ? "bg-[#5B6B4A] text-white hover:bg-[#4A5A3B]"
                          : "bg-secondary text-muted-foreground cursor-not-allowed"
                      }`}
                      style={{ fontSize: "0.9rem" }}
                    >
                      다음 단계
                    </button>
                  </div>
                </motion.div>
              )}

              {/* 단계 3: 최종 확인 */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4
                    className="text-foreground mb-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    예약 내용을 확인해주세요
                  </h4>

                  {/* 예약 요약 */}
                  <div className="space-y-3 mb-6 p-4 rounded-xl bg-secondary">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>메뉴</span>
                      <span className="text-foreground" style={{ fontSize: "0.85rem" }}>{item.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>날짜</span>
                      <span className="text-foreground" style={{ fontSize: "0.85rem" }}>
                        {year}년 {month + 1}월 {selectedDate}일
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>시간</span>
                      <span className="text-foreground" style={{ fontSize: "0.85rem" }}>{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>인원</span>
                      <span className="text-foreground" style={{ fontSize: "0.85rem" }}>{guestCount}명</span>
                    </div>
                    <div className="pt-3 border-t border-border/50 flex justify-between">
                      <span className="text-foreground" style={{ fontSize: "0.9rem", fontWeight: 500 }}>총 금액</span>
                      <span
                        className="text-[#5B6B4A]"
                        style={{ fontSize: "1.1rem", fontWeight: 600 }}
                      >
                        {(item.price * guestCount).toLocaleString()}원
                      </span>
                    </div>
                  </div>

                  {/* 요청사항 */}
                  <div className="mb-6">
                    <label
                      className="block text-foreground mb-2"
                      style={{ fontSize: "0.85rem", fontWeight: 500 }}
                    >
                      요청사항 (선택)
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="알레르기, 특별 요청 등을 입력해주세요"
                      className="w-full p-3 rounded-xl bg-secondary border-none resize-none focus:outline-none focus:ring-2 focus:ring-[#5B6B4A]/30 text-foreground placeholder:text-muted-foreground/60"
                      rows={3}
                      style={{ fontSize: "0.85rem" }}
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3.5 rounded-xl bg-secondary text-foreground hover:bg-accent transition-all cursor-pointer"
                      style={{ fontSize: "0.9rem" }}
                    >
                      이전
                    </button>
                    <button
                      onClick={handleConfirm}
                      className="flex-[2] py-3.5 rounded-xl bg-[#5B6B4A] text-white hover:bg-[#4A5A3B] transition-all cursor-pointer"
                      style={{ fontSize: "0.9rem" }}
                    >
                      예약 확정하기
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}