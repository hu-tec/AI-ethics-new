import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-8">
          {/* Left Column: Logo & Description */}
          <div className="space-y-4 max-w-[280px]">
            <h3 className="text-xl font-bold text-primary">휴텍씨</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground break-keep">
              AI 시대, 기술을 넘어 기준을 설계합니다.
            </p>
          </div>

          {/* Right Column: Contact */}
          <div className="flex flex-col gap-4 min-w-[280px]">
            <h4 className="font-bold text-foreground mb-1 text-[15px]">CONTACT </h4>
            <ul className="space-y-4 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="leading-snug">서울 서초구 양재천로 19길 26, 6층 (양재동)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span>02-6207-9090</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>hutetchc02@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-[13px] text-muted-foreground">
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center text-foreground">
              <p>상호명: 주식회사 휴텍씨</p>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <p>대표이사: 박미진</p>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <p>사업자등록번호: [사업자번호 입력]</p>
            </div>
            <p className="pt-4 text-muted-foreground">
              &copy; 2026 HuTechC. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
