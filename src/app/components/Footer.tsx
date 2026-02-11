import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#3D2C22] text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* 식당 정보 */}
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "1.2rem",
                fontWeight: 400,
              }}
            >
              마을 식당
            </h3>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8 }}>
              자연이 차려주는 밥상,<br />
              이 마을에서만 만날 수 있는<br />
              특별한 한 끼를 경험하세요.
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              찾아오시는 길
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#8FA676]" />
                <span style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                  경기도 양평군 서종면<br />마을길 123-4
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8FA676]" />
                <span style={{ fontSize: "0.85rem" }}>031-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#8FA676]" />
                <span style={{ fontSize: "0.85rem" }}>매일 07:30 ~ 21:00</span>
              </div>
            </div>
          </div>

          {/* 예약 안내 */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              예약 안내
            </h4>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8 }}>
              예약은 최소 하루 전까지<br />
              온라인 또는 전화로 가능합니다.<br />
              단체 예약은 별도 문의 바랍니다.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40" style={{ fontSize: "0.75rem" }}>
            마을 식당 · 자연이 차려주는 밥상
          </p>
        </div>
      </div>
    </footer>
  );
}
